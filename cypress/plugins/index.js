const cracoConfig = require("../../craco.config.js");
const devServer = require("@cypress/react/plugins/craco");
const fs = require("fs");

module.exports = (on, config) => {
  devServer(on, config, cracoConfig);

  on("task", {
    readFileMaybe(filename) {
      if (fs.existsSync(filename)) {
        return fs.readFileSync(filename, "utf8");
      }

      return "module.exports = {}";
    },
  });
  return config;
};
