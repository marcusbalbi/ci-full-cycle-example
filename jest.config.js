module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  testResultsProcessor: 'jest-sonar-reporter',

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!**/tests/**',
    '!**/config/**'
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: '.coverage'
}
