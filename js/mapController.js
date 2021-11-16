//import { formActivate } from './formController.js';
import {generateOfferCard} from './layoutGenerator.js';
//import {formActivate} from './formController.js';

const defaultNumberOfPinsToDisplay = 10;
const decimalPlaces = 5;
const similarEndPoint = 'https://24.javascript.pages.academy/keksobooking/data';
const mainPinIconImage = '/img/main-pin.svg';
const pinIcon = '/img/pin.svg';
const defaultLat = 35.68334;
const defaultLng = 139.78199;

export const map = L.map('map-canvas')
  .setView({
    lat: defaultLat,
    lng: defaultLng,
  }, 10);
//map.on('load', formActivated());

const tileLayer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


const mainPinIcon = L.icon({
  //iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconUrl: mainPinIconImage,
  iconSize: [52, 52],
  iconAnchor: [26, 52],

});

const mainPinMarker = L.marker(
  {
    lat: defaultLat,
    lng: defaultLng,
  },
  {
    icon: mainPinIcon,
    draggable: true,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const coordsObject = document.querySelector('#address');

  const coords = evt.target.getLatLng();

  coordsObject.value = `${coords['lat'].toFixed(decimalPlaces)  } ${  coords['lng'].toFixed(decimalPlaces)}`;

});


function drawPins(posts, numberOfPinsToDisplay) {
  let counter = 0;
  for (const post of posts) {
    const normalPinIcon = L.icon({
      iconUrl: pinIcon,
      iconSize: [52, 52],
      iconAnchor: [26, 52],

    });
    const normalPinMarker = L.marker(
      {
        lat: post['location']['lat'],
        lng: post['location']['lng'],
      },
      {
        icon: normalPinIcon,
        draggable: false,
      },
    );

    normalPinMarker.bindPopup(generateOfferCard(post));
    normalPinMarker.addTo(map);
    counter += 1;
    if (counter === numberOfPinsToDisplay) {
      return;
    }
  }
}

export function fetchSimilar() {
  fetch(similarEndPoint)
    .then((response) => response.json())
    .then(((posts) => drawPins(posts, defaultNumberOfPinsToDisplay)));

}


//tileLayer.on("load",function()
//{
//  formActivate();
//  console.log('111')
//});
