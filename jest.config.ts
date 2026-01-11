import { createJsWithTsPreset, type JestConfigWithTsJest } from 'ts-jest'

const presetConfig = createJsWithTsPreset({
  //...options
})

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!sdbm)"
  ]
}

export default jestConfig