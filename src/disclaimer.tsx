import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6 space-y-8">
      <h2 className="text-3xl font-bold">Disclaimer</h2>
      <p>
        JOBSLINKED.live is a job-support and documentation service. We do not guarantee interviews, job offers, or employment. Final hiring decisions are made by employers only.
      </p>

      <h2 className="text-3xl font-bold">No Refund Policy</h2>
      <p>
        All payments are non-refundable. Once a service is initiated, no refunds will be processed. Users must review details before payment.
      </p>

      <h2 className="text-3xl font-bold">User Responsibility</h2>
      <p>
        Users must provide accurate information. JOBSLINKED.live is not responsible for incorrect details submitted. Documents are prepared based on user input.
      </p>

      <h2 className="text-3xl font-bold">Data Usage</h2>
      <p>
        User data is used only for service delivery. No data is sold or misused. Data may be shared with employers only for job-related purposes.
      </p>

      <p className="font-semibold">
        By using this website, you agree to these terms and conditions.
      </p>
    </section>
  );
};

export default Disclaimer;