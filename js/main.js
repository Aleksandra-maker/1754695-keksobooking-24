//return random integer
function generatedRandomIntInRange(min, max) {
    if (isNaN(min) || isNaN(max)) {
        return undefined;
    }

    if (max < min) {

        [max, min] = [min, max]
        console.log('Warning! Received min > max. Switching.');
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
}
//return random float
function generatedRandomFloatInRange(min, max, decimalPlaces) {
    if (decimalPlaces < 0) {
        return undefined;
    }
    if (isNaN(min) || isNaN(max)) {
        return undefined;
    }

    return (Math.random() * (max - min + 1) + min).toFixed;
}

console.log(generatedRandomIntInRange(120, 20, 0));