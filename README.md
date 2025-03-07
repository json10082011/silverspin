Setting Up the Environment using powershell

1. Sign the PowerShell Script, run the below command to allow the execution of the script within the current session:

Set-ExecutionPolicy RemoteSigned -Scope Process

2. Execute the PowerShell Script, run the script to create the project structure:

.\project-structure.ps1

3. Install Dependencies, Make sure that Node.js is installed, then install the required dependencies:

npm install --save-dev \
@playwright/test playwright \
@cucumber/cucumber cucumber-tsflow \
ts-node typescript \
multiple-cucumber-html-reporter

4. Creating Features and Step Definitions. Test scenarios should be in the features directory and then implement the corresponding step definitions in the steps directory.

5. How to run the tests manually and generate the report.

npm run test
node report-generator.js start reports/html-report/index.html

Note: You can also execute the tests via GitHub actions.

Navigate to the Actions tab in the GitHub repository.
Rerun the workflow manually or Tests execution will be triggered automatically whenever updates are pushed to the repository.
