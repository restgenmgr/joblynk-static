# PowerShell script to inject Google Analytics tag into all HTML files
# Run this from the folder containing your HTML files (e.g., C:\Users\admin\website)

$googleTag = @"
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9LDB7E245Y"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-9LDB7E245Y');
</script>
"@

# Get all HTML files recursively
$htmlFiles = Get-ChildItem -Path . -Filter *.html -Recurse

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw

    # Check if the tag already exists (using a unique part of the script)
    if ($content -match 'gtag/js\?id=G-9LDB7E245Y') {
        Write-Host "Tag already present in $($file.Name) – skipping." -ForegroundColor Yellow
        continue
    }

    # Insert the tag after the first <head> tag
    $newContent = $content -replace '(?i)(<head.*?>)', "`$1`r`n$googleTag"

    if ($newContent -eq $content) {
        Write-Host "No <head> tag found in $($file.Name) – skipping." -ForegroundColor Red
    } else {
        # Backup original file
        $backup = $file.FullName + ".bak"
        Copy-Item -Path $file.FullName -Destination $backup -Force
        Write-Host "Backup created: $backup" -ForegroundColor Cyan

        # Write updated content
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        Write-Host "Tag added to $($file.Name)" -ForegroundColor Green
    }
}

Write-Host "`nDone! Please test your pages to ensure the tag loads correctly." -ForegroundColor Magenta