const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    it('correct style points', () => {
        const actual = calculateStylePoints([18.0, 18.5, 17.5, 18.5, 18.5])
        const expected = 55;
        
        assert.equal(actual, expected)
    });
});