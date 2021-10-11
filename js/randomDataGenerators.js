import {
  generatedRandomFloatInRange,
  generatedRandomIntInRange,
  getRandomArrayElement,
  randomTrimArray
} from './utils.js';

const avatars = [
  'img/avatars/user01.png' ,
  'img/avatars/user02.png' ,
  'img/avatars/user03.png' ,
  'img/avatars/user04.png' ,
  'img/avatars/user05.png' ,
  'img/avatars/user06.png' ,
  'img/avatars/user07.png' ,
  'img/avatars/user08.png' ,
  'img/avatars/user09.png' ,
  'img/avatars/user10.png' ,
  'img/avatars/user11.png' ,
];

const titles = [
  'Милая, уютная квартирка в центре Токио' ,
  'Дворец в окрестностях Хиросимы' ,
  'Гостевой дом' ,
  'Отель 5 звезд' ,
  'Бунгало в пригороде Нагасаки' ,
  'Отель 3 звезды' ,
  'Апартаменты' ,
];

const features = [
  'wifi' ,
  'dishwasher' ,
  'parking' ,
  'washer' ,
  'elevator' ,
  'conditioner' ,
];

const prices = [
  5000 ,
  8000 ,
  10000 ,
  25000 ,
  45000 ,
  60000 ,
];

const types = [
  'palace' ,
  'flat' ,
  'house' ,
  'bungalow' ,
  'hotel' ,
];

const checkinsAndCheckouts = [
  '12:00' ,
  '13:00' ,
  '14:00' ,
];

const descriptions = [
  'Вонючий, но зато дешево' ,
  'Дворец с евроремонтом' ,
  'Обычная светлая квартира с тремя ваннами. Можно с собаками' ,
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg' ,
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg' ,
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg' ,
];

export {
  avatars,
  titles,
  prices,
  types,
  checkinsAndCheckouts,
  descriptions,
  photos
};

//конструктор объекта location
function newLocation (latNumber, lngNumber) {
  const location = {
    lat: latNumber,
    lng: lngNumber,
  };

  return location;
}

//генерирует объект location со случайными координатами
function generateRandomLocation () {
  const lat = generatedRandomFloatInRange(35.65, 35.7, 5);
  const lng = generatedRandomFloatInRange(139.7, 139.8, 5);
  const result = newLocation (lat, lng);

  return result;
}

//конструктор объекта автор
function newAuthor(picture) {
  const author = {
    avatar: picture,
  };

  return author;
}

//генерирует случайный элемент "автор" из массива
function generateRandomAuthor(avatarArray) {

  return newAuthor(getRandomArrayElement(avatarArray));
}

//конструктор объекта Offer
function newOffer(titleString, addressValue, priceValue, typeValue, roomsValue,
  guestsValue, checkinValue, checkoutValue, featuresValue, descriptionValue, photosValue) {
  const offer = {
    title: titleString,
    adress: addressValue,
    price: priceValue,
    type: typeValue,
    rooms: roomsValue,
    guests: guestsValue,
    checkin: checkinValue,
    checkout: checkoutValue,
    features: featuresValue,
    description: descriptionValue,
    photos: photosValue,
  };

  return offer;
}

//генерирует случайный объект 'Offer'
function generateRandomOffer(offerObject){
  const location = generateRandomLocation();
  offerObject.title = getRandomArrayElement(titles);
  offerObject.addres = `${+location.lat} ${location.lng}`;
  offerObject.price = getRandomArrayElement(prices);
  offerObject.type = getRandomArrayElement(types);
  offerObject.rooms = generatedRandomIntInRange(1, 4);
  offerObject.guests = generatedRandomIntInRange(1, 6);
  offerObject.checkin = getRandomArrayElement(checkinsAndCheckouts);
  offerObject.checkout = getRandomArrayElement(checkinsAndCheckouts);
  offerObject.features = randomTrimArray(features);
  offerObject.description = getRandomArrayElement(descriptions);
  offerObject.photo = randomTrimArray(photos);
  offerObject.location = location;

  return offerObject;
}

export function getRandomOffer(num) {
  const arrayOfOffers = [];
  let i = 0;
  while(i < num) {
    arrayOfOffers.push(generateRandomOffer({}));
    i+=1;
  }

  return arrayOfOffers;
}
