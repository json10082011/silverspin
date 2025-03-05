# Create the folder structure
$folders = @(
    "features",
    "steps",
    ".github"   
)

# Create the file structures
$files = @(
    "features/login.feature",
    "steps/login.steps.ts",    
    "playwright.config.ts",
    "cucumber.js",
    "package.json",
    "tsconfig.json",
    ".github/workflows/test.yml"
)

# Create directories
foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder | Out-Null
    }
}

# Create empty files
foreach ($file in $files) {
    if (!(Test-Path $file)) {
        New-Item -ItemType File -Path $file | Out-Null
    }
}

Write-Output "Project structure created successfully!"