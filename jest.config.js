/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "@/tests/(.*)": "<rootDir>/tests/$1",
    "@/(.*)": "<rootDir>/src/$1",
  },
};
