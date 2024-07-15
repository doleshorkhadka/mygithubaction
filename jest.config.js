module.exports = {
  testEnvironment: "node",
  reporters: [
    "default",
    ["jest-sonar-reporter", {
      "reportFile": "sonar-report.xml",
      "indent": 4
    }]
  ]
};
