// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./tests'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};