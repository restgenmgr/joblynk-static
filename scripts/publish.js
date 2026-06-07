const { execSync } = require('child_process');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function run(cmd) {
  console.log(`\n$ ${cmd}`);
  try {
    const out = execSync(cmd, { cwd: ROOT, stdio: ['pipe', 'pipe', 'pipe'] });
    if (out) process.stdout.write(out.toString());
  } catch (err) {
    process.stderr.write(err.stderr ? err.stderr.toString() : err.message);
    process.exit(1);
  }
}

const msg = process.argv[2];
if (!msg) {
  console.error('\n❌  Usage: node scripts/publish.js "Your commit message"\n');
  process.exit(1);
}

console.log('\n─── Step 1: Regenerating sitemap ───');
require('./generate-sitemap');

console.log('\n─── Step 2: Staging public/ ───');
run('git add public/');

const status = execSync('git status --porcelain', { cwd: ROOT }).toString().trim();
if (!status) {
  console.log('\n✅  Nothing to commit — working tree clean.');
  process.exit(0);
}

console.log('\n─── Step 3: Committing ───');
run(`git commit -m "${msg.replace(/"/g, '\\"')}"`);

console.log('\n─── Step 4: Pushing ───');
run('git push origin main');

console.log('\n🎉  Done! Live at https://joblynk.live\n');