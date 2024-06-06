const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
  it('rounds up the first argument', () => {
    assert.equal(calculateNumber(3.3, 0), 3);
    assert.equal(calculateNumber(2.3, 0), 2);
  });

  it('rounds up the second argument', () => {
    assert.equal(calculateNumber(0, 4.7), 5);
    assert.equal(calculateNumber(0, 0.3), 0);
  });

  it('returns the correct answer', () => {
    assert.strictEqual(calculateNumber(1.3, 0), 1);
    assert.strictEqual(calculateNumber(0, 1.2), 1);
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
});