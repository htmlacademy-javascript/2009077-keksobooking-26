/* eslint-disable indent */
//случайное положительное число
function getRandomPositiveInteger (a, b) {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
}

// случайное число с плавающей точкой
function getRandomPositiveFloat (a, b, digits = 1) {
    const lower = Math.min(Math.abs(a), Math.abs(b));
    const upper = Math.max(Math.abs(a), Math.abs(b));
    const result = Math.random() * (upper - lower) + lower;
    return +result.toFixed(digits);
}

// случайный элемент массива
function getRandomArrayElement (elements) {
    return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

// случайный перемешанный массив случайной длины из заданных элементов
function getShuffledUniqueElements (elements) {
    const elementsCount = getRandomPositiveInteger(1, elements.length);
    const shuffledElements = [];
    while (shuffledElements.length < elementsCount) {
        const randomIndex = getRandomPositiveInteger(0, elementsCount - 1);
        if (!shuffledElements.includes(elements[randomIndex])) {
            shuffledElements.push(elements[randomIndex]);
        }
    }
    return shuffledElements;
}
export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getShuffledUniqueElements};
