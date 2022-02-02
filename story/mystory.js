function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat:44.1023391, lng:-77.2674608}, //Coordinates of Prince edward county
  });
var myLatlng = new google.maps.LatLng(43.955105,-77.44561);
var mapOptions = {
  zoom: 10,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Norman Hardie Winery!"
});
// To add the marker to the map, call setMap();
marker.setMap(map);
