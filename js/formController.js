let minPriceFlat = 1000;
let minPriceHotel = 3000;
let minPriceHouse = 5000;
let minPricePalace = 10000;

let roomNumberOne = '1';
let roomNumberTwo = '2';
let roomNumberThree = '3';
let roomNumberHundred = '100';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const fieldsets = adForm.querySelectorAll('fieldset');
const select = mapFilters.querySelectorAll('select');
const form = document.querySelector('.ad-form');
const roomNumber = form.querySelector('#room_number');
const defaultLocation = '35.68950  139.69171';

const timeOptionOne = '12:00';
const timeOptionTwo = '13:00';
const timeOptionThree = '14:00';



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
  const capacity = form.querySelector('#capacity');
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
  const form = document.querySelector('.ad-form');
  const title = form.querySelector('#title');
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
  const form = document.querySelector('.ad-form');
  const price = form.querySelector('#price');
  const priceValue = parseInt(price.value);
  const roomType = form.querySelector('#type').value;


  if (priceValue > 1000000) {
    invalidateFormObject(price, 'стоимость не должна превышать 1000000');

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

      } else {
        releaseValidation(price);
      }
      break;

    case 'flat':
      if (priceValue === '' || isNaN(priceValue) || priceValue < minPriceFlat)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 1000');


      } else {
        releaseValidation(price);
      }
      break;

    case 'hotel':
      if (priceValue === '' || isNaN(priceValue) || priceValue < minPriceHotel)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 3000');


      } else {
        releaseValidation(price);
      }
      break;

    case 'house':
      if (priceValue === '' || isNaN(priceValue) || priceValue < minPriceHouse)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 5000');

      } else {
        releaseValidation(price);
      }
      break;

    case 'palace':

      if (priceValue === '' || isNaN(priceValue) || priceValue < minPricePalace)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 10000');

      } else {
        releaseValidation(price);
      }
      break;

  }

}

function changeCheckOutType() {
  console.log('checkin time changed to ')
  const checkIn = document.querySelector("#timein") 
  const checkOutTime = document.querySelector("#timeout")
  console.log('checkin time changed to ',checkIn.value)
  switch (checkIn.value) {
    case (timeOptionOne):
      checkOutTime.value = timeOptionOne;
      break;
    case (timeOptionTwo):
      checkOutTime.value = timeOptionTwo;
      break;
    case (timeOptionThree):
      checkOutTime.value = timeOptionThree;
      break;
  }

}

function changeCheckInType() {
  const checkIn = document.querySelector("#timein") 
  const checkOutTime = document.querySelector("#timeout")
  switch (checkOutTime.value) {
    case (timeOptionOne):
      checkIn.value = timeOptionOne;
      break;
    case (timeOptionTwo):
      checkIn.value = timeOptionTwo;
      break;
    case (timeOptionThree):
      checkIn.value = timeOptionThree;
      break;
  }
}
 

export function formDeactivate() {
  
   
  adForm.classList.add('ad-form--disabled');
  fieldsets.forEach((element) => { element.disabled = true; });
  mapFilters.classList.add('map__filters--disabled');
  select.forEach((element) => { element.disabled = true; });
}

export function formActivated() {
  adForm.querySelector('#address').value = defaultLocation;
  adForm.classList.remove('ad-form--disabled');
  fieldsets.forEach((element) => { element.disabled = false; });
  mapFilters.classList.remove('map__filters--disabled');
  select.forEach((element) => { element.disabled = false; });
}

export function validateForm() {
  const submit = document.querySelector('.ad-form');
  const price = submit.querySelector('#price');
  const title = submit.querySelector('#title');
  const roomNumber = submit.querySelector('#room_number');
  const checkInTime = submit.querySelector('#timein');
  const checkOutTime = submit.querySelector('#timeout');

  validatedCapacity();
  changeCheckInType();

  price.addEventListener('input', validatePrice);
  title.addEventListener('input', validateTitle);
  roomNumber.addEventListener('change', validatedCapacity);
  price.addEventListener('submit', fullFormValidation);
  checkInTime.addEventListener('change', changeCheckOutType);
  checkOutTime.addEventListener('change', changeCheckInType);
}

