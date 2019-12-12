
(function ($) {
        document.addEventListener("DOMContentLoaded", function(event) { 
          // Using leaflet.js to pan and zoom a big image.
          // See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html

          // create the slippy map
          var map = L.map('image-map', {
            minZoom: 5,
            maxZoom: 7,
            center: [-22, 65],
            zoom: 5,
            crs: L.CRS.Simple
          });

          // L.marker([-24, 45]).addTo(map)
          //     .bindPopup(
          //       '<img class="pophead" src="/wp-content/uploads/coast1.jpg"><h3>Building A</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
          //     )
          // L.marker([-26, 55]).addTo(map)
          //     .bindPopup(
          //       '<img class="pophead" src="/wp-content/uploads/coast2.jpg"><h3>Building B</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
          //     )
          // L.marker([-23, 50]).addTo(map)
          //     .bindPopup(
          //       '<img class="pophead" src="/wp-content/uploads/coast3.jpg"><h3>Building C</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
          //     )          
          // L.marker([-29, 52]).addTo(map)
          //     .bindPopup(
          //       '<img class="pophead" src="/wp-content/uploads/coast4.jpg"><h3>Building D</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
          //     )
          // L.marker([-30, 47]).addTo(map)
          //     .bindPopup(
          //       '<img class="pophead" src="/wp-content/uploads/coast5.jpg"><h3>Building E</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
          //     )
          L.marker([-22, 58]).addTo(map)
              .bindPopup(
                '<img class="pophead" src="/wp-content/uploads/Hakai-Node-9260-520x347.jpg"><h3>Building A</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
              )

          L.tileLayer('/wp-content/themes/HakaiInstitute/images/ubc_tiles/{z}/{x}/{y}.png', {
                noWrap: true,

              }).addTo(map)

         

          // dimensions of the image
          var w = 8500,
              h = 3400


          // calculate the edges of the image, in coordinate space
          var southWest = map.unproject([0, h], map.getMaxZoom()-1);
          var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
          var bounds = L.latLngBounds(southWest, northEast);

          map.setMaxBounds(bounds);
          map.on('drag', function() {
            map.panInsideBounds(bounds, { animate: false });
          });


          // add the image overlay, 
          // so that it covers the entire map
          L.imageOverlay(url, bounds).addTo(map);

          // tell leaflet that the map is exactly as big as the image
          map.setMaxBounds(bounds);
        });
}) (jQuery);