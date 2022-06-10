/* eslint-disable indent */
function getRandomInteger(min, max) {
    if (min > max || min < 0 || max <= 0) {
        throw new RangeError('Неверный диапазон!');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCoordinate (min, max, decimalPoint) {
    if (min > max || min < 0 || max <= 0) {
        throw new RangeError('Неверный диапазон!');
    }
    const coordinate = Math.random() * (max - min) + min;
    return +(coordinate.toFixed(decimalPoint));
}

getRandomInteger(2, 67);
getRandomCoordinate(3, 18, 5);

