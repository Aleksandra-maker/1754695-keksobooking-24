import {formDeactivate} from './formController.js';
import {formActivate} from './formController.js';
import {map} from './mapController.js';
import {validateForm} from './formController.js';


formDeactivate();

map.on('load', formActivate());

validateForm();
