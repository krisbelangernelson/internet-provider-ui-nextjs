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
