//return random integer
function generatedRandomIntInRange(min, max) {
    if (isNaN(min) || isNaN(max)) {
        return undefined;
    }

    if (max < min) {

        [max, min] = [min, max]
        
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

    return (Math.random() * (max - min + 1) + min).toFixed(decimalPlaces);
}
 
//Возвращает случайный элемент массива
function getRandomArrayElement(array) {
    let rnd = generatedRandomIntInRange(0, array.length - 1);
    let result = array[rnd];

    return result;
}

//Функция удаляет несколько случайное количество случайных элементов массива
function randomTrimArray (array) {
    let numberOfElementsToDelete = generatedRandomIntInRange(0, array.length - 1);
    let result = array;
    for (let i = 0; i < numberOfElementsToDelete; i++) {
        let elementNumberToSplice =  generatedRandomIntInRange(0, result.length - 1);
        result.splice(elementNumberToSplice,1); 
    }

    return result;
}

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

//конструктор объекта автор
function newAuthor(picture) {
    let author = {
        avatar: picture,
    }

    return author;
}

//генерирует случайный элемент "автор" из массива 
function generateRandomAuthor(avatars) {
    
    return newAuthor(getRandomArrayElement(avatars));   
}

//конструктор объекта Offer
function newOffer(titleString, addressValue, priceValue, typeValue, roomsValue, 
    guestsValue, checkinValue, checkoutValue, featuresValue, descriptionValue, photosValue) {
    let offer = {
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
    }

    return offer;
}

//генерирует случайный объект 'Offer'
function generateRandomOffer(titles, prices, types, features, descriptions, photos){
    let title = getRandomArrayElement(titles);
    let addres = +generateRandomLocation().lat+' '+generateRandomLocation().lng;
    let price = getRandomArrayElement(prices);
    let type = getRandomArrayElement(types);
    let rooms = generatedRandomIntInRange(1, 4);
    let guests = generatedRandomIntInRange(1, 6);
    let checkin = getRandomArrayElement(checkinsAndCheckouts);
    let checkout = getRandomArrayElement(checkinsAndCheckouts);
    let feature = randomTrimArray(features); 
    let description = getRandomArrayElement(descriptions);
    let photo = getRandomArrayElement(photos);
    
    return newOffer(title, addres, price, type, rooms, guests, checkin, checkout,
        feature, description, photo);
}

//конструктор объекта location
function newLocation (latNumber, lngNumber) {
    let location = {
        lat: latNumber,
        lng: lngNumber,
    }

    return location;
}

//генерирует объект location сщ случайными координатами
function generateRandomLocation () {
    let lat = generatedRandomFloatInRange(35.65, 35.7, 5);
    let lng = generatedRandomFloatInRange(139.7, 139.8, 5);
    let result = newLocation (lat, lng);

    return result;
}

console.log(generateRandomLocation ());
console.log(generateRandomAuthor(avatars));
console.log(generateRandomOffer(titles, prices, types, features, descriptions, photos));
