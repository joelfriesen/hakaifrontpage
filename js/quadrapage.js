
(function ($) {
        document.addEventListener("DOMContentLoaded", function(event) { 
          // Using leaflet.js to pan and zoom a big image.
          // See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html

          // create the slippy map
          var map = L.map('image-map', {
            minZoom: 3,
            maxZoom: 7,
            center: [-30, 90],
            zoom: 4,
            crs: L.CRS.Simple
          });

          //Dock
          L.marker([-44, 95]).addTo(map)
              .bindPopup(
                '<img class="pophead" src="/wp-content/uploads/coast1.jpg"><h3>Building A</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
              )
          L.marker([-46, 75]).addTo(map)
              .bindPopup(
                '<img class="pophead" src="/wp-content/uploads/coast2.jpg"><h3>Building B</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
              )
          L.marker([-43, 85]).addTo(map)
              .bindPopup(
                '<img class="pophead" src="/wp-content/uploads/coast3.jpg"><h3>Building C</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
              )          
          L.marker([-49, 75]).addTo(map)
              .bindPopup(
                '<img class="pophead" src="/wp-content/uploads/coast4.jpg"><h3>Building D</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
              )
          L.marker([-39, 65]).addTo(map)
              .bindPopup(
                '<img class="pophead" src="/wp-content/uploads/coast5.jpg"><h3>Building E</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
              )
          L.marker([-42, 75]).addTo(map)
              .bindPopup(
                '<img class="pophead" src="/wp-content/uploads/coast6.jpg"><h3>Building F</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
              )
          L.tileLayer('/wp-content/themes/HakaiInstitute/images/aerial_quadra_tiles/{z}/{x}/{y}.png', {
                noWrap: true,
              }).addTo(map)

         

          // dimensions of the image
          var w = 11000,
              h = 7500


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