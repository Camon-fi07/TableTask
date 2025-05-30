/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)test.[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+.tsx?$': ['ts-jest', { useESM: true, tsconfig: './tsconfig.app.json' }]
  }
};
