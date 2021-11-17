<<<<<<< Updated upstream
=======
import { fetchSimilar } from './externalApiController.js';
import { drawPins } from './mapController.js';
>>>>>>> Stashed changes

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const fieldsets = adForm.querySelectorAll('fieldset');
const select = mapFilters.querySelectorAll('select');
<<<<<<< Updated upstream

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

=======
const roomNumber = form.querySelector('#room_number');
const defaultLocation = '35.68950  139.69171';
const capacity = form.querySelector('#capacity');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const timeOptionOne = '12:00';
const timeOptionTwo = '13:00';
const timeOptionThree = '14:00';
var allSimilarPosts = []
var filtersState = {}


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
            selectOptions.forEach((element) => {
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
            selectOptions.forEach((element) => {
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
            selectOptions.forEach((element) => {
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
            selectOptions.forEach((element) => {
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

    } else if (titleValue.length > 100) {
        invalidateFormObject(title, 'Должно быть не более 100 символов');

    } else {
        releaseValidation(title);
    }
}

function validatePrice() {
    const priceValue = parseInt(price.value, 10);
    const roomType = form.querySelector('#type').value;

    if (priceValue > 1000000) {
        invalidateFormObject(price, 'стоимость не должна превышать 1000000');

        return false;
    } else {
        releaseValidation(price);
    }

    if (priceValue < 0) {
        invalidateFormObject(price, 'стоимость не может быть меньше нуля');
        price.value = '';
        return false;
    } else {
        releaseValidation(price);
    }

    switch (roomType) {
        case 'bungalow':


            if (priceValue === '' || isNaN(priceValue) || priceValue < 0) {
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
            if (priceValue === '' || isNaN(priceValue) || priceValue < minPriceFlat) {
                invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 1000');
                price.setAttribute('min', parseInt(minPriceFlat, 10));
                price.setAttribute('placeholder', parseInt(minPriceFlat, 10));
                price.min = 1000;


            } else {
                releaseValidation(price);
            }
            break;

        case 'hotel':
            if (priceValue === '' || isNaN(priceValue) || priceValue < minPriceHotel) {
                invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 3000');
                price.setAttribute('min', parseInt(minPriceHotel, 10));
                price.setAttribute('placeholder', parseInt(minPriceHotel, 10));

            } else {
                releaseValidation(price);
            }
            break;

        case 'house':
            if (priceValue === '' || isNaN(priceValue) || priceValue < minPriceHouse) {
                invalidateFormObject(price, 'минимальная цена за ночь должна быть не менее 5000');
                price.setAttribute('min', parseInt(minPriceHouse, 10));
                price.setAttribute('placeholder', parseInt(minPriceHouse, 10));

            } else {
                releaseValidation(price);
            }
            break;

        case 'palace':

            if (priceValue === '' || isNaN(priceValue) || priceValue < minPricePalace) {
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
}

export function setAllSimilarPosts(posts) {
    allSimilarPosts = posts
}

function checkPost(p, post) {
    return !(p === psot)
}

function filterPosts() {

    let filteredPosts = allSimilarPosts.slice()

    let postcounter = 0;
    if (filteredPosts) {
        for (const post of filteredPosts) {

            for (const selectFilter of select) {

                if (selectFilter.value == 'any') {
                    continue
                }

                switch (selectFilter.name) {

                    case 'housing-type':
                        if (post.offer.type != selectFilter.value) {
                            console.log('THIS HAS TO BE REMOVED')
                            filteredPosts = filteredPosts.filter(p =>
                                (p != post)
                            )
                            console.log(filteredPosts)

                        } else {
                            break
                        }
                    case 'housing-price':
                        //console.clear()
                        console.log('HOUSING PRICE, POST VALUE--->', post.offer.price, selectFilter.value, postcounter)
                        if (selectFilter.value == 'low') {
                            if (post.offer.price >= 10000) {
                                console.log('price is too high')
                                filteredPosts = filteredPosts.filter(p =>
                                    (p != post)
                                )
                                console.log(filteredPosts)
                            } else {
                                break
                            }

                        }

                        if (selectFilter.value == 'middle') {
                            if (post.offer.price >= 50000 || post.offer.price < 10000) {
                                filteredPosts = filteredPosts.filter(p =>
                                    (p != post)
                                )
                                console.log('price is not middle')

                            } else { break }
                        }

                        if (selectFilter.value == 'high') {
                            if (post.offer.price < 50000) {
                                filteredPosts = filteredPosts.filter(p =>
                                    (p != post)
                                )
                                console.log('price is too low')
                                    //filteredPosts.splice(postcounter)
                            } else { break }
                        }

                    case 'housing-rooms':
                        if (selectFilter.value != post.offer.rooms) {
                            filteredPosts = filteredPosts.filter(p =>
                                (p != post)
                            )
                        }
                        break

                    case 'housing-guests':
                        let ajustedValue = post.offer.guests

                        if (ajustedValue > 2) {
                            ajustedValue = 0
                        }
                        if (selectFilter.value != ajustedValue) {
                            filteredPosts = filteredPosts.filter(p =>
                                (p != post)
                            )
                        } else { break }


                    default:
                        console.log(selectFilter.name)
                        break
                }
            }




            //console.log(post.offer.type)
            //console.log(post.offer.rooms)
            //console.log(post.offer.guests)
        }
    }



    //console.log('---------------FILTERED DEBUG PRINT-------------------')
    //for (const x of filteredPosts) {
    //   console.log(x.offer.type, x.offer.price, x.offer.rooms, x.offer.guests)
    //    continue
    //
    //    }
    drawPins(filteredPosts.slice(0, 10))
}






export function formActivate() {
    //const form = document.querySelector('.ad-form');
    form.querySelector('#address').value = defaultLocation;
    form.classList.remove('ad-form--disabled');
    fieldsets.forEach((element) => { element.disabled = false; });
    mapFilters.classList.remove('map__filters--disabled');
    select.forEach((element) => { element.disabled = false; });
    fetchSimilar()



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
    price.addEventListener('submit', fullFormValidation);
    checkInTime.addEventListener('change', changeCheckOutType);
    checkOutTime.addEventListener('change', changeCheckInType);
    roomType.addEventListener('change', validatePrice);
    for (const selector of select) {
        selector.addEventListener('change', filterPosts)
    }
    submit.addEventListener('click', sendForm(form))


}
>>>>>>> Stashed changes
