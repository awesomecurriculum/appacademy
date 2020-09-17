const { bonus } = require('../employee.js');
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

describe('bonus function', () => {
  it('should take a number and return twice as much', () => {
    const input = 10;
    const expected = 20;

    const res = bonus(input);

    expect(res).to.equal(expected);
  });
});
