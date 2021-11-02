
const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const fieldsets = adForm.querySelectorAll('fieldset');
const select = mapFilters.querySelectorAll('select');
const form = document.querySelector('.ad-form');
const roomNumber = form.querySelector('#room_number');
const defaultLocation = '35.68950  139.69171';


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

function validatedCapacity() {
  const roomNumberValue = roomNumber.value;
  const capacity = form.querySelector('#capacity');
  const selectOptions = capacity.querySelectorAll('option');
  //console.log(roomNumberValue);

  switch (roomNumberValue) {
    case '1':
      selectOptions.forEach ((element) => {
        const value = element.getAttribute('value');
        if (value !== '1') {
          element.disabled = true;
        } else {
          element.disabled = false;
          element.selected = true;
        }
      });

      break;

    case '2':
      selectOptions.forEach ((element) => {
        const value = element.getAttribute('value');
        if ((value !== '1') && (value !== '2')) {
          element.disabled = true;
        } else {
          element.disabled = false;
          element.selected = true;
        }
      });

      break;

    case '3':
      selectOptions.forEach ((element) => {
        const value = element.getAttribute('value');
        if ((value !== '1') && (value !== '2') && (value !== '3')) {
          element.disabled = true;
        } else {
          element.disabled = false;
          element.selected = true;
        }
      });

      break;

    case '100':
      selectOptions.forEach ((element) => {
        const value = element.getAttribute('value');
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
  const priceValue = price.value;
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
      if (priceValue === '' || isNaN(priceValue) || priceValue < 1000)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 1000');


      } else {
        releaseValidation(price);
      }
      break;

    case 'hotel':
      if (priceValue === '' || isNaN(priceValue) || priceValue < 3000)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 3000');


      } else {
        releaseValidation(price);
      }
      break;

    case 'house':
      if (priceValue === '' || isNaN(priceValue) || priceValue < 5000)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 5000');

      } else {
        releaseValidation(price);
      }
      break;

    case 'palace':

      if (priceValue === '' || isNaN(priceValue) || priceValue < 10000)  {
        invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 10000');

      } else {
        releaseValidation(price);
      }
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

  validatedCapacity();

  price.addEventListener('input', validatePrice);
  title.addEventListener('input', validateTitle);
  roomNumber.addEventListener('change', validatedCapacity);
  price.addEventListener('submit', fullFormValidation);

}

