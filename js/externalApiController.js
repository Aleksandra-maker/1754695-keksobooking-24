import { drawPins } from './mapController.js';
import { generateOfferCard } from './layoutGenerator.js';
import { setAllSimilarPosts } from './formController.js';
const similarEndPoint = 'https://24.javascript.pages.academy/keksobooking/data';
const submitEndPoint = 'https://24.javascript.pages.academy/keksobooking'


export function fetchSimilar() {
    //console.log(Math.random())
    fetch(similarEndPoint)
        .then((response) => response.json())
        .then(((posts) => setAllSimilarPosts(posts)));

}


export function sendForm(form) {
    console.log(form)
    fetch(submitEndPoint, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(form)
        })
        .then(function(res) { console.log(res) })
        .catch(function(res) { console.log(res) })



}