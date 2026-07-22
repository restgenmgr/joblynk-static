# deploy-joblynk-optimization-fixes.ps1
# Fixes for joblynk.live:
#   - CNAME corrected from UTF-16 to plain ASCII
#   - ads.txt BOM stripped
#   - GA4 tracking added to 4 pages that were missing it
#   - 3 stray .html.backup files removed
# Run as: .\deploy-joblynk-optimization-fixes.ps1
# (Do NOT paste this multi-line script directly into the PowerShell prompt.)

$ErrorActionPreference = "Stop"

# ---- CONFIG: adjust if your local JobLynk repo path differs ----
$repoPath  = "C:\Users\admin\Desktop\joblynk-static"
$downloads = "$env:USERPROFILE\Downloads"

Write-Host "== Step 1: Navigate to repo ==" -ForegroundColor Cyan
Set-Location $repoPath

Write-Host "== Step 2: Check current git status ==" -ForegroundColor Cyan
git status

Write-Host "== Step 3: Pull latest with rebase ==" -ForegroundColor Cyan
git pull --rebase origin main

Write-Host "== Step 4: Copy fixed files into repo ==" -ForegroundColor Cyan
Copy-Item "$downloads\CNAME"                                 "$repoPath\CNAME"                                 -Force
Copy-Item "$downloads\ads.txt"                                "$repoPath\ads.txt"                                -Force
Copy-Item "$downloads\ai-impact-2026-2027.html"               "$repoPath\ai-impact-2026-2027.html"               -Force
Copy-Item "$downloads\ats-resume-keywords-guide-2026.html"    "$repoPath\ats-resume-keywords-guide-2026.html"    -Force
Copy-Item "$downloads\india-tourism-market-2026.html"         "$repoPath\india-tourism-market-2026.html"         -Force
Copy-Item "$downloads\language.html"                          "$repoPath\language.html"                          -Force

Write-Host "== Step 5: Remove stray backup files ==" -ForegroundColor Cyan
Remove-Item "$repoPath\index.html.backup"       -Force -ErrorAction SilentlyContinue
Remove-Item "$repoPath\index-react.html.backup" -Force -ErrorAction SilentlyContinue
Remove-Item "$repoPath\react-index.html.backup" -Force -ErrorAction SilentlyContinue

Write-Host "== Step 6: Stage, commit, push ==" -ForegroundColor Cyan
git add -A
git commit -m "Fix CNAME encoding, strip ads.txt BOM, add missing GA4 tracking, remove stray backup files"
git push origin main

Write-Host "== Step 7: Deploy to production via Vercel ==" -ForegroundColor Cyan
vercel --prod --force

Write-Host "`nDone. Spot-check:" -ForegroundColor Green
Write-Host "  https://www.joblynk.live/ads.txt"
Write-Host "  https://www.joblynk.live/language.html  (view source, confirm GA4 tag present)"
