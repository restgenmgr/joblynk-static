import React, { useState } from 'react';

const Blog = () => {
  const [showForm, setShowForm] = useState(false);

  const posts = [
    // TECH ARTICLES
    { slug: "tech-boom", title: "India's Tech Job Boom 2025", category: "TECH", author: "Admin", date: "April 21, 2026", url: "/tech-boom.html" },
    { slug: "remote-hybrid", title: "Remote vs Hybrid vs Office", category: "TECH", author: "Admin", date: "April 20, 2026", url: "/remote-hybrid.html" },
    { slug: "interview-mastery", title: "Modern Interview Mastery", category: "TECH", author: "Admin", date: "April 19, 2026", url: "/interview-mastery.html" },
    { slug: "upskilling-roadmap", title: "Upskilling Roadmap 2025", category: "TECH", author: "Admin", date: "April 18, 2026", url: "/upskilling-roadmap.html" },
    { slug: "hidden-job-market", title: "The Hidden Job Market", category: "TECH", author: "Admin", date: "April 17, 2026", url: "/hidden-job-market.html" },
    // NON-TECH ARTICLES
    { slug: "digital-marketing-careers", title: "Digital Marketing Careers in India", category: "NON-TECH", author: "Admin", date: "April 16, 2026", url: "/digital-marketing-careers.html" },
    { slug: "sales-b2b-careers", title: "Sales & B2B Careers in India", category: "NON-TECH", author: "Admin", date: "April 15, 2026", url: "/sales-b2b-careers.html" },
    { slug: "hr-recruitment-careers", title: "HR & Recruitment Careers", category: "NON-TECH", author: "Admin", date: "April 14, 2026", url: "/hr-recruitment-careers.html" },
    { slug: "operations-logistics-careers", title: "Operations & Logistics Careers", category: "NON-TECH", author: "Admin", date: "April 13, 2026", url: "/operations-logistics-careers.html" },
    { slug: "finance-accounting-careers", title: "Finance & Accounting Careers", category: "NON-TECH", author: "Admin", date: "April 12, 2026", url: "/finance-accounting-careers.html" }
  ];

  return (
    <div style={{ padding: '60px 5%', background: '#0a0a0f', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '15px' }}>
          <h1 style={{ color: '#fbbf24', margin: 0 }}>JOBS-LINKED <span style={{color: '#fff'}}>BLOG</span></h1>
          <button onClick={() => setShowForm(!showForm)} style={{ padding: '10px 20px', background: '#fbbf24', border: 'none', fontWeight: 'bold', cursor: 'pointer', borderRadius: '5px' }}>
            {showForm ? 'CLOSE' : 'SUBMIT POST'}
          </button>
        </div>

        <div style={{ display: 'grid', gap: '30px' }}>
          {posts.map((post, index) => (
            <div key={index} style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', border: '1px solid #333', borderRadius: '12px' }}>
              <span style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: 'bold' }}>{post.category}</span>
              <h2 style={{ margin: '15px 0' }}>{post.title}</h2>
              <a 
                href={post.url} 
                style={{ 
                  color: '#fbbf24', 
                  fontWeight: 'bold', 
                  textDecoration: 'none', 
                  border: '1px solid #fbbf24', 
                  padding: '8px 15px', 
                  borderRadius: '5px', 
                  display: 'inline-block',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }}
              >
                READ FULL ARTICLE →
              </a>
              <div style={{ marginTop: '20px', fontSize: '0.85rem', color: '#475569' }}>
                By {post.author} | {post.date}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Submission Form Popup */}
      {showForm && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#1a1a2e', padding: '30px', borderRadius: '12px', maxWidth: '500px', width: '90%' }}>
            <h2 style={{ color: '#fbbf24', marginBottom: '20px' }}>Submit Your Article</h2>
            <form action="https://formspree.io/f/your-form-id" method="POST">
              <input type="text" name="title" placeholder="Article Title" required style={{ width: '100%', padding: '10px', marginBottom: '15px', background: '#0a0a0f', border: '1px solid #333', color: 'white', borderRadius: '5px' }} />
              <textarea name="content" placeholder="Article Content" rows="5" required style={{ width: '100%', padding: '10px', marginBottom: '15px', background: '#0a0a0f', border: '1px solid #333', color: 'white', borderRadius: '5px' }}></textarea>
              <input type="text" name="author" placeholder="Your Name" required style={{ width: '100%', padding: '10px', marginBottom: '15px', background: '#0a0a0f', border: '1px solid #333', color: 'white', borderRadius: '5px' }} />
              <button type="submit" style={{ background: '#fbbf24', color: '#000', padding: '10px 20px', border: 'none', fontWeight: 'bold', cursor: 'pointer', borderRadius: '5px', marginRight: '10px' }}>Submit</button>
              <button type="button" onClick={() => setShowForm(false)} style={{ background: '#333', color: '#fff', padding: '10px 20px', border: 'none', fontWeight: 'bold', cursor: 'pointer', borderRadius: '5px' }}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
