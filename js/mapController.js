import { generateOfferCard } from './layoutGenerator.js';

const decimalPlaces = 5;

const mainPinIconImage = 'img/main-pin.svg';
const pinIcon = 'img/pin.svg';
const defaultLat = 35.68334;
const defaultLng = 139.78199;

export const map = L.map('map-canvas')
  .setView({
    lat: defaultLat,
    lng: defaultLng,
  }, 10);
//map.on('load', formActivated());

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  //iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconUrl: mainPinIconImage,
  iconSize: [52, 52],
  iconAnchor: [26, 52],

});

const mainPinMarker = L.marker({
  lat: defaultLat,
  lng: defaultLng,
}, {
  icon: mainPinIcon,
  draggable: true,
} );

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const coordsObject = document.querySelector('#address');
  const coords = evt.target.getLatLng();
  coordsObject.value = `${coords['lat'].toFixed(decimalPlaces)  } ${  coords['lng'].toFixed(decimalPlaces)}`;

});

export function drawPins(posts) {

  map.eachLayer((layer) => {
    if (layer['_latlng'] !== undefined)
    {layer.remove();}
  });
  mainPinMarker.addTo(map);


  for (const post of posts) {
    const normalPinIcon = L.icon({
      iconUrl: pinIcon,
      iconSize: [40, 40],
      iconAnchor: [26, 52],

    });
    const normalPinMarker = L.marker({
      lat: post['location']['lat'],
      lng: post['location']['lng'],
    }, {
      icon: normalPinIcon,
      draggable: false,
    } );
    normalPinMarker.bindPopup(generateOfferCard(post));
    normalPinMarker.addTo(map);

  }
}
