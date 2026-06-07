import React, { useState } from 'react';

const PayPortal: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    location: '',
    position: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted (demo).');
  };

  return (
    <>
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Candidate Information</h2>
        <form className="bg-white p-8 rounded shadow-md space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location (City & State)"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position Applied For"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />
          <button type="submit" className="w-full bg-yellow-500 text-slate-900 font-semibold py-3 rounded">
            Submit
          </button>
        </form>

        <h2 className="text-3xl font-bold mt-16 mb-8 text-center">Choose Your Plan</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded shadow-md border">
            <h3 className="text-xl font-bold mb-2">Starter Job Pack</h3>
            <p className="text-3xl font-bold mb-4">₹49</p>
            <ul className="space-y-2 mb-6">
              <li>Basic resume format</li>
              <li>Standard cover letter</li>
              <li>List of 20 employer contacts</li>
              <li>Email-ready documents</li>
              <li>One-time service</li>
            </ul>
            <button className="w-full bg-slate-900 text-white py-3 rounded">Select ₹49 Plan</button>
          </div>

          <div className="bg-white p-8 rounded shadow-md border-2 border-yellow-500 relative">
            <span className="absolute top-0 right-0 bg-yellow-500 text-slate-900 px-3 py-1 text-sm font-semibold">
              Most Popular
            </span>
            <h3 className="text-xl font-bold mb-2">Premium Job Pack</h3>
            <p className="text-3xl font-bold mb-4">₹99</p>
            <ul className="space-y-2 mb-6">
              <li>Everything in Starter</li>
              <li>Advanced resume formatting</li>
              <li>ATS-optimized keywords</li>
              <li>Priority employer visibility</li>
              <li>Personalized cover letter</li>
            </ul>
            <button className="w-full bg-yellow-500 text-slate-900 py-3 rounded">Select ₹99 Plan</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PayPortal;