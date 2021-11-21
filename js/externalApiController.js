import { setAllSimilarPosts } from './formController.js';
import { generatePopUp } from './layoutGenerator.js';

const SIMILARENDPOINT = 'https://24.javascript.pages.academy/keksobooking/data';
const SUBMITENDPOINT = 'https://24.javascript.pages.academy/keksobooking';

export function fetchSimilar() {
  fetch(SIMILARENDPOINT)
    .then((response) => response.json())
    .then((posts) => setAllSimilarPosts(posts))
    .catch((response) => failedFetchimilarOffers(response));

}

function failedFetchimilarOffers() {
  generatePopUp(false,true);
}

export function sendForm(form) {
  fetch(SUBMITENDPOINT, {

    method: 'POST',
    body: new FormData(form),
  })
    .then((response) => response.ok ? successfulSubmitOffer(response) : failedSubmitOffer(response))
    .catch((response) => failedSubmitOffer(response));
}

function failedSubmitOffer() {
  generatePopUp(false,false);
}

function successfulSubmitOffer() {
  generatePopUp(true,false);
}
