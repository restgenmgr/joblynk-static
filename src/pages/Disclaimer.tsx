import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <h1>Legal Disclaimer</h1>
      <p><em>Last updated: March 15, 2026</em></p>

      <section>
        <h2>1. General Information</h2>
        <p>The information on JobLynk.live is for general informational purposes only. We make no representation or warranty of any kind regarding accuracy, reliability, or completeness.</p>
      </section>

      <section>
        <h2>2. Professional Disclaimer</h2>
        <p>The Site does not contain professional career advice. Information is for general educational purposes only and not a substitute for professional advice.</p>
      </section>

      <section>
        <h2>3. External Links Disclaimer</h2>
        <p>The Site may contain links to third-party websites. We are not responsible for the content or accuracy of external sites.</p>
      </section>

      <section>
        <h2>4. Errors and Omissions Disclaimer</h2>
        <p>While we attempt to ensure information is accurate, JobLynk.live is not responsible for any errors or omissions.</p>
      </section>

      <section>
        <h2>5. Fair Use Disclaimer</h2>
        <p>The Site may use copyrighted material for criticism, comment, news reporting, teaching, scholarship, or research.</p>
      </section>

      <section>
        <h2>6. Views Expressed Disclaimer</h2>
        <p>User-generated content reflects the views of the authors and not necessarily the official policy of JobLynk.live.</p>
      </section>

      <section>
        <h2>7. "Use at Your Own Risk" Disclaimer</h2>
        <p>All information is provided "as is", without warranty of any kind, express or implied.</p>
      </section>

      <section style={{ marginTop: '3rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
        <p>Questions? Contact our <a href="/support">Support Team</a>.</p>
      </section>
    </div>
  );
};

export default Disclaimer;
