import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './pages/Blog';
import HotelSOP from "./pages/HotelSOP";
import Home from './pages/Home';
import About from './pages/About';
import Sitemap from './pages/Sitemap';
import Terms from './pages/Terms';
import PayPortal from './pages/PayPortal';
import ServicePage from './pages/ServicePage';
import Support from './pages/Support';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', background: '#0a0a0f', color: 'white', display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif' }}>
        
        {/* --- NAVIGATION --- */}
        <nav style={{ padding: '1.5rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#000', borderBottom: '1px solid rgba(251,191,36,0.3)', position: 'sticky', top: 0, zIndex: 1000 }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24', textDecoration: 'none', letterSpacing: '2px' }}>JOBS LINKED</Link>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>HOME</Link>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>ABOUT</Link>
            <Link to="/blog" style={{ color: 'white', textDecoration: 'none' }}>BLOG</Link>
            <Link to="/pay" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 'bold' }}>PAY PORTAL</Link>
          </div>
        </nav>

        {/* --- PAGE CONTENT --- */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/hotelsop" element={<HotelSOP />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/pay" element={<PayPortal />} />
            <Route path="/service/:id" element={<ServicePage />} />
          </Routes>
        </div>

        {/* --- COMPLIANCE FOOTER --- */}
        <footer style={{ padding: '50px 5%', background: '#000', borderTop: '1px solid #1e293b', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '25px', fontSize: '0.85rem', flexWrap: 'wrap' }}>
            <Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</Link>
            <Link to="/sitemap" style={{ color: '#94a3b8', textDecoration: 'none' }}>Sitemap</Link>
            <Link to="/terms" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms</Link>
            <Link to="/privacy" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy</Link>
            <Link to="/refund" style={{ color: '#94a3b8', textDecoration: 'none' }}>Refunds</Link>
            <Link to="/support" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 'bold' }}>Support</Link>
            <Link to="/blog" style={{ color: 'white', textDecoration: 'none' }}>BLOG</Link>
          </div>
          <p style={{ fontSize: '0.75rem', color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
            © 2026 JobLynk.live | Exclusive Executive Resources for Indian Citizens.<br/>
            All digital sales are governed by our strict no-refund policy.
          </p>
        </footer>

      </div>
    </Router>
  );
}

export default App;