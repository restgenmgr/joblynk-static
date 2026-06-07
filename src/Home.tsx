import React from 'react'; 

const Home = () => {
  return (
    <>
      {/* ===== HERO BANNER SECTION ===== */}
      <div style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        overflow: 'hidden'
      }}>
        {/* Background image - using ai.jpg from your folder */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/ai.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: 1
        }}></div>
        
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.9) 100%)',
          zIndex: 2
        }}></div>

        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            JobLynk.live
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', 
            maxWidth: '700px', 
            marginBottom: '3rem',
            color: '#e2e8f0'
          }}>
            Bridging Jobs & Talent
          </p>
          
          {/* Tier Cards */}
          <div style={{ 
            display: 'flex', 
            gap: '30px', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            marginBottom: '3rem'
          }}>
            {/* White Tier */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              padding: '30px 40px',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.2)',
              minWidth: '280px',
              textAlign: 'left'
            }}>
              <h2 style={{ 
                color: '#fff', 
                margin: '0 0 15px 0',
                fontSize: '1.8rem'
              }}>
                White · ₹49
              </h2>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0 
              }}>
                <li style={{ marginBottom: '12px' }}>✅ Professional Resume</li>
                <li style={{ marginBottom: '12px' }}>✅ Cover Letter</li>
                <li>✅ 1 Updated Employee Data List</li>
              </ul>
            </div>

            {/* Gold Tier */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(180,83,9,0.2), rgba(180,83,9,0.3))',
              backdropFilter: 'blur(10px)',
              padding: '30px 40px',
              borderRadius: '24px',
              border: '2px solid #b45309',
              minWidth: '280px',
              textAlign: 'left'
            }}>
              <h2 style={{ 
                color: '#fbbf24', 
                margin: '0 0 15px 0',
                fontSize: '1.8rem'
              }}>
                Gold · ₹99
              </h2>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0 
              }}>
                <li style={{ marginBottom: '12px' }}>✨ AI-Optimized Resume</li>
                <li style={{ marginBottom: '12px' }}>✨ AI-Optimized Cover Letter</li>
                <li>✨ Premium Data List</li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <button style={{
            padding: '16px 48px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: '600',
            cursor: 'pointer',
            marginBottom: '1.5rem',
            transition: 'transform 0.2s, background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#1d4ed8'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#2563eb'}
          >
            Get Started
          </button>

          {/* Support Email */}
          <p style={{ color: '#94a3b8' }}>
            📧 tech-support@joblynk.live
          </p>
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <div style={{
        padding: '80px 20px',
        background: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{
              background: '#2563eb',
              color: 'white',
              padding: '4px 16px',
              borderRadius: '40px',
              fontSize: '0.9rem',
              display: 'inline-block',
              marginBottom: '20px'
            }}>
              About Us
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 2.8rem)',
              color: '#0f172a',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Bridging the Gap Between Jobs & Talent
            </h2>
          </div>

          {/* Content Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}>
            {/* Left Column - Text */}
            <div>
              <p style={{
                fontSize: '1.1rem',
                color: '#334155',
                lineHeight: '1.7',
                marginBottom: '20px'
              }}>
                JobLynk.live was born from a simple observation: millions of skilled Indian workers—
                from factory floors to home offices—struggle to present themselves professionally to
                employers. Either resumes are too expensive, or job platforms are too complicated.
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: '#334155',
                lineHeight: '1.7'
              }}>
                We started in 2024 with a clear mission:{' '}
                <strong>make job application tools affordable (₹49/₹99) and brutally simple.</strong>{' '}
                No confusing dashboards. No hidden fees. Just your resume, cover letter, and a direct
                line to employers who are actually hiring.
              </p>
              
              {/* Stats */}
              <div style={{
                display: 'flex',
                gap: '40px',
                marginTop: '40px'
              }}>
                <div>
                  <h3 style={{ color: '#2563eb', fontSize: '2.2rem', margin: 0 }}>500+</h3>
                  <p style={{ color: '#475569' }}>Job Seekers Placed</p>
                </div>
                <div>
                  <h3 style={{ color: '#2563eb', fontSize: '2.2rem', margin: 0 }}>200+</h3>
                  <p style={{ color: '#475569' }}>Verified Employers</p>
                </div>
              </div>
            </div>

            {/* Right Column - Promise Card */}
            <div style={{
              background: '#e6f0ff',
              borderRadius: '32px',
              padding: '40px'
            }}>
              <h3 style={{ color: '#1e40af', marginBottom: '30px', fontSize: '1.8rem' }}>
                🎯 Our Promise
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{
                  marginBottom: '25px',
                  display: 'flex',
                  gap: '15px',
                  alignItems: 'flex-start'
                }}>
                  <span style={{
                    background: '#2563eb',
                    color: 'white',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '16px'
                  }}>✓</span>
                  <span style={{ fontSize: '1.1rem' }}>
                    <strong>No monthly fees</strong> – Pay once, get your documents forever
                  </span>
                </li>
                <li style={{
                  marginBottom: '25px',
                  display: 'flex',
                  gap: '15px',
                  alignItems: 'flex-start'
                }}>
                  <span style={{
                    background: '#2563eb',
                    color: 'white',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>✓</span>
                  <span style={{ fontSize: '1.1rem' }}>
                    <strong>Real human support</strong> – Email us, get reply within hours
                  </span>
                </li>
                <li style={{
                  display: 'flex',
                  gap: '15px',
                  alignItems: 'flex-start'
                }}>
                  <span style={{
                    background: '#2563eb',
                    color: 'white',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>✓</span>
                  <span style={{ fontSize: '1.1rem' }}>
                    <strong>Privacy first</strong> – Your Aadhaar and data are encrypted
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TEAM SECTION ===== */}
      <div style={{
        padding: '80px 20px',
        background: '#f8fafc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#0f172a',
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            Meet the Team
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center'
          }}>
            {/* Team Member 1 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: '#2563eb',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: '0 auto 20px'
              }}>
                VK
              </div>
              <h3 style={{ margin: '0 0 5px 0' }}>Vikram Khanna</h3>
              <p style={{ color: '#64748b' }}>Founder</p>
            </div>

            {/* Team Member 2 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: '#2563eb',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: '0 auto 20px'
              }}>
                NP
              </div>
              <h3 style={{ margin: '0 0 5px 0' }}>Neha Patel</h3>
              <p style={{ color: '#64748b' }}>Head of Operations</p>
            </div>

            {/* Team Member 3 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: '#2563eb',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: '0 auto 20px'
              }}>
                AR
              </div>
              <h3 style={{ margin: '0 0 5px 0' }}>Abdul Rahman</h3>
              <p style={{ color: '#64748b' }}>Tech Lead</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CONTACT BANNER ===== */}
      <div style={{
        background: '#1e293b',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ 
            color: '#facc15', 
            fontSize: '2rem', 
            marginBottom: '20px' 
          }}>
            📞 We're Here to Help
          </h3>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            Have questions? Our team responds within hours, not days.
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '12px'
          }}>
            <strong style={{ color: '#facc15', fontSize: '1.3rem' }}>
              tech-support@joblynk.live
            </strong>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div style={{
        background: '#0f172a',
        color: '#94a3b8',
        padding: '30px 20px',
        textAlign: 'center',
        borderTop: '1px solid #334155'
      }}>
        <p>© 2024 JobLynk.live — Bridging Jobs & Talent</p>
        <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
          No Refund Policy applies. All digital sales are final.
        </p>
      </div>
    </>
  );
};

export default Home;
