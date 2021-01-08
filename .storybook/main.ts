const path = require('path');
import { rules } from '../config/webpack.rules'; 

// Export a function. Accept the base config as the only param.
module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
        "../src/**/*.story.@(js|jsx|ts|tsx)"
      ],
      "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
      ],
  webpackFinal:(config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules = rules(false,true);

    // Return the altered config
    return config;
  },
};