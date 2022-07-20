/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const map = document.querySelector('#map-canvas');
const fragment = document.querySelector('#card').content.querySelector('.popup');

const housingType = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель'
};

const cardAd = (cards) => {
    Object.keys(cards).forEach((card) => {
        const cardtemplate = fragment.cloneNode(true);

        const featuresRandom = card.offer.features;
        const popupFeatures = cardtemplate.querySelector('.popup__features');
        const popupFeature = popupFeatures.querySelectorAll('.popup__feature');
    
        popupFeature.forEach((popupFeatureItem) => {
            const isReal = featuresRandom.some((feature) =>popupFeatureItem.classList.contains(`popup__feature--${feature}`));
            if (!isReal){
                popupFeatureItem.remove();
            }
            if (!featuresRandom.length){ 
                popupFeatures.classList.add('hidden'); 
            }
        });

        const photosRandom = card.offer.photos;
        const photos = cardtemplate.querySelector('.popup__photos');
        const photo = photos.querySelector('.popup__photo');
        photosRandom.forEach((picture) => {
            const photoClone = photo.cloneNode(true);
            photoClone.src = picture;
            photos.appendChild(photoClone);
        });
    
        photo.remove('popup__photo');
        if (!photosRandom.length){ 
            photos.classList.add('hidden'); 
        }

        cardtemplate.querySelector('.popup__title').textContent = card.offer.title;

        cardtemplate.querySelector('.popup__text--address').textContent = card.offer.address;

        cardtemplate.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;

        cardtemplate.querySelector('.popup__type').textContent = housingType[card.offer.type];

        cardtemplate.querySelector('.popup__text--capacity').textContent =`${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;

        cardtemplate.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;

        cardtemplate.querySelector('.popup__description').textContent = card.offer.description;

        cardtemplate.querySelector('.popup__avatar').src = card.author.avatar;

        map.append(cardtemplate);
    });
};
export {cardAd};
