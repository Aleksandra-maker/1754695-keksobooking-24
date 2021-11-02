import {getRandomOffer} from './randomDataGenerators.js';

export function generateRandomOfferCard() {
  const randomElement = getRandomOffer(1)[0];

  const templateCard = document.querySelector('#card').content;
  const randomCard = templateCard.cloneNode(true);

  randomCard.querySelector('.popup__title').textContent = randomElement.offer.title;
  randomCard.querySelector('.popup__text--address').textContent = randomElement.offer.addres;

  if (randomElement.offer.price !== '') {
    randomCard.querySelector('.popup__text--price').textContent = `${+randomElement.offer.price} ₽/ночь`;
  } else {
    randomCard.querySelector('.popup__text--price').style.display = 'none';
  }

  switch (randomElement.offer.type) {
    case 'flat':
      randomCard.querySelector('.popup__type').textContent = 'Квартира';
      break;
    case 'bungalow':
      randomCard.querySelector('.popup__type').textContent = 'Бунгало';
      break;
    case 'house':
      randomCard.querySelector('.popup__type').textContent = 'Дом';
      break;
    case 'palace':
      randomCard.querySelector('.popup__type').textContent = 'Дворец';
      break;
    case 'hotel':
      randomCard.querySelector('.popup__type').textContent = 'Отель';
      break;
    default:
  }
  randomCard.querySelector('.popup__text--capacity').textContent = `${+randomElement.offer.rooms} комнат для ${+randomElement.offer.guests} гостей` ;
  randomCard.querySelector('.popup__text--time').textContent = `Заезд после ${randomElement.offer.checkin}, выезд до ${randomElement.offer.checkout}` ;
  const features = randomCard.querySelectorAll('.popup__feature');
  const featuresDisplayStyle = features[0].style.display;
  features.forEach((element) => {element.style.display = 'none';});
  for (let i = 0; i < randomElement.offer.features.length; i++) {
    const concat = `.popup__feature--${  randomElement.offer.features[i]}`;
    randomCard.querySelector(concat).style.display = featuresDisplayStyle;
  }
  if (randomElement.offer.description) {
    randomCard.querySelector('.popup__description').textContent = randomElement.offer.description;
  } else {
    randomCard.querySelector('.popup__description').style.display = 'none';
  }

  const photoTemplate = randomCard.querySelector('.popup__photo');
  const photoClone = photoTemplate.cloneNode(true);
  photoTemplate.remove();

  for (let i = 0; i < randomElement.offer.photo.length;i++) {
    const clonedPhoto = photoClone.cloneNode(true);
    clonedPhoto.src = randomElement.offer.photo[i];
    randomCard.querySelector('.popup__photos').appendChild(clonedPhoto);
  }

  randomCard.querySelector('.popup__avatar').src = randomElement.author.avatar;

  return randomCard;
}
