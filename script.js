mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hcXVpbm1hIiwiYSI6ImNtaDljOW1qdzBsZDAyanB2NDBtampndjcifQ.2-MkwRU0D_epq19-VY6JKg';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/joaquinma/cmh9cdwg300pt01r57tm92rfl', // your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });