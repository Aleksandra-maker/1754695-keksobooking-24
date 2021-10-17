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
  '',
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
  'Не самый лучший район, зато дешево' ,
  'Дворец с евроремонтом' ,
  'Обычная светлая квартира с тремя ваннами. Можно с собаками' ,
  '',
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

//генерирует случайный объект 'Offer'
function generateRandomOffer(offerBody){
  const location = generateRandomLocation();
  offerBody.title = getRandomArrayElement(titles);
  offerBody.addres = `${+location.lat} ${location.lng}`;
  offerBody.price = getRandomArrayElement(prices);
  offerBody.type = getRandomArrayElement(types);
  offerBody.rooms = generatedRandomIntInRange(1, 4);
  offerBody.guests = generatedRandomIntInRange(1, 6);
  offerBody.checkin = getRandomArrayElement(checkinsAndCheckouts);
  offerBody.checkout = getRandomArrayElement(checkinsAndCheckouts);
  offerBody.features = randomTrimArray(features);
  offerBody.description = getRandomArrayElement(descriptions);
  offerBody.photo = randomTrimArray(photos);
  //offerBody.location = location;

  const offerObject = {
    author: generateRandomAuthor(avatars),
    offer: offerBody,
    location: location,
  };
  return offerObject;
}


//Функия принимает на вход число и возвращает массив из num-объектов
export function getRandomOffer(num) {
  const arrayOfOffers = [];
  let i = 0;
  while(i < num) {
    arrayOfOffers.push(generateRandomOffer({}));
    i+=1;
  }

  return arrayOfOffers;
}
