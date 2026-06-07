#!/usr/bin/env node
/**
 * JobLynk — Auto Sitemap Generator
 * Usage:  node scripts/generate-sitemap.js
 * Run this after any git add of new .html files, or in your CI pipeline.
 * It scans public/*.html and writes public/sitemap.xml automatically.
 */

const fs   = require('fs');
const path = require('path');

const BASE_URL    = 'https://joblynk.live';
const PUBLIC_DIR  = path.join(__dirname, '..', 'public');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');

// Pages with known priority overrides (slug → priority)
const PRIORITY_MAP = {
  'index.html':                          '1.0',
  'hospitality-resume-guide.html':       '0.9',
  'hospitality-interview-tips.html':     '0.9',
  'hotel-management-career.html':        '0.9',
  'hospitality-salary-guide.html':       '0.8',
  'fb-operations-manager-guide.html':    '0.8',
  'hospitality-jobs-india-2025.html':    '0.8',
  'multi-unit-restaurant-management.html': '0.7',
  'hospitality-linkedin-profile.html':   '0.7',
  'pre-opening-hotel-guide.html':        '0.7',
  'guest-experience-management.html':    '0.7',
};

// Changefreq rules
const CHANGEFREQ_MAP = {
  'index.html': 'daily',
};
const DEFAULT_CHANGEFREQ = 'monthly';

function getLastMod(filePath) {
  try {
    const stat = fs.statSync(filePath);
    return stat.mtime.toISOString().split('T')[0]; // YYYY-MM-DD
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

function generateSitemap() {
  // Collect all .html files, skip partials (prefixed with _)
  const files = fs.readdirSync(PUBLIC_DIR)
    .filter(f => f.endsWith('.html') && !f.startsWith('_'))
    .sort((a, b) => {
      // index first, then by priority descending
      if (a === 'index.html') return -1;
      if (b === 'index.html') return  1;
      const pa = parseFloat(PRIORITY_MAP[a] || '0.5');
      const pb = parseFloat(PRIORITY_MAP[b] || '0.5');
      return pb - pa;
    });

  const urls = files.map(file => {
    const slug     = file === 'index.html' ? '' : file;
    const url      = slug ? `${BASE_URL}/${slug}` : BASE_URL;
    const lastmod  = getLastMod(path.join(PUBLIC_DIR, file));
    const priority = PRIORITY_MAP[file] || '0.6';
    const freq     = CHANGEFREQ_MAP[file] || DEFAULT_CHANGEFREQ;

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  fs.writeFileSync(OUTPUT_FILE, xml, 'utf8');

  console.log(`✅  Sitemap written → ${OUTPUT_FILE}`);
  console.log(`    ${files.length} URLs indexed:`);
  files.forEach(f => {
    const slug = f === 'index.html' ? '/' : '/' + f;
    console.log(`    ${(PRIORITY_MAP[f] || '0.6').padEnd(4)}  ${slug}`);
  });
}

generateSitemap();
