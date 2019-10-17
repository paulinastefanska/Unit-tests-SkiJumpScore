const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    it('should return mammoth hillSize points', () => {
        const actual = calculateTotalPoints(227.5, 225, 200, [18.0, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);

        const expected = 208.3;

        assert.equal(actual, expected);
    });
    it('should return high hillSize points', () => {
        const actual = calculateTotalPoints(134, 134, 120, [19.0, 20.0, 19.5, 19.0, 18.5], 0, -5.4);

        const expected = 137.3;

        assert.equal(actual, expected);
    });
    it('should return normal hillSize points', () => {
        const actual = calculateTotalPoints(111, 109, 98, [19.0, 19.5, 19.0, 19.0, 19.0], 3.2, -14.4);

        const expected = 131.8;

        assert.equal(actual, expected);
    });
});