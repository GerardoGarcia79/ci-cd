export default {
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".jsx"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS/SCSS imports
    "\\.svg$": "<rootDir>/__mocks__/fileMock.js", // Mock SVG files
  },
  globals: {
    __DEV__: true,
  },
  setupFilesAfterEnv: ["<rootDir>/test/setup.js"],
};
