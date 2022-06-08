/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

let SECONDS = 1000;

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 10000 * SECONDS
};