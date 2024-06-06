const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', () => {
    it('should add numbers', () => {
        assert.equal(calculateNumber('SUM', 1.3, 0), 1);
        assert.equal(calculateNumber('SUM', 0, 1.2), 1);
    });
    it('should subtract numbers', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.3, 0), 1);
        assert.equal(calculateNumber('SUBTRACT', 0, 1.2), -1);
    });
    it('should divide numbers', () => {
        assert.equal(calculateNumber('DIVIDE', 0, 1.2), 0);
        assert.equal(calculateNumber('DIVIDE', 1.3, 1.3), 1);
    });
    it('should return Error when dividing by 0', () => {
        assert.equal(calculateNumber('DIVIDE', 0, 0), "Error");
        assert.equal(calculateNumber('DIVIDE', 0, 0.2), "Error");
    })
});
