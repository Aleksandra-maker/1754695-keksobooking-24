import {generateOfferCard} from './layoutGenerator.js';

const minPriceFlat = 1000;
const minPriceHotel = 3000;
const minPriceHouse = 5000;
const minPricePalace = 10000;
const minPriceBungalo = 0;

const roomNumberOne = '1';
const roomNumberTwo = '2';
const roomNumberThree = '3';
const roomNumberHundred = '100';

const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const fieldsets = form.querySelectorAll('fieldset');
const select = mapFilters.querySelectorAll('select');
const roomNumber = form.querySelector('#room_number');
const defaultLocation = '35.68950  139.69171';
const capacity = form.querySelector('#capacity');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const timeOptionOne = '12:00';
const timeOptionTwo = '13:00';
const timeOptionThree = '14:00';
const decimalPlaces = 5;
const similarEndPoint = 'https://24.javascript.pages.academy/keksobooking/data'
const mainPinIconImage = '/img/main-pin.svg'
const pinIcon = '/img/pin.svg'

function fullFormValidation(event) {
  validatePrice();
  validatedCapacity();
  validateTitle();
  if (event) {
    event.preventDefault();
  }
}

function invalidateFormObject(object, text) {
  object.setCustomValidity(text);
  object.reportValidity();
}

function releaseValidation(object) {
  object.setCustomValidity('');
  object.reportValidity();
}

//Capacity validator
function validatedCapacity() {
  const roomNumberValue = roomNumber.value;
  const selectOptions = capacity.querySelectorAll('option');
  //console.log(roomNumberValue);

  switch (roomNumberValue) {
    case roomNumberOne:
      selectOptions.forEach ((element) => {
        const value = element.value;
        if (value !== roomNumberOne) {
          element.disabled = true;
        } else {
          element.disabled = false;
          element.selected = true;
        }
      });

      break;

    case roomNumberTwo:
      selectOptions.forEach ((element) => {
        const value = element.value;
        if ((value !== roomNumberOne) && (value !== roomNumberTwo)) {
          element.disabled = true;
        } else {
          element.disabled = false;
          element.selected = true;
        }
      });

      break;

    case roomNumberThree:
      selectOptions.forEach ((element) => {
        const value = element.value;
        if ((value !== roomNumberOne) && (value !== roomNumberTwo) && (value !== roomNumberThree)) {
          element.disabled = true;
        } else {
          element.disabled = false;
          element.selected = true;
        }
      });

      break;

    case roomNumberHundred:
      selectOptions.forEach ((element) => {
        const value = element.value;
        if ((value !== '0')) {
          element.disabled = true;
        } else {
          element.disabled = false;
          element.selected = true;
        }
      });

      break;
  }
}


function validateTitle() {
  const titleValue = title.value;
  if (titleValue.length < 30) {
    invalidateFormObject(title, 'Должно быть не менее 30 символов');

  } else if (titleValue.length > 100){
    invalidateFormObject(title, 'Должно быть не более 100 символов');

  } else {
    releaseValidation(title);
  }
}

function validatePrice() {
  const priceValue = parseInt(price.value);
  const roomType = form.querySelector('#type').value;
  
  if (priceValue > 1000000) {
    invalidateFormObject(price, 'стоимость не должна превышать 1000000');
    
    return false;
  } else {
    releaseValidation(price);
  }
  
  if (priceValue < 0 ) {
    invalidateFormObject(price, 'стоимость не может быть меньше нуля');
    price.value = ""
    return false;
  } else {
    releaseValidation(price);
  }
  
  switch (roomType) {
    case 'bungalow':
      
      
      if (priceValue === '' || isNaN(priceValue) || priceValue < 0)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть положительным числом');
        price.setCustomValidity('Invalid bungalo price');
        price.reportValidity();
        
        price.setAttribute('min', parseInt(minPriceBungalo, 10));
        price.setAttribute('placeholder', parseInt(minPriceBungalo, 10));
        
      } else {
        releaseValidation(price);
      }
      break;

    case 'flat':
      if (priceValue === '' || isNaN(priceValue) || priceValue < minPriceFlat)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 1000');
        price.setAttribute('min', parseInt(minPriceFlat, 10));
        price.setAttribute('placeholder', parseInt(minPriceFlat, 10));
        price.min = 1000;
        

      } else {
        releaseValidation(price);
      }
      break;

    case 'hotel':
      if (priceValue === '' || isNaN(priceValue) || priceValue < minPriceHotel)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 3000');
        price.setAttribute('min', parseInt(minPriceHotel, 10));
        price.setAttribute('placeholder', parseInt(minPriceHotel, 10));

      } else {
        releaseValidation(price);
      }
      break;

    case 'house':
      if (priceValue === '' || isNaN(priceValue) || priceValue < minPriceHouse)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 5000');
        price.setAttribute('min', parseInt(minPriceHouse, 10));
        price.setAttribute('placeholder', parseInt(minPriceHouse, 10));

      } else {
        releaseValidation(price);
      }
      break;

    case 'palace':

      if (priceValue === '' || isNaN(priceValue) || priceValue < minPricePalace)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 10000');
        price.setAttribute('min', parseInt(minPricePalace, 10));
        price.setAttribute('placeholder', parseInt(minPricePalace, 10));
      } else {
        releaseValidation(price);
      }
      break;

  }

}

