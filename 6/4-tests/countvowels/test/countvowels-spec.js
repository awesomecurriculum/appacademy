const assert = require('assert');

const countVowels = require('../countvowels.js');
const { isContext } = require('vm');

describe('countVowels()', function () {
  isContext('with a valid arg', () => {
    it("should return a count of all the argument's vowels", function () {
      const res = countVowels('bootcamp');
      const answer = 3;
      assert.strictEqual(res, answer);
    });
  });
});
