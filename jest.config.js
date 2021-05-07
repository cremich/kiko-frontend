const coverageThreshhold = 0;

module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
  coverageReporters: ["lcovonly", "text"],
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/src/graphql"],
  testMatch: ["**/tests/**/*.test.js"],
  coverageThreshold: {
    global: {
      branches: coverageThreshhold,
      functions: coverageThreshhold,
      lines: coverageThreshhold,
      statements: coverageThreshhold,
    },
  },
};
