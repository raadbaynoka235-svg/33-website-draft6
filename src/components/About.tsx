import { ScrollReveal } from './ScrollReveal';

export default function About() {
  return (
    <ScrollReveal>
      <section id="about" className="min-h-screen bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-300 mb-8 leading-tight">
                  Designed for the select few who demand more than access
                </h2>
              </div>

              <div className="h-px w-16 bg-gray-700"></div>

              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p className="text-lg font-light">
                  33 is not simply a members club. It is a sanctuary for those who shape industries,
                  build empires, and redefine what is possible.
                </p>
                <p>
                  Nestled in the heart of Sydney, our four-floor facility offers an unparalleled
                  environment where privacy meets performance, and discretion fuels ambition.
                </p>
                <p>
                  Here, every detail is intentional. Every connection is meaningful. Every opportunity
                  is elevated.
                </p>
                <p className="text-gray-500 italic">
                  We are selective by design. Membership is not purchased — it is earned.
                </p>
              </div>
            </div>

            <div className="relative h-[600px] md:h-[700px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Sydney skyline"
                  className="w-full h-full object-cover opacity-60 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
