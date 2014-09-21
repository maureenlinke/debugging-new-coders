
L.mapbox.accessToken = 'pk.eyJ1IjoibWF1cmVlbmxpbmtlIiwiYSI6IkRKWWtHcHMifQ.QcjqScXhjOanYPFAvnLZaA';

  // set default view -- lat, long, zoom
var map = L.mapbox.map('map', 'examples.map-20v6611k').setView([42.5,-73.04], 14);

// map markerLayer from external geojson file
var markerLayer =L.mapbox.featureLayer()
    .loadURL('data/map.geojson')
    .addTo(map);

// zooms the map zoom to fit all markers in your geojson file in view
markerLayer.on('ready', function() {
    map.fitBounds(markerLayer.getBounds(), { padding: [36, 36] });
});