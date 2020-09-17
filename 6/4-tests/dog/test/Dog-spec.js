const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const Dog = require('../Dog.js');

describe('Dog', () => {
  let name = 'tag';
  let tag;
  beforeEach('sets up a dog instance', () => {
    tag = new Dog(name);
  });
  describe('constructor', () => {
    it('should set a name instance variable', () => {
      expect(tag).to.have.property('name');
    });
    it('should have a name "tag"', () => {
      expect(tag.name).to.equal('tag');
    });
  });

  describe('prototype.chaseTail()', () => {
    it('should invoke chaseTail n + 1 times', () => {
      const chaseTailSpy = chai.spy.on(tag, 'chaseTail');
      tag.chaseTail(3);
      expect(chaseTailSpy).to.have.been.called.exactly(4);
    });
  });
});
