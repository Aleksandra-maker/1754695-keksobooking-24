/* eslint-disable indent */
//import { drawPins } from './mapController.js';
//import { generateOfferCard } from './layoutGenerator.js';
import { setAllSimilarPosts } from './formController.js';
const similarEndPoint = 'https://24.javascript.pages.academy/keksobooking/data';
const submitEndPoint = 'https://24.javascript.pages.academy/keksobooking';

export function fetchSimilar() {
    //console.log(Math.random())
    fetch(similarEndPoint)
        .then((response) => response.json())
        .then(((posts) => setAllSimilarPosts(posts)))
        .catch((response) => failedFetchimilarOffers(response));

}

function failedFetchimilarOffers(response) {
 // eslint-disable-next-line no-console
 console.log(response);
 // eslint-disable-next-line no-alert
 alert('Не удалось получить данные с сервера');
}

export function sendForm(form) {
    //console.log(form)
    fetch(submitEndPoint, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(form),
        })
        .then((response) => response.ok ? successfulSubmitOffer(response) : failedSubmitOffer(response))

        .catch((response) => failedSubmitOffer(response));
}

function failedSubmitOffer(response) {
    // eslint-disable-next-line no-console
    console.log(response);
    // eslint-disable-next-line no-alert
    alert('Не удалось отправит данные формы на сервер');
}

function successfulSubmitOffer(response) {
    // eslint-disable-next-line no-console
    console.log(response);
    // eslint-disable-next-line no-alert
    //alert('Данные формы отправлены успешно');
}
