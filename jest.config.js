const { defaults: tsjPreset } = require("ts-jest/presets");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...tsjPreset,
  preset: "react-native",
  transform: {
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.spec.json",
      },
    ],
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  cacheDirectory: ".jest/cache",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/fileMock.js",
  },
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js",
    "<rootDir>/jest/setup.js",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)",
  ],
  moduleNameMapper: {
    "^services/(.*)$": "<rootDir>/services/$1",
    "^hooks/(.*)$": "<rootDir>/hooks/$1",
    "^screens/(.*)$": "<rootDir>/screens/$1",
    "^constants/(.*)$": "<rootDir>/constants/$1",
    "^components/(.*)$": "<rootDir>/components/$1",
    "^assets/(.*)$": "<rootDir>/assets/$1",
    "^modules/(.*)$": "<rootDir>/modules/$1",
    "^utils/(.*)$": "<rootDir>/utils/$1",
    "^context/(.*)$": "<rootDir>/context/$1",
    "^types/(.*)$": "<rootDir>/types/$1",
  },
};
