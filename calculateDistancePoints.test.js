const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

    describe('calculateDistancePoints', () => {
        it('should return normal hillSize points', () => {
            const actual = calculateDistancePoints(102.5, 109, 98);

            const expected = 69;

            assert.equal(actual, expected);
        });
        it('should return high hillSize points', () => {
            const actual = calculateDistancePoints(125, 134, 120);

            const expected = 69;

            assert.equal(actual, expected);
        });
        it('should return mammoth hillSize points', () => {
            const actual = calculateDistancePoints(225, 225, 200);

            const expected = 150;

            assert.equal(actual, expected);
        });

    });