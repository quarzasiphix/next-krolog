# PowerShell script to copy all components from Vite project to Next.js project

$sourceBase = "c:\Users\Administrator\Documents\projects\nekrolog"
$destBase = "c:\Users\Administrator\Documents\projects\nekrolog-nextjs"

Write-Host "🚀 Starting component migration..." -ForegroundColor Green

# Create directories
Write-Host "📁 Creating directories..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path "$destBase\components\ui" | Out-Null
New-Item -ItemType Directory -Force -Path "$destBase\components\icons" | Out-Null
New-Item -ItemType Directory -Force -Path "$destBase\hooks" | Out-Null

# Copy all UI components
Write-Host "📦 Copying UI components..." -ForegroundColor Yellow
Copy-Item "$sourceBase\src\components\ui\*" "$destBase\components\ui\" -Recurse -Force

# Copy custom components
Write-Host "📦 Copying custom components..." -ForegroundColor Yellow
$components = @(
    "About.tsx",
    "BlogPreview.tsx",
    "Breadcrumb.tsx",
    "Contact.tsx",
    "Footer.tsx",
    "Hero.tsx",
    "HeroContent.tsx",
    "Map.tsx",
    "Navbar.tsx",
    "Reviews.tsx",
    "ServiceLayout.tsx",
    "Services.tsx",
    "ServicesCta.tsx",
    "ServicesTable.tsx"
)

foreach ($comp in $components) {
    if (Test-Path "$sourceBase\src\components\$comp") {
        Copy-Item "$sourceBase\src\components\$comp" "$destBase\components\$comp" -Force
        Write-Host "  ✓ Copied $comp" -ForegroundColor Green
    }
}

# Copy icons
Write-Host "📦 Copying icons..." -ForegroundColor Yellow
Copy-Item "$sourceBase\src\components\icons\*" "$destBase\components\icons\" -Recurse -Force

# Copy hooks
Write-Host "📦 Copying hooks..." -ForegroundColor Yellow
if (Test-Path "$sourceBase\src\hooks") {
    Copy-Item "$sourceBase\src\hooks\*" "$destBase\hooks\" -Recurse -Force
}

# Copy public assets
Write-Host "📦 Copying public assets..." -ForegroundColor Yellow
if (Test-Path "$sourceBase\public") {
    Copy-Item "$sourceBase\public\*" "$destBase\public\" -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host "`n✅ Component migration complete!" -ForegroundColor Green
Write-Host "`n⚠️  IMPORTANT: You need to update imports in components:" -ForegroundColor Yellow
Write-Host "   1. Change 'react-router-dom' imports to 'next/link' or 'next/navigation'" -ForegroundColor Cyan
Write-Host "   2. Add 'use client' directive to interactive components" -ForegroundColor Cyan
Write-Host "   3. Update <Link to=''> to <Link href=''>" -ForegroundColor Cyan
Write-Host "`nSee MIGRATION_GUIDE.md for detailed instructions." -ForegroundColor White
