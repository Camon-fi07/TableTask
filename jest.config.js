/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)test.[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: './tsconfig.app.json',
        diagnostics: {
          warnOnly: true,
          ignoreCodes: [6133]
        }
      }
    ]
  }
};
