
(function ($) {
        document.addEventListener("DOMContentLoaded", function(event) { 
          // Using leaflet.js to pan and zoom a big image.
          // See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html

          // create the slippy map
          var map = L.map('image-map', {
            minZoom: 4,
            maxZoom: 8,
            center: [-15.5, 70],
            zoom: 5,
            crs: L.CRS.Simple
          });

          //Dock
          L.marker([-16.9, 70]).addTo(map)
              .bindPopup(
                '<img class="pophead" src="/wp-content/uploads/coast1.jpg"><h3>Hakai Magazine Offices</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
              )

          //Lab
          //Dock
          L.marker([-15.5, 70]).addTo(map)
              .bindPopup(
                '<img class="pophead" src="/wp-content/uploads/coast3.jpg"><h3>Hakai Geotech Office</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
              )

          //Lab
          L.marker([-13.6, 67.5]).addTo(map)
              .bindPopup(
                '<img class="pophead" src="/wp-content/uploads/coast2.jpg"><h3>Hakai IT and Lab</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia tortor quis nisi scelerisque, mollis egestas nulla lobortis. Proin orci lectus, tempus scelerisque feugiat venenatis, dapibus vehicula lacus. Nunc sagittis tincidunt auctor. Nulla nec est vel erat mollis fermentum.</p>'
              )

          L.tileLayer('/wp-content/themes/HakaiInstitute/images/victiles/{z}/{x}/{y}.png', {
                noWrap: true,
              }).addTo(map)

         

          // dimensions of the image
          var w = 16000,
              h = 4000


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