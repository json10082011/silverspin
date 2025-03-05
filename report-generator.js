const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "reports", // Path to where cucumber_report.json is saved
    reportPath: "reports/html-report", // Where the HTML report will be created
    metadata: {
        browser: {
            name: "chrome",
            version: "latest",
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
});
