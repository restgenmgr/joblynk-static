import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();

  const blogData: any = {
    "tech-boom": {
      title: "India’s Tech Job Boom",
      date: "April 21, 2026",
      content: `<h3>The 2026 Tech Surge</h3><p>India's tech sector is growing at 8% annually. AI and Cloud roles are leading the demand...</p>`
    },
    "remote-hybrid": {
      title: "Remote vs Hybrid vs Office",
      date: "April 20, 2026",
      content: `<h3>The Future of Work</h3><p>68% of Indian techies prefer hybrid models. Companies like Zoho and Freshworks are leading the remote-first culture.</p>`
    },
    "interview-mastery": {
      title: "Modern Interview Mastery",
      date: "April 19, 2026",
      content: `<h3>Cracking the Tech Interview</h3><p>Focus on your GitHub portfolio and the STAR method for behavioral questions.</p>`
    },
    "upskilling-roadmap": {
      title: "Upskilling Roadmap",
      date: "April 18, 2026",
      content: `<h3>Stay Relevant</h3><p>Top certifications for 2026 include AWS Solutions Architect, Kubernetes (CKA), and AI Ethics.</p>`
    },
    "hidden-job-market": {
      title: "The Hidden Job Market",
      date: "April 17, 2026",
      content: `<h3>Networking Secrets</h3><p>80% of high-paying roles are filled through internal referrals before they hit Job boards.</p>`
    },
    "digital-marketing-careers": {
      title: "Digital Marketing Careers",
      date: "April 16, 2026",
      content: `<h3>Digital Growth</h3><p>SEO, PPC, and Content Strategy are the three pillars of the 2026 marketing landscape in India.</p>`
    },
    "sales-b2b-careers": {
      title: "Sales & B2B Careers",
      date: "April 15, 2026",
      content: `<h3>The Art of the Deal</h3><p>B2B SaaS sales offers some of the highest commission structures in the non-tech world.</p>`
    },
    "hr-recruitment-careers": {
      title: "HR & Recruitment",
      date: "April 14, 2026",
      content: `<h3>Strategic HR</h3><p>Human Resources is now about Data Analytics and Employee Experience, not just payroll.</p>`
    },
    "operations-logistics-careers": {
      title: "Operations & Logistics",
      date: "April 13, 2026",
      content: `<h3>Supply Chain Revolution</h3><p>Quick-commerce and e-commerce are doubling the demand for operations managers in metro cities.</p>`
    },
    "finance-accounting-careers": {
      title: "Finance & Accounting",
      date: "April 12, 2026",
      content: `<h3>Financial Stability</h3><p>GST compliance and Fintech innovations have made accounting a top-tier secure career choice.</p>`
    }
  };

  const post = blogData[slug || ""];

  if (!post) {
    return (
      <div style={{ padding: '100px', textAlign: 'center', color: 'white' }}>
        <h2>Post Not Found</h2>
        <p>Slug: {slug}</p>
        <Link to="/blog" style={{ color: '#fbbf24' }}>Back to Blog</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '60px 10%', color: 'white', background: '#0a0a0f', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link to="/blog" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 'bold' }}>← BACK TO BLOG</Link>
        <h1 style={{ color: '#fbbf24', fontSize: '3rem', marginTop: '20px' }}>{post.title}</h1>
        <p style={{ color: '#475569', marginBottom: '40px' }}>Published on {post.date}</p>
        <div style={{ lineHeight: '1.8', fontSize: '1.15rem', color: '#cbd5e1' }} dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default BlogPost;