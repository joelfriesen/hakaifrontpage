(function($) {

  var station = ["calvertreference","calvertlookout","buxton","quadra","koeye","ethel","pruth"];
  station.forEach (function(element) {
    $.ajax({
      url: "https://hecate.hakai.org/sn/api/conditions.pl?station=" + element,
      dataType: "json",
      success: function(url) {
        var location = url.current_observation.observation_location.city;
        var temp = Math.round( url.current_observation.temp_c);
        var tempnum = Math.round( url.current_observation.temp_c);
        var image = url.current_observation.icon;
        var currently = url.current_observation.weather;
        var humidity = url.current_observation.relative_humidity;
        var winddir = url.current_observation.wind_dir;
        var windkph = url.current_observation.wind_kph;
        var windgust = url.current_observation.wind_gust_kph;
        var pressure = url.current_observation.pressure_mb;
        var dewpoint = url.current_observation.dewpoint_c;
        var windchill = url.current_observation.windchill_c;
        var feelslike = url.current_observation.feelslike_c;
        var visibility = url.current_observation.visibility_km;
        var uv = url.current_observation.UV;
        var raintoday = url.current_observation.precip_today_metric; 
        var tempstring = url.current_observation.temperature_string;
        if (tempstring && image !== null)    {//hide the box if there's more than a few missing pieces.
          if (location !='')    {$("." + element + " .location").html( location );};
          if (tempnum !=null)   {$("." + element + " .tempnum").html( temp + "<span class='smallc'>&deg;</span>");};  
          if (temp !=null)      {$("." + element + " .temperature").html( temp + "<span class='smallc'>&deg;</span><span class='temperature-feels'> Feels like: " + feelslike + "&deg;<br />Windchill: " + windchill  + "&deg;</span>");};
          if (image !='')       {$("." + element + " .image").html( "<img src='/wp-content/themes/HakaiInstitute/images/weather/white/" + image + ".png' />");};
          if (currently !='')   {$("." + element + " .weather-desc .currently").html( "Currently: " + currently); };
          if (visibility !='')  {$("." + element + " .weather-desc .visibility").html("| Visibility: " + visibility + "km");};
          if (raintoday !='')   {$("." + element + " .weather-desc .raintoday").html("| Rain today: "+ raintoday +"mm" );};
          if (uv !='')          {$("." + element + " .weather-desc .uv").html("| UV index: "+ uv );};
          if (pressure !='')    {$("." + element + " span.pressure").html( "Pressure: " + pressure +" Mb" );};
          if (humidity !='')    {$("." + element + " span.humidity").html( "Humidity: " + humidity);};
          if (windkph !='')     {$("." + element + " span.windspeed").html( "Wind: " + windkph + " kph, " +winddir );};
        } 
      }
    }); 
  });

}(jQuery));