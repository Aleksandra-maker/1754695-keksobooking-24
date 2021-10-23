export function formDeactivate() {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form--disabled');
  const fieldsets = adForm.querySelectorAll('fieldset');
  fieldsets.forEach((element) => element.setAttribute('disabled',''));

  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('map__filters--disabled');
  const select = mapFilters.querySelectorAll('select');
  select.forEach((element) => element.setAttribute('disabled',''));
}

export function formActivated() {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.remove('ad-form--disabled');
  const fieldsets = adForm.querySelectorAll('fieldset');
  fieldsets.forEach((element) => element.removeAttribute('disabled'));

  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.remove('map__filters--disabled');
  const select = mapFilters.querySelectorAll('select');
  select.forEach((element) => element.removeAttribute('disabled'));
}

