module.exports = {
    default: {
      requireModule: ["ts-node/register"],
      require: ["steps/**/*.ts"],
      paths: ["features/**/*.feature"],
      format: ["json:test-results/report.json"],
      worldParameters: {
        defaultTimeout: 10000
      }
    }
  };
  