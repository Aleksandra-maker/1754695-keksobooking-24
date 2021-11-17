import {formDeactivate} from './formController.js';
import {formActivate} from './formController.js';
import {map} from './mapController.js';

import {validateForm} from './formController.js';


//const promo = document.querySelector('#map-canvas');
//promo.appendChild(generateOfferCard());

formDeactivate();

map.on('load', formActivate());

validateForm();
