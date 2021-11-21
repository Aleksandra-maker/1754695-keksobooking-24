import { setAllSimilarPosts } from './formController.js';
const similarEndPoint = 'https://24.javascript.pages.academy/keksobooking/data';
const submitEndPoint = 'https://24.javascript.pages.academy/keksobooking';
import { generatePopUp } from './layoutGenerator.js';

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

    method: 'POST',
    body: new FormData(form),
  })
    .then((response) => response.ok ? successfulSubmitOffer(response) : failedSubmitOffer(response))

    .catch((response) => failedSubmitOffer(response));
}


function failedSubmitOffer(response) {
  // eslint-disable-next-line no-console
  console.log(response);
  // eslint-disable-next-line no-alert
  generatePopUp(false);
}

function successfulSubmitOffer(response) {
  // eslint-disable-next-line no-console
  //console.log(response);
  generatePopUp(true);
  // eslint-disable-next-line no-alert
  //alert('Данные формы отправлены успешно');
}
