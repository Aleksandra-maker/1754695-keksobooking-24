
const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const fieldsets = adForm.querySelectorAll('fieldset');
const select = mapFilters.querySelectorAll('select');

//const titleFormName = document.getElementById('title');
//console.log(titleFormName);
//titleFormName.addEventListener('invalid', () => {

//if (titleFormName.validity.tooShort) {
// titleFormName.setCustomValidity('Заголовок должен содержать минимум 40 символов');
//} else if (titleFormName.validity.tooLong) {
//  titleFormName.setCustomValidity('Заголовок должен содержать макcимум 100 символов');
//} else if (titleFormName.validity.valueMissing) {
//  titleFormName.setCustomValidity('Обязательное поле');
//} else {
//  titleFormName.setCustomValidity('');
//}
//});

export function validateForm() {
  const submit = document.querySelector('.ad-form');
  const price = submit.querySelector('#price');
  const title = submit.querySelector('#title');

  price.addEventListener('input', validatePrice);
  title.addEventListener('input', validateTitle);
  price.addEventListener('submit', validatePrice);

}

function invalidateFormObject(object, text) {
  object.setCustomValidity(text);
  object.reportValidity();
}

function releaseValidation(object) {
  object.setCustomValidity('');
  object.reportValidity();
}

function validatedSpaces() {

}


function validateTitle(event) {
  const form = document.querySelector('.ad-form');
  const title = form.querySelector('#title');
  const titleValue = title.value;
  if (titleValue.length < 30) {
    invalidateFormObject(title, 'Долдно быть не менее 30 символофф');
    event.preventDefault();
  } else if (titleValue.length > 100){
    invalidateFormObject(title, 'Долдно быть не юолее 100 символофф');
    event.preventDefault();
  } else {
    releaseValidation(title);
  }
}

function validatePrice(event) {
  const form = document.querySelector('.ad-form');
  const price = form.querySelector('#price');
  const priceValue = price.value;
  const roomType = form.querySelector('#type').value;

  console.log(priceValue);

  if (priceValue > 1000000) {
    invalidateFormObject(price, 'стоимость не должна превышать 1000000');
    event.preventDefault();
    return false;
  } else {
    releaseValidation(price);
  }

  switch (roomType) {
    case 'bungalow':
      if (priceValue == '' || isNaN(priceValue) || priceValue < 0)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть положительным числом');
        price.setCustomValidity('Invalid bungalo price');
        price.reportValidity();
        event.preventDefault();

      } else {
        releaseValidation(price);
      }
      break;

    case 'flat':
      if (priceValue == '' || isNaN(priceValue) || priceValue < 1000)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 1000')
        event.preventDefault();

      } else {
        releaseValidation(price);
      }
      break;

    case 'hotel':
      if (priceValue == '' || isNaN(priceValue) || priceValue < 3000)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 3000')
        event.preventDefault();

      } else {
        releaseValidation(price);
      }
      break;

    case 'house':
      if (priceValue == '' || isNaN(priceValue) || priceValue < 5000)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 5000');
        event.preventDefault();

      } else {
        releaseValidation(price);
      }
      break;

    case 'palace':
      if (priceValue == '' || isNaN(priceValue) || priceValue < 10000)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 10000');
        event.preventDefault(price);

      } else {
        releaseValidation(price);
      }
      break;


  }

}


export function formDeactivate() {
  adForm.classList.add('ad-form--disabled');
  fieldsets.forEach(function (element) { element.disabled = true; });
  mapFilters.classList.add('map__filters--disabled');
  select.forEach(function (element) { element.disabled = true; });
}

export function formActivated() {
  adForm.classList.remove('ad-form--disabled');
  fieldsets.forEach(function (element) { element.disabled = false; });
  mapFilters.classList.remove('map__filters--disabled');
  select.forEach(function (element) { element.disabled = false; });
}