function changeCheckOutType() {
  
  const checkIn = document.querySelector("#timein");
  const checkOutTime = document.querySelector("#timeout");
  console.log('checkin time changed to ', checkIn.value);
  switch (checkIn.value) {
    case (timeOptionOne):
      checkOutTime.value = checkIn.value;
      break;
    case (timeOptionTwo):
      checkOutTime.value = checkIn.value;
      break;
    case (timeOptionThree):
      checkOutTime.value = checkIn.value;
      break;
  }

}

function changeCheckInType() {
  const checkIn = document.querySelector("#timein");
  const checkOutTime = document.querySelector("#timeout");
  switch (checkOutTime.value) {
    case (timeOptionOne):
      checkIn.value = checkOutTime.value;
      break;
    case (timeOptionTwo):
      checkIn.value = checkOutTime.value;
      break;
    case (timeOptionThree):
      checkIn.value = checkOutTime.value;
      break;
  }
}

export function formDeactivate() { 
  form.classList.add('ad-form--disabled');
  fieldsets.forEach((element) => { element.disabled = true; });
  mapFilters.classList.add('map__filters--disabled');
  select.forEach((element) => { element.disabled = true; });
}

export function formActivated() {
  form.querySelector('#address').value = defaultLocation;
  form.classList.remove('ad-form--disabled');
  fieldsets.forEach((element) => { element.disabled = false; });
  mapFilters.classList.remove('map__filters--disabled');
  select.forEach((element) => { element.disabled = false; });
  fetchSimilar()
}

export function validateForm() {
  const submit = document.querySelector('.ad-form');
  const price = submit.querySelector('#price');
  const title = submit.querySelector('#title');
  const roomNumber = submit.querySelector('#room_number');
  const checkInTime = submit.querySelector('#timein');
  const checkOutTime = submit.querySelector('#timeout');
  const roomType = submit.querySelector('#type');

  validatedCapacity();
  changeCheckInType();
  //validatePrice();

  price.addEventListener('input', validatePrice);
  title.addEventListener('input', validateTitle);
  roomNumber.addEventListener('change', validatedCapacity);
  price.addEventListener('submit', fullFormValidation);
  checkInTime.addEventListener('change', changeCheckOutType);
  checkOutTime.addEventListener('change', changeCheckInType);
  roomType.addEventListener('change', validatePrice);


  
}


const map = L.map('map-canvas')
.setView({
  lat: 35.68334,
  lng: 139.78199,
}, 10);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
},
).addTo(map);


const mainPinIcon = L.icon({
  //iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconUrl: mainPinIconImage,
  iconSize: [52, 52],
  iconAnchor: [26, 52],

});

const mainPinMarker = L.marker(
{
  lat: 35.68334,
  lng: 139.78199,
},
{
  icon: mainPinIcon,
  draggable: true,
},
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const coordsObject = document.querySelector('#address')
  
  const coords = evt.target.getLatLng();

  coordsObject.value = coords['lat'].toFixed(decimalPlaces) + ' ' + coords['lng'].toFixed(decimalPlaces)

});



function drawPins(posts) {
  
  posts.forEach(post => {
    console.log(post)
    const normalPinIcon = L.icon({
      iconUrl: pinIcon,
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    
    });
    const normalPinMarker = L.marker(
      {
        lat: post['location']['lat'],
        lng: post['location']['lng'],
      },
      {
        icon: normalPinIcon,
        draggable: false,
      },
      );
      
      
      normalPinMarker.bindPopup(generateOfferCard(post))
      normalPinMarker.addTo(map);   
  });
  
}

function fetchSimilar() {
  fetch(similarEndPoint)
  .then((response) => response.json())
  .then(((posts) => drawPins(posts)))
  
}