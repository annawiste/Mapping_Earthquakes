# Mapping Earthquakes

## Overview
The goal of this project was to create an interactive map which displays information on earthquakes which occured in the past 7 days. 

- Data for each earthquake occuring in the last 7 days is drawn from the 'Past 7 days' feed from https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
- The base map layers use mapbox tile layers (https://mapbox.com).
- Leaflet is used to map locations of tectonic plates, and each earthquake occurrence (https://leafletjs.com). 
- All earthquakes are included in one layer. A second layer includes only those classified as 'major', allowing the viewer to focus on these more significant events.
- Each earthquake occurrence includes a pop-up marker to give precise information about the magnitude and location of that specific earthquake.
- Locations of tectonic plates are included for reference, but can be toggled on and off. 
