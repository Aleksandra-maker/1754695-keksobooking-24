<<<<<<< Updated upstream
import {generateRandomOfferCard} from './layoutGenerator.js';
import {formDeactivate} from './formController.js';
import {formActivated} from './formController.js';

=======
import { formDeactivate } from './formController.js';
import { formActivate } from './formController.js';
import { map } from './mapController.js';

import { validateForm } from './formController.js';
>>>>>>> Stashed changes

const promo = document.querySelector('#map-canvas');
promo.appendChild(generateRandomOfferCard());

formDeactivate();

//map load


<<<<<<< Updated upstream
//formActivated();
=======
validateForm();
>>>>>>> Stashed changes
