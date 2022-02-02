function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat:44.1023391, lng:-77.2674608}, //Coordinates of Prince edward county
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
    "D:\Documents\Danielles school notes\Sem 2\GEom99\pl1\story\mapbox-marker-icon-20px-pink.png",
  });
}
const locations = [
  { lat: 43.955105, lng: -77.44561 },
  { lat: 43.970966, lng: -77.462997 },
  { lat: 43.974033, lng: -77.526451 },
  { lat: 44.014561, lng: -76.971725 },
  { lat: 44.015503, lng: -77.145782 },
  { lat: 43.9981405274403, lng: -77.3987089729686 },
  { lat: 44.0095358480825, lng: -77.7426057658833 },
  { lat: 43.9561822006949, lng: -77.5270646400663 },
  { lat: 43.9107250603858, lng: -77.2288777662077 }
];