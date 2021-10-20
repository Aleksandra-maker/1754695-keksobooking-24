import {generateRandomOfferCard} from './layoutGenerator.js';


const promo = document.querySelector('#map-canvas');
promo.appendChild(generateRandomOfferCard());
