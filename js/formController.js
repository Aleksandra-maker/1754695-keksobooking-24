
const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const fieldsets = adForm.querySelectorAll('fieldset');
const select = mapFilters.querySelectorAll('select');

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

