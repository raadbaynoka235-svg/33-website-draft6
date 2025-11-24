/*
  # Create applications table for 33 Private Members Club

  1. New Tables
    - `applications`
      - `id` (uuid, primary key) - Unique identifier for each application
      - `full_name` (text) - Applicant's full name
      - `email` (text) - Applicant's email address
      - `phone` (text) - Applicant's phone number
      - `business_name` (text) - Name of applicant's business
      - `industry` (text) - Industry sector of applicant's business
      - `reason` (text) - Why the applicant wants to join
      - `linkedin_url` (text, optional) - Applicant's LinkedIn profile URL
      - `status` (text) - Application status (pending, reviewing, approved, rejected)
      - `created_at` (timestamptz) - Timestamp of application submission
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `applications` table
    - Add policy for public users to insert their own applications
    - No read access for public users (admin-only access)

  3. Important Notes
    - Applications are write-only for public users
    - Uses default status of 'pending' for new applications
    - Includes automatic timestamp tracking
*/

CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  business_name text NOT NULL,
  industry text NOT NULL,
  reason text NOT NULL,
  linkedin_url text,
  status text DEFAULT 'pending' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an application"
  ON applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);
