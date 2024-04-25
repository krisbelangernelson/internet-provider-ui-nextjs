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
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@public/(.*)': '<rootDir>/public/$1',
  },
}

export default config
