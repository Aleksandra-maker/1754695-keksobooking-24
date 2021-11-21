
export function generateOfferCard(offerObject) {
  const templateCard = document.querySelector('#card').content.querySelector('.popup');
  const randomCard = templateCard.cloneNode(true);

  randomCard.querySelector('.popup__title').textContent = offerObject.offer.title;
  randomCard.querySelector('.popup__text--address').textContent = offerObject.offer.addres;

  if (offerObject.offer.price !== '') {
    randomCard.querySelector('.popup__text--price').textContent = `${+offerObject.offer.price} ₽/ночь`;
  } else {
    randomCard.querySelector('.popup__text--price').style.display = 'none';
  }

  switch (offerObject.offer.type) {
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
  randomCard.querySelector('.popup__text--capacity').textContent = `${+offerObject.offer.rooms} комнат для ${+offerObject.offer.guests} гостей` ;
  randomCard.querySelector('.popup__text--time').textContent = `Заезд после ${offerObject.offer.checkin}, выезд до ${offerObject.offer.checkout}` ;
  const features = randomCard.querySelectorAll('.popup__feature');
  const featuresDisplayStyle = features[0].style.display;
  features.forEach((element) => {element.style.display = 'none';});
  if (offerObject.offer.features) {
    for (let i = 0; i < offerObject.offer.features.length; i++) {
      const concat = `.popup__feature--${  offerObject.offer.features[i]}`;
      randomCard.querySelector(concat).style.display = featuresDisplayStyle;
    }
  }
  if (offerObject.offer.description) {
    randomCard.querySelector('.popup__description').textContent = offerObject.offer.description;
  } else {
    randomCard.querySelector('.popup__description').style.display = 'none';
  }

  const photoTemplate = randomCard.querySelector('.popup__photo');
  const photoClone = photoTemplate.cloneNode(true);
  photoTemplate.remove();

  if (offerObject.offer.photos) {
    for (let i = 0; i < offerObject.offer.photos.length;i++) {
      const clonedPhoto = photoClone.cloneNode(true);
      clonedPhoto.src = offerObject.offer.photos[i];
      randomCard.querySelector('.popup__photos').appendChild(clonedPhoto);
    }
  }
  randomCard.querySelector('.popup__avatar').src = offerObject.author.avatar;

  return randomCard;
}
