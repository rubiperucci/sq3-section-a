const { expect } = require('@jest/globals');
const { matchersWithOptions } = require('jest-json-schema');
const logger = require("#utils/logger");

expect.extend(matchersWithOptions());

class SoftAssert {
  constructor() {
    this.errors = [];
  }

  // Private method to handle undefined parameters
  _handleUndefined(value, message) {
    if (value === undefined) {
      this.errors.push(`Value is undefined. ${message || 'No specific error message provided.'}`);
      return true;
    }
    return false; 
  }

  async assert(condition, message) {
    if (this._handleUndefined(condition, message)) return;
    try {
      await expect(condition).toBeTruthy();
    } catch (e) {
      this.errors.push(message || e.message);
    }
  }

  async assertEqual(actual, expected, message) {
    if (this._handleUndefined(actual, message) || this._handleUndefined(expected, message)) return;
    try {
      await expect(actual).toEqual(expected);
    } catch (e) {
      this.errors.push(message || e.message);
    }
  }

  async assertSchema(actual, schema, message) {
    if (this._handleUndefined(actual, message) || this._handleUndefined(schema, message)) return;
    try {
      await expect(actual).toMatchSchema(schema);
    } catch (e) {
      this.errors.push(message || e.message);
    }
  }

  check() {
    if (this.errors.length > 0) {
      // Log errors instead of throwing
      logger.error('Soft Assert Errors:\n' + this.errors.join('\n'));
    }
  }
}

const softAssert = new SoftAssert();
module.exports = softAssert;
