import {generateOfferCard} from './layoutGenerator.js';
import {formDeactivate} from './formController.js';
import {formActivated} from './formController.js';

import {validateForm} from './formController.js';


const promo = document.querySelector('#map-canvas');
promo.appendChild(generateOfferCard());

formDeactivate();

//map load


formActivated('35.6895000', '139.6917100');
validateForm();
