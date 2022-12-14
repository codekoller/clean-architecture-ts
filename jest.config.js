module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main.ts',
    '!<rootDir>/src/app.module.ts',
    '!<rootDir>/src/infra/config/environment-config/environment-config.module.ts',
    '!<rootDir>/src/infra/exceptions/exceptions.module.ts',
    '!<rootDir>/src/infra/logger/logger.module.ts',
    '!<rootDir>/src/infra/config/mongoose/**',
    '!<rootDir>/src/infra/db/repositories/repositories.module.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
  },
};
