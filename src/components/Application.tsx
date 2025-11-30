import { useState } from 'react';
import { supabase } from '../lib/supabase'; 

export default function Application() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    businessName: '',
    industry: '',
    referralSource: '',
    reason: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');

    try {
      const applicationData: Record<string, string> = {
        full_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        business_name: formData.businessName,
        industry: formData.industry,
        reason: formData.reason,
      };

      if (formData.referralSource) {
        applicationData.referral_source = formData.referralSource;
      }

      const { error } = await supabase.from('applications').insert([applicationData]);

      if (error) throw error;

      setStatus('success');
      setMessage('Your application has been received. We will be in touch soon.');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        businessName: '',
        industry: '',
        referralSource: '',
        reason: '',
      });
      setCurrentStep(1);
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again.');
      console.error('Error submitting application:', error);
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit(e);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStep1Valid = formData.firstName.trim() && formData.lastName.trim() && formData.email.trim() && formData.phone.trim();
  const isStep2Valid = formData.businessName.trim() && formData.industry && formData.referralSource;
  const isStep3Valid = formData.reason.trim();
  const wordCount = formData.reason.split(/\s+/).filter(word => word.length > 0).length;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="application" className="bg-black py-24 px-6">
      <div className="max-w-2xl mx-auto">
        

        <div className="mb-12">
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="flex flex-col items-center gap-2">
              <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-lora text-lg transition-all ${currentStep >= 1 ? 'bg-white text-black border-white' : 'border-gray-600 text-gray-600'}`}>
                1
              </div>
            </div>
            <div className={`flex-1 h-0.5 transition-all ${currentStep >= 2 ? 'bg-white' : 'bg-gray-700'}`}></div>
            <div className="flex flex-col items-center gap-2">
              <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-lora text-lg transition-all ${currentStep >= 2 ? 'bg-white text-black border-white' : 'border-gray-600 text-gray-600'}`}>
                2
              </div>
            </div>
            <div className={`flex-1 h-0.5 transition-all ${currentStep >= 3 ? 'bg-white' : 'bg-gray-700'}`}></div>
            <div className="flex flex-col items-center gap-2">
              <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-lora text-lg transition-all ${currentStep >= 3 ? 'bg-white text-black border-white' : 'border-gray-600 text-gray-600'}`}>
                3
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleNextStep} className="space-y-6">
          {currentStep === 1 && (
            <div className="space-y-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full bg-gray-100 text-gray-900 placeholder-gray-600 rounded-full px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full bg-gray-100 text-gray-900 placeholder-gray-600 rounded-full px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full bg-gray-100 text-gray-900 placeholder-gray-600 rounded-full px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full bg-gray-100 text-gray-900 placeholder-gray-600 rounded-full px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
              />
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Pty Ltd Company Name"
                required
                className="w-full bg-gray-100 text-gray-900 placeholder-gray-600 rounded-full px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
              />
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 text-gray-900 rounded-full px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all appearance-none cursor-pointer"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: 'right 1.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
              >
                <option value="">Select Role</option>
                <option value="Technology">CEO (Chief Excecutive)</option>
                <option value="Finance & Banking">COO (Operations)</option>
                <option value="Real Estate & Property">CFO (Finance)</option>
                <option value="Healthcare & Medical">CMO (Marketing)</option>
                <option value="Legal Services">CTO (Technology)</option>
              </select>
              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 text-gray-900 rounded-full px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all appearance-none cursor-pointer"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: 'right 1.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
              >
                <option value="">How Did You Hear About Us?</option>
                <option value="Social Media">Google</option>
                <option value="Referral">Facebook</option>
                <option value="Word of Mouth">Instagram</option>
                <option value="Search Engine">LinkedIn</option>
                <option value="Industry Event">Word of Mouth</option>
              </select>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm text-gray-400">Tell us about yourself</label>
                  <span className={`text-xs ${wordCount > 333 ? 'text-red-400' : 'text-gray-500'}`}>
                    {wordCount}/333 words
                  </span>
                </div>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows={12}
                  className="w-full bg-gray-100 text-gray-900 placeholder-gray-600 rounded-3xl px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all resize-none"
                />
              </div>
            </div>
          )}

          {status === 'success' && (
            <div className="bg-green-900/30 border border-green-700 text-green-300 px-6 py-4 rounded-full text-center">
              {message}
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-900/30 border border-red-700 text-red-300 px-6 py-4 rounded-full text-center">
              {message}
            </div>
          )}

          <div className="flex gap-4 pt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePreviousStep}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 rounded-full tracking-wide uppercase text-sm transition-colors border border-gray-700 hover:border-gray-600"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              disabled={
                status === 'submitting' ||
                (currentStep === 1 && !isStep1Valid) ||
                (currentStep === 2 && !isStep2Valid) ||
                (currentStep === 3 && (!isStep3Valid || wordCount > 333))
              }
              className={`flex-1 font-semibold py-4 rounded-full tracking-wide uppercase text-sm transition-colors ${currentStep === 1 && !isStep1Valid || currentStep === 2 && !isStep2Valid || currentStep === 3 && (!isStep3Valid || wordCount > 333) ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-white text-black hover:bg-gray-100'}`}
            >
              {status === 'submitting' ? 'Submitting...' : currentStep === 3 ? 'Submit Application' : 'Next'}
            </button>
          </div>

   
        </form>
      </div>
    </section>
  );
}
 