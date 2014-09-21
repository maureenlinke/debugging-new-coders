$legend =     $('#map-legend');

function showLegend() {

    var cols =   [ "#409e94","#7e7e7e" ];
    var txt =    [
    '40% or more',
    '39% or fewer' ];
    var htm = '<h5>Pct. of obese children</h5><ul>';
    var cls = 'dots';
    for ( var i = 0; i < cols.length; i++ ) {
        htm += '<li id="leg' + i + '" class="legends"><span class="' + cls + '" style="background:' + cols[i] + '"></span>' + txt[i] + '</li>';
    }
    htm += '</ul>';
    $legend.html(htm);

};

//access token
L.mapbox.accessToken = 'pk.eyJ1IjoibWF1cmVlbmxpbmtlIiwiYSI6IkRKWWtHcHMifQ.QcjqScXhjOanYPFAvnLZaA';

  // set default view -- lat, long, zoom
var map = L.mapbox.map('map', 'examples.map-20v6611k').setView([42.5,-73.04], 20);

// map markerLayer from external geojson file
var markerLayer = L.mapbox.featureLayer()
    .loadURL('data/map.geojson')
    .addTo(map);




 markerLayer.on('ready', function(layer) {
        //Customizing marker styles based on an attribute.

        this.eachLayer(function(marker) {
            if (marker.toGeoJSON().properties.pct_over_obese > 40) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#409e94',
                    'marker-size': 'medium'
                }));
            } else {
                marker.setIcon(L.mapbox.marker.icon({
                	'marker-color': '#7e7e7e',
                    'marker-size': 'medium'
                }));
            }
            // Bind a popup to each icon based on the same properties
            marker.bindPopup(marker.toGeoJSON().properties.school + '</br>'+
              marker.toGeoJSON().properties.pct_over_obese + '% ') ;
        });
        // // zooms the map zoom to fit all markers in your geojson file in view

         map.fitBounds(markerLayer.getBounds(), { padding: [5, 5] });
    })
    .addTo(map);
    showLegend();