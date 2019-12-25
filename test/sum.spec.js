var expect = require("chai").expect;
const sum = require('../sum.js');

describe("sum.js", function() {
  beforeEach(function() {});

  context("without arguments", function() {
    it("should return 0", function() {
      expect(sum()).to.equal(0);
    });
  });

  context('with number arguments', function() {
    it('should return sum of arguments', function() {
      expect(sum(1, 2, 3, 4, 5)).to.equal(15)
    })
    
    it('should return argument when only one argument is passed', function() {
      expect(sum(5)).to.equal(5)
    })
    it("should add all numbers in array", function() {
      expect(sum(2, 4, 8)).to.equal(14);
      expect(sum(1, 1)).to.equal(2);
      expect(sum(-1, 1)).to.equal(0);
    });
  })

  context('with non-number arguments', function() {
    it('should throw error', function() {
      expect(function() {
        sum(1, 2, '3', [4], 5)
      }).to.throw(TypeError, 'sum() expects only numbers.')
    })
  })
});
