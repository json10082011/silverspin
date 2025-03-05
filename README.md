To sign the poweshell script
run Set-ExecutionPolicy RemoteSigned -Scope Process

Execute the powershell to create project structure
run  .\project-structure.ps1

Install Dependencies
Install node js
npm install --save-dev \
  @playwright/test playwright \
  @cucumber/cucumber cucumber-tsflow \
  ts-node typescript \
  multiple-cucumber-html-reporter

Create the features and steps

To run the test manually
npm run test
node report-generator.js
start reports/html-report/index.html

To run the test using the workflow, just go to the actions tab and try to rerun the workflow. Also automatic script execution should be trigger once you push any update on the repo.
