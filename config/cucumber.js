module.exports ={
    default: {
        paths: [
            "src/features"
        ], 
        dryRun: false,
        format: [
            "progress-bar",
            "summary",
            "json:reports/cucumber_report.json", // Generates a JSON report
            // "html:reports/cucumber-report.html"
        ],
        formatOptions: {
            colorsEnabled: true,
            snippetInterface: "async-await"
        },
        require: [
            "src/stepdef/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ]
    }
}