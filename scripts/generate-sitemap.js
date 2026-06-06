const fs   = require('fs');
const path = require('path');

const BASE_URL    = 'https://joblynk.live';
const PUBLIC_DIR  = path.join(__dirname, '..', 'public');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');

const PRIORITY_MAP = {
  'index.html':                            '1.0',
  'hospitality-resume-guide.html':         '0.9',
  'hospitality-interview-tips.html':       '0.9',
  'hotel-management-career.html':          '0.9',
  'hospitality-salary-guide.html':         '0.8',
  'fb-operations-manager-guide.html':      '0.8',
  'hospitality-jobs-india-2025.html':      '0.8',
  'multi-unit-restaurant-management.html': '0.7',
  'hospitality-linkedin-profile.html':     '0.7',
  'pre-opening-hotel-guide.html':          '0.7',
  'guest-experience-management.html':      '0.7',
};

function getLastMod(filePath) {
  try {
    return fs.statSync(filePath).mtime.toISOString().split('T')[0];
  } catch { return new Date().toISOString().split('T')[0]; }
}

const files = fs.readdirSync(PUBLIC_DIR)
  .filter(f => f.endsWith('.html') && !f.startsWith('_'))
  .sort((a, b) => {
    if (a === 'index.html') return -1;
    if (b === 'index.html') return  1;
    return parseFloat(PRIORITY_MAP[b] || '0.5') - parseFloat(PRIORITY_MAP[a] || '0.5');
  });

const urls = files.map(file => {
  const slug = file === 'index.html' ? '' : file;
  const url  = slug ? `${BASE_URL}/${slug}` : BASE_URL;
  return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${getLastMod(path.join(PUBLIC_DIR, file))}</lastmod>\n    <changefreq>${file === 'index.html' ? 'daily' : 'monthly'}</changefreq>\n    <priority>${PRIORITY_MAP[file] || '0.6'}</priority>\n  </url>`;
});

fs.writeFileSync(OUTPUT_FILE, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`, 'utf8');

console.log(`✅  Sitemap written — ${files.length} URLs`);
files.forEach(f => console.log(`    ${(PRIORITY_MAP[f]||'0.6')}  /${f === 'index.html' ? '' : f}`));