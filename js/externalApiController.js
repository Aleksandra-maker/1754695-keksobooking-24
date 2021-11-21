import { setAllSimilarPosts } from './formController.js';
const similarEndPoint = 'https://24.javascript.pages.academy/keksobooking/data';
const submitEndPoint = 'https://24.javascript.pages.academy/keksobooking';
import { generatePopUp } from './layoutGenerator.js';


export function fetchSimilar() {
  fetch(similarEndPoint)
    .then((response) => response.json())
    .then((posts) => setAllSimilarPosts(posts))
    .catch((response) => failedFetchimilarOffers(response));

}

function failedFetchimilarOffers() {
  generatePopUp(false,true);
}

export function sendForm(form) {
  fetch(submitEndPoint, {

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
