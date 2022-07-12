/* eslint-disable indent */
import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getShuffledUniqueElements} from './util.js';

const avatarNumber =  getRandomPositiveInteger(1, 10);

const author = {
    avatar: `img/avatars/user${String(avatarNumber).padStart(2, '0')}.png`
};
// где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.

const offerTitle = ['Санаторий', 'Отель', 'Глэмпинг', 'Гостевой Дом', 'Турбаза', 'Хостел', 'Пансионат'];
const housingType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinTime = ['12:00', '13:00', '14:00'];
const offerFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner' ];
const offerDescriptions = [
    'Трехразовое питание',
    'Уютное место',
    'Дискотека каждый вечер',
    'Кефир перед сном',
    'Физиотерапия включена в стоимость',
    'Бассейн с морской водой'
];

const offerPhotos = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const offerLocation = {
    lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
};

const offer = {
   title: getRandomArrayElement(offerTitle),
   address: `${offerLocation.lat}, ${offerLocation.lng}`,
   price: getRandomPositiveInteger(),
   type: getRandomArrayElement(housingType),
   rooms: getRandomPositiveInteger(),
   guests: getRandomPositiveInteger(),
   checkin: getRandomArrayElement(checkinTime),
   features: getShuffledUniqueElements(offerFeatures),
   description: getRandomArrayElement(offerDescriptions),
   photos: getShuffledUniqueElements(offerPhotos)
};

const createAdvertisement = () => ({
    autor: author,
    offer: offer,
    offerLocation
});

const similarAdvertisements  = () => Array.from({length: 10}, createAdvertisement);
export{similarAdvertisements};
