import React from 'react';

const SamplesVault: React.FC = () => {
  return (
    <>
      {/* SAMPLE RESUME */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">Sample Resume</h2>
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold">Candidate Name</h3>
          <p className="mt-2"><strong>Professional Summary:</strong> Experienced hospitality manager with expertise in restaurant service, buffet setups, and event operations.</p>
          <p className="mt-2"><strong>Key Skills:</strong> Team leadership, cost control, guest service, Excel dashboards.</p>
          <p className="mt-2"><strong>Experience:</strong> Restaurant Manager, Catering Supervisor, Cruise Hospitality.</p>
          <p className="mt-2"><strong>Education:</strong> Bachelor’s in Hospitality Management.</p>
          <p className="mt-2"><strong>Contact Information:</strong> Phone, Email, Location.</p>
        </div>
      </section>

      {/* SAMPLE COVER LETTER */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">Sample Cover Letter</h2>
        <div className="bg-white p-6 rounded shadow-md">
          <p>Dear Hiring Manager,</p>
          <p className="mt-2">
            I am writing to express my interest in the position advertised. With extensive experience in hospitality and event operations, I bring strong leadership, cost control expertise, and guest-focused service. I am confident my skills align with your requirements.
          </p>
          <p className="mt-2">Thank you for considering my application.</p>
          <p className="mt-2">Sincerely,<br />Candidate Name</p>
        </div>
      </section>

      {/* EMPLOYER DATA SAMPLE */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">Employer Data Sample</h2>
        <div className="overflow-x-auto bg-white p-6 rounded shadow-md">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-slate-200">
                <th className="border px-4 py-2">Company Name</th>
                <th className="border px-4 py-2">Industry</th>
                <th className="border px-4 py-2">City</th>
                <th className="border px-4 py-2">HR / Recruiter Email</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-4 py-2">Hotel Sunrise</td><td className="border px-4 py-2">Hospitality</td><td className="border px-4 py-2">Mumbai</td><td className="border px-4 py-2">hr@hotelsunrise.com</td></tr>
              <tr><td className="border px-4 py-2">EventWorks</td><td className="border px-4 py-2">Events</td><td className="border px-4 py-2">Delhi</td><td className="border px-4 py-2">careers@eventworks.in</td></tr>
              <tr><td className="border px-4 py-2">Oceanic Cruises</td><td className="border px-4 py-2">Travel</td><td className="border px-4 py-2">Kochi</td><td className="border px-4 py-2">hr@oceaniccruises.com</td></tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
          <p className="mt-4 text-sm text-gray-600">Actual employer data is shared in Excel format after payment.</p>
        </div>
      </section>
    </>
  );
};

export default SamplesVault;