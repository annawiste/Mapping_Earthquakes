// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);


// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [30.1900, -97.6687],
    [44.1644, -80.0370],
    [40.6418, -73.7810]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue", weight: 4, opacity:0.5, dashArray: "10 10"
  }).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_key
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);