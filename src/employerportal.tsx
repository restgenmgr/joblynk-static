import React from 'react';
import { Link } from 'react-router-dom';

const EmployerPortal: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Credentials verifying. Your Excel download link will be emailed shortly.");
  };

  return (
    <>
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">Access Ready-to-Apply Candidates</h2>
        <p>
          Employers can view curated candidate profiles submitted through JOBSLINKED.live. Our platform provides structured, job-ready information to simplify recruitment.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-6">What Employers Receive</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Candidate name</li>
          <li>Position applied for</li>
          <li>Location</li>
          <li>Contact details</li>
          <li>Resume-ready profiles</li>
        </ul>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-6">Data Format & Secure Access</h2>
        <p>
          Candidate information is shared in a secure Excel format. It is easy to filter, sort, and download, and is updated periodically.
        </p>
        <form className="bg-white p-8 rounded shadow-md space-y-6 mt-6" onSubmit={handleSubmit}>
          <input type="text" placeholder="Company Name" className="w-full p-3 border rounded" required />
          <input type="text" placeholder="Recruiter Name" className="w-full p-3 border rounded" required />
          <input type="email" placeholder="Work Email" className="w-full p-3 border rounded" required />
          <input type="text" placeholder="Roles Hiring For" className="w-full p-3 border rounded" required />
          <button type="submit" className="w-full bg-yellow-500 text-slate-900 font-semibold py-3 rounded">
            Request Candidate List
          </button>
        </form>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-6">Ethical Use Statement</h2>
        <p>
          Data is shared only for recruitment purposes. Employers must not misuse or resell candidate information.
        </p>
      </section>
    </>
  );
};

export default EmployerPortal;