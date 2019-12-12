(function($) {

$.ajax({
  url: "https://hecate.hakai.org/sn/api/conditions.pl?station=Pruth",
  dataType: "json",
  success: function(url) {
    var location = url.current_observation.observation_location.city;
    var temp = Math.round( url.current_observation.temp_c);
    var image = url.current_observation.icon;
    var currently = url.current_observation.weather;
    if (temp  != null && image != '' ){
      $("#conditionsHakai").html('<a href="/calvert"><p class="currently">Calvert Island</p><p class="weatherdata"><span class="tempnum">' + temp + '</span><span class="deg">&deg; </span><img alt="' + currently + ' weather icon" width="32" src="/wp-content/themes/HakaiInstitute/images/weather/' + image + '.png"></p></a>');
      $("#conditionsHakaimain").html('<p class="weatherdata"><span class="tempnum">' + temp + '</span><span class="deg">&deg; </span><img alt="' + currently + ' weather icon" width="32" src="/wp-content/themes/HakaiInstitute/images/weather/' + image + '.png">');
    }else{
       console.log("Location: " + location + "\nTemp: " + temp + "\nimage src: " + image + ".gif")
    };
  }
}); 

$.ajax({
  url: "https://hecate.hakai.org/sn/api/conditions.pl?station=Quadra",
  dataType: "json",
  success: function(url) {
    var location = url.current_observation.observation_location.city;
    var temp = Math.round( url.current_observation.temp_c);
    var image = url.current_observation.icon;
    var currently = url.current_observation.weather;
    if (temp != null && image != ''){
      $("#conditionsQuadra").html('<a href="/quadra"><p class="currently">Quadra Island</p><p class="weatherdata"><span class="tempnum">' + temp + '</span><span class="deg">&deg; </span><img alt="' + currently + ' weather icon" width="32" src="/wp-content/themes/HakaiInstitute/images/weather/' + image + '.png"></p></a>');
      $("#conditionsQuadramain").html('<p class="weatherdata"><span class="tempnum">' + temp + '</span><span class="deg">&deg; </span><img alt="' + currently + ' weather icon" width="32" src="/wp-content/themes/HakaiInstitute/images/weather/' + image + '.png">');
    }else{
      console.log("Location: " + location + "\nTemp: " + temp + "\nimage src: " + image + ".gif")
    };
  }
});

}(jQuery));