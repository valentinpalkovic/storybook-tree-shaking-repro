module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-links", "@storybook/addon-a11y", "@storybook/addon-interactions"
  // "@storybook/preset-create-react-app",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  core: {
    disableTelemetry: true
  },
  docsPage: {
    docs: "automatic"
  }
};