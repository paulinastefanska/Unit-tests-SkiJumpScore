const calculateDistancePoints = (distance, hillSize, kPoint) => {
    const normal = 60 + (2 * (distance - kPoint));
    const big = 60  + (1.8 * (distance - kPoint));
    const mammoth = 120  + (1.2 * (distance - kPoint));

    if (hillSize >= 98 && hillSize < 120) {
        return (normal);
    } else if (hillSize >= 120 && hillSize < 200) {
        return (big);
    } else if (hillSize >= 200) {
        return (mammoth);
    }
};

module.exports = calculateDistancePoints;