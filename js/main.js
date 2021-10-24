import {generateRandomOfferCard} from './layoutGenerator.js';
import {formDeactivate} from './formController.js';
import {formActivated} from './formController.js';


const promo = document.querySelector('#map-canvas');
promo.appendChild(generateRandomOfferCard());

formDeactivate();

//map load


//formActivated();
