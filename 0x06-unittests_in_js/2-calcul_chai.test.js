const expect = require("chai").expect;
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', () => {
    it('should add numbers', () => {
        expect(calculateNumber('SUM', 1.3, 0)).to.equal(1);
        expect(calculateNumber('SUM', 0, 1.2)).to.equal(1);
    });
    it('should subtract numbers', () => {
        expect(calculateNumber('SUBTRACT', 1.3, 0)).to.equal(1);
        expect(calculateNumber('SUBTRACT', 0, 1.2)).to.equal(-1);
    });
    it('should divide numbers', () => {
        expect(calculateNumber('DIVIDE', 0, 1.2)).to.equal(0);
        expect(calculateNumber('DIVIDE', 1.3, 1.3)).to.equal(1);
    });
    it('should return Error when dividing by 0', () => {
        expect(calculateNumber('DIVIDE', 0, 0)).to.equal("Error");
        expect(calculateNumber('DIVIDE', 0, 0.2)).to.equal("Error");
    })
});
