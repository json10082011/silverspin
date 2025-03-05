const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: "reports",
    reportPath: "reports/cucumber_report.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "latest"
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "10"
        }
    },
});
