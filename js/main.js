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
    return elements[getRandomInteger(0, elements.length - 1)];
}

// случайный перемешанный массив случайно длины из заданных элементов
function getShuffledUniqueElements (elements) {
    const elementsCount = getRandomInteger(1, elements.length);
    const shuffledElements = [];
    while (shuffledElements.length < elementsCount) {
        const randomIndex = getRandomInteger(0, elementsCount - 1);
        if (!shuffledElements.includes(elements[randomIndex])) {
            shuffledElements.push(elements[randomIndex]);
        }
    }
    return shuffledElements;
}

let avatarNumber =  getRandomPositiveInteger(1, 10);

let author = {
    avatar: 'img/avatars/user`${(avatarNumber.padStart(2, '0')}`.png'
};
// где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.

let offerTitle = ['Санаторий', 'Отель', 'Глэмпинг', 'Гостевой Дом', 'Турбаза', 'Хостел', 'Пансионат'];
let housingType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
let checkinTime = ['12:00', '13:00', '14:00'];
let offerFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner' ];
let offerDescriptions = [
    'Трехразовое питание',
    'Уютное место',
    'Дискотека каждый вечер',
    'Кефир перед сном',
    'Физиотерапия включена в стоимость',
    'Бассейн с морской водой'
];

let offerPhotos = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

let location = {
    lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
};

let offer = {
   title: getRandomArrayElement(offerTitle),
   address: `${location.lat}, ${location.lng}`,
   price: getRandomPositiveInteger(minPrice, maxPrice),
   type: getRandomArrayElement(housingType),
   rooms: getRandomPositiveInteger(1, maxRooms),
   guests: getRandomPositiveInteger(1, maxGuests),
   checkin: getRandomArrayElement(checkinTime),
   features: getShuffledUniqueElements(offerFeatures),
   description: getRandomArrayElement(offerDescriptions),
   photos: getShuffledUniqueElements(offerPhotos)
};


let createAdvertisement = () => {
    return {
        autor: author,
        offer: offer,
        location
    };
  }

  const similarAdvertisements = Array.from({length: 10}, createAdvertisement);
  console.log(similarAdvertisements);