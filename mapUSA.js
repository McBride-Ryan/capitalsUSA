
// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
[-86.300568, 32.377716 ],//BAMA
//[-134.420212, 58.301598],//alaska
[-112.096962, 33.448143 ],// Arizona
[-92.288986, 34.746613 ],//LR ARK
[-121.493629, 38.576668],//Sac Cali
[-121.493629, 38.576668 ],//Den Col
[-72.682198, 41.764046 ],//hart Conn
[-75.519722, 39.157307 ],//dover del
//[-157.857376, 21.307442,],//Hawaii
[-84.281296, 30.438118],//tall florida
[-84.388229, 33.749027 ],//atl ga
[-116.199722, 43.617775 ],//boi idaho
[-89.654961, 39.798363 ],//IL
[-86.162643, 39.768623,],//IND
[-93.603729, 41.591087],//IOWA
[-95.677956, 39.048191],//KS
[-84.875374, 38.186722],//KEN
[-91.187393, 30.457069],//LOUS
[-69.781693, 44.307167],//Maine
[-76.490936, 38.978764],//Maryland
[-71.063698, 42.358162],//MASS
[-84.555328, 42.733635],//MICH
[-93.102211, 44.955097],//MINN
[-90.182106, 32.303848],//MISS
[-92.172935, 38.579201],//MISO
[-112.018417, 46.585709],//MONT
[-96.699654, 40.808075],//NEB
[-119.766121, 39.163914],//NV
[-71.537994, 43.206898],//NEWH
[-74.769913, 40.220596],//NJ
[-105.939728, 35.68224],//NM
[-78.639099, 35.78043],//NC
[-100.783318, 46.82085],//ND
[-73.757874, 42.652843],//NY
[-82.999069, 39.961346],//OHIO
[-97.503342, 35.492207],//OK
[-123.030403, 44.938461],//ORE
[-76.883598, 40.264378],//PA
[-71.414963, 41.830914],//RI
[-81.033211, 34.000343],//SC
[-100.346405, 44.367031],//SD
[-86.784241, 36.16581],//TENN
[-97.740349, 30.27467],//TEX
[-111.888237, 40.777477],//UTAH
[-72.580536, 44.262436],//VT
[-77.43364, 37.538857],//VA
[-122.905014, 47.035805],//WA
[-81.612328, 38.336246],//WV
[-89.384445, 43.074684],//WIS
[-104.820236, 41.140259],//WY
];

// Access Token
mapboxgl.accessToken =
  'pk.eyJ1IjoicnlhbWNiMjAiLCJhIjoiY2tybTl4djhtMjR5czJucDYyNnJlN3BrZiJ9.xvLO_XmZtG_mLnCfYF6Vrg';
  //TOKEN GOES BELOW...


// The Map Object 
let map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/satellite-streets-v11',
center: [-95.695312, 39.056198], //Topeka, KS, USA
zoom: 3.32,
});

// Starts at Alabama
let marker = new mapboxgl.Marker().setLngLat([-86.300568, 32.377716]).addTo(map);

// Start at index 0, then move through the Array
let counter = 0;
function move() {
// Move the marker on the map every 1000ms. 
setTimeout(() => {
if (counter >= busStops.length) return;
marker.setLngLat(busStops[counter]);
counter++;
move();
}, 1000);
}
