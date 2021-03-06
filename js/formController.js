import {fetchSimilar, sendForm} from './externalApiController.js';
import { drawPins, map } from './mapController.js';


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
//const submitButton = form.querySelector('.ad-form__submit');
export let similarPosts = [];


function fullFormValidation(event) {
  validatePrice();
  validatedCapacity();
  validateTitle();
  event.preventDefault();
  sendForm(event.target);
}

function invalidateFormObject(object, text) {
  object.setCustomValidity(text);
  object.reportValidity();
}

function releaseValidation(object) {
  object.setCustomValidity('');
  object.reportValidity();
}

function validatedCapacity() {
  const roomNumberValue = roomNumber.value;
  const selectOptions = capacity.querySelectorAll('option');

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
    invalidateFormObject(title, '???????????? ???????? ???? ?????????? 30 ????????????????');

  } else if (titleValue.length > 100){
    invalidateFormObject(title, '???????????? ???????? ???? ?????????? 100 ????????????????');

  } else {
    releaseValidation(title);
  }
}

function validatePrice() {
  const priceValue = parseInt(price.value, 10);
  const roomType = form.querySelector('#type').value;

  if (priceValue > 1000000) {
    invalidateFormObject(price, '?????????????????? ???? ???????????? ?????????????????? 1000000');

    return false;
  } else {
    releaseValidation(price);
  }

  if (priceValue < 0 ) {
    invalidateFormObject(price, '?????????????????? ???? ?????????? ???????? ???????????? ????????');
    price.value = '';
    return false;
  } else {
    releaseValidation(price);
  }

  switch (roomType) {
    case 'bungalow':


      if (priceValue === '' || isNaN(priceValue) || priceValue < 0)  {
        invalidateFormObject(price, '?????????????????????? ???????? ???? ???????? ???????????? ???????? ?????????????????????????? ????????????');
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
        invalidateFormObject(price, '?????????????????????? ???????? ???? ???????? ???????????? ???????? ???? ?????????? 1000');
        price.setAttribute('min', parseInt(minPriceFlat, 10));
        price.setAttribute('placeholder', parseInt(minPriceFlat, 10));
        price.min = 1000;


      } else {
        releaseValidation(price);
      }
      break;

    case 'hotel':
      if (priceValue === '' || isNaN(priceValue) || priceValue < minPriceHotel)  {
        invalidateFormObject(price, '?????????????????????? ???????? ???? ???????? ???????????? ???????? ???? ?????????? 3000');
        price.setAttribute('min', parseInt(minPriceHotel, 10));
        price.setAttribute('placeholder', parseInt(minPriceHotel, 10));

      } else {
        releaseValidation(price);
      }
      break;

    case 'house':
      if (priceValue === '' || isNaN(priceValue) || priceValue < minPriceHouse)  {
        invalidateFormObject(price, '?????????????????????? ???????? ???? ???????? ???????????? ???????? ???? ?????????? 5000');
        price.setAttribute('min', parseInt(minPriceHouse, 10));
        price.setAttribute('placeholder', parseInt(minPriceHouse, 10));

      } else {
        releaseValidation(price);
      }
      break;

    case 'palace':

      if (priceValue === '' || isNaN(priceValue) || priceValue < minPricePalace)  {
        invalidateFormObject(price, '?????????????????????? ???????? ???? ???????? ???????????? ???????? ???? ?????????? 10000');
        price.setAttribute('min', parseInt(minPricePalace, 10));
        price.setAttribute('placeholder', parseInt(minPricePalace, 10));
      } else {
        releaseValidation(price);
      }
      break;

  }

}

function changeCheckOutType() {

  const checkIn = document.querySelector('#timein');
  const checkOutTime = document.querySelector('#timeout');
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
  const checkIn = document.querySelector('#timein');
  const checkOutTime = document.querySelector('#timeout');
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
  drawSuggested();
}


export function formActivate() {
  //const form = document.querySelector('.ad-form');
  form.querySelector('#address').value = defaultLocation;
  form.classList.remove('ad-form--disabled');
  fieldsets.forEach((element) => { element.disabled = false; });
  mapFilters.classList.remove('map__filters--disabled');
  select.forEach((element) => { element.disabled = false; });
  map.addEventListener('scroll', fetchSimilar);
  fetchSimilar();
}

export function validateForm() {
  const submit = document.querySelector('.ad-form');
  //const price = submit.querySelector('#price');
  //const title = submit.querySelector('#title');
  //const roomNumber = submit.querySelector('#room_number');
  const checkInTime = submit.querySelector('#timein');
  const checkOutTime = submit.querySelector('#timeout');
  const roomType = submit.querySelector('#type');

  validatedCapacity();
  changeCheckInType();
  //validatePrice();

  price.addEventListener('input', validatePrice);
  title.addEventListener('input', validateTitle);
  roomNumber.addEventListener('change', validatedCapacity);
  //price.addEventListener('submit', fullFormValidation);
  checkInTime.addEventListener('change', changeCheckOutType);
  checkOutTime.addEventListener('change', changeCheckInType);
  roomType.addEventListener('change', validatePrice);
  mapFilters.addEventListener('change', drawSuggested);
  form.addEventListener('submit', fullFormValidation);
}

export function drawSuggested() {
  const posts = getFilteredSuggestions();
  drawPins(posts);
}


function getFilterCriteria() {
  const criteria = {};
  for (const selector of select) {
    criteria[selector.name] = selector.value;

  }
  return criteria;
}

function checkIfPostFitsCriteria(post, criteria) {
  if (post.offer.type !== criteria['housing-type']) {
    if (criteria['housing-type'] !== 'any')
    {
      return false;
    }
  }

  switch (criteria['housing-price']) {
    case 'low':
      if (post.offer.price >= 10000) {
        return false;
      }
      break;
    case 'middle':
      if (post.offer.price < 10000 || post.offer.price >= 50000) {
        return false;
      } break;
    case 'high':
      if (post.offer.price < 50000) {
        return false;
      } break;
    case 'any':
      break;
  }
  if (criteria['housing-rooms'] !== post.offer.rooms.toString()) {
    if (criteria['housing-rooms'] !== 'any') {
      return false;
    }
  }
  let tempguests = post.offer.guests;
  if (post.offer.guests > 2) {
    tempguests = 0;
  }
  if (criteria['housing-guests'] !== tempguests.toString()) {
    if (criteria['housing-guests'] !== 'any') {
      return false;
    }
  }

  return true;
}

function  checkFeatures (offer)  {
  let matchOrNot = true;
  const chosenFeatures = mapFilters.querySelectorAll('.map__checkbox:checked');
  if (chosenFeatures.length > 0) {
    if (offer.features === undefined) {
      return  false;
    }
    chosenFeatures.forEach((element) => {
      if (!offer.features.includes(element.value)) {
        matchOrNot = false;
      }
    });
  }
  return matchOrNot;
}


function  getFilteredSuggestions() {
  const unFilteredPosts = similarPosts.slice();
  const filteredPosts = [];
  const criteria = getFilterCriteria();
  for (const post of unFilteredPosts) {
    if (checkIfPostFitsCriteria(post, criteria) && checkFeatures(post.offer) ) {
      filteredPosts.push(post);
      if (filteredPosts.length === 10) {
        return filteredPosts;
      }
    }
  }
  return filteredPosts;
}

export function setAllSimilarPosts(posts) {
  similarPosts = posts;
  drawSuggested();
}
