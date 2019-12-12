(function($) {

$.ajax({
  url: "https://hecate.hakai.org/sn/api/conditions.pl?station=Pruth",
  dataType: "json",
  success: function(url) {
    var location = url.observations[0].neighborhood;
    var temp = url.observations[0].metric.temp;
    var image = url.observations[0].metric.temp;
    var currently = 'cloudy';
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
  "dataType": "json",
  success: function(url) {
    var location = url.observations[0].neighborhood;
    var temp = url.observations[0].metric.temp;
    var image = url.observations[0].metric.temp;
    var currently = 'sunny';
    if (temp != null && image != ''){
      $("#conditionsQuadra").html('<a href="/quadra"><p class="currently">Quadra Island</p><p class="weatherdata"><span class="tempnum">' + temp + '</span><span class="deg">&deg; </span><img alt="' + currently + ' weather icon" width="32" src="/wp-content/themes/HakaiInstitute/images/weather/' + image + '.png"></p></a>');
      $("#conditionsQuadramain").html('<p class="weatherdata"><span class="tempnum">' + temp + '</span><span class="deg">&deg; </span><img alt="' + currently + ' weather icon" width="32" src="/wp-content/themes/HakaiInstitute/images/weather/' + image + '.png">');
      console.log(url);
    }else{
      console.log("Location: " + location + "\nTemp: " + temp + "\nimage src: " + image + ".gif")
    };
  }
});

}(jQuery));