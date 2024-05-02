/** @type {import('ts-jest').JestConfigWithTsJest} */
import type { Config } from 'jest'

const config: Config = {
  rootDir: './',
  reporters: ['default'],
  roots: ['<rootDir>'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react-jsx',
        },
      },
    ],
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/hooks/useElementOnScreen.ts', // can't cover observer internals
    '<rootDir>/src/providers/customer/CustomerContext.ts',
  ],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@public/(.*)': '<rootDir>/public/$1',
    '^.+\\.(css|less|scss)$': '<rootDir>/src/mocks/styleMock.ts',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts',
  ],
}

export default config
