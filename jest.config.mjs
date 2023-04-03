import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@/components/(.*)$': '<rootDir>/src/components/$1',
    '@/templates/(.*)$': '<rootDir>/src/templates/$1',
    '@/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(config);
