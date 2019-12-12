(function($) {

  var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
  var method = 'GET';
  var app_id = 'GCNjAG44';
  var consumer_key = 'dj0yJmk9bUJqRnREWjdJYTJ1JmQ9WVdrOVIwTk9ha0ZITkRRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTc0';
  var consumer_secret = 'fbe30e4465a2467d2270b4716ee4ede384a35e2d';
  var concat = '&';
  var query = {'location': 'Comox', 'format': 'json', 'u':'c'};
  var query2 = {'location': 'Victoria', 'format': 'json', 'u':'c'};
  var oauth = {
      'oauth_consumer_key': consumer_key,
      'oauth_nonce': Math.random().toString(36).substring(2),
      'oauth_signature_method': 'HMAC-SHA1',
      'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
      'oauth_version': '1.0'
  };

  var merged = {}; 
  $.extend(merged, query, oauth);
  // Note the sorting here is required
  var merged_arr = Object.keys(merged).sort().map(function(k) {
    return [k + '=' + encodeURIComponent(merged[k])];
  });
  var signature_base_str = method
    + concat + encodeURIComponent(url)
    + concat + encodeURIComponent(merged_arr.join(concat));

  var composite_key = encodeURIComponent(consumer_secret) + concat;
  var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
  var signature = hash.toString(CryptoJS.enc.Base64);

  oauth['oauth_signature'] = signature;
  var auth_header = 'OAuth ' + Object.keys(oauth).map(function(k) {
    return [k + '="' + oauth[k] + '"'];
  }).join(',');



  $.ajax({
    url: url + '?' + $.param(query),
    headers: {
      'Authorization': auth_header,
      'X-Yahoo-App-Id': app_id 
    },
    method: 'GET',
    success: function(data){
      var location = data.current_observation.condition.code;
      var temp = data.current_observation.condition.temperature;
      var image = data.current_observation.condition.code;
      var currently = data.current_observation.condition.text;
      if (temp != null && image != ''){
        $("#conditionsQuadra").html('<a href="/quadra"><p class="currently">Quadra Island</p><p class="weatherdata"><span class="tempnum">' + temp + '</span><span class="deg">&deg; </span><img alt="' + currently + ' weather icon" width="32" src="/wp-content/themes/HakaiInstitute/images/weather/' + image + '.png"></p></a>');
        }else{};
    }
  });

  var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
  var method = 'GET';
  var app_id = 'GCNjAG44';
  var consumer_key = 'dj0yJmk9bUJqRnREWjdJYTJ1JmQ9WVdrOVIwTk9ha0ZITkRRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTc0';
  var consumer_secret = 'fbe30e4465a2467d2270b4716ee4ede384a35e2d';
  var concat = '&';
  var query = {'location': 'Prince Rupert', 'format': 'json', 'u':'c'};
  var oauth = {
      'oauth_consumer_key': consumer_key,
      'oauth_nonce': Math.random().toString(36).substring(2),
      'oauth_signature_method': 'HMAC-SHA1',
      'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
      'oauth_version': '1.0'
  };

  var merged = {}; 
  $.extend(merged, query, oauth);
  // Note the sorting here is required
  var merged_arr = Object.keys(merged).sort().map(function(k) {
    return [k + '=' + encodeURIComponent(merged[k])];
  });
  var signature_base_str = method
    + concat + encodeURIComponent(url)
    + concat + encodeURIComponent(merged_arr.join(concat));

  var composite_key = encodeURIComponent(consumer_secret) + concat;
  var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
  var signature = hash.toString(CryptoJS.enc.Base64);

  oauth['oauth_signature'] = signature;
  var auth_header = 'OAuth ' + Object.keys(oauth).map(function(k) {
    return [k + '="' + oauth[k] + '"'];
  }).join(',');



  $.ajax({
    url: url + '?' + $.param(query),
    headers: {
      'Authorization': auth_header,
      'X-Yahoo-App-Id': app_id 
    },
    method: 'GET',
    success: function(data){
      var location = data.current_observation.condition.code;
      var temp = data.current_observation.condition.temperature;
      var image = data.current_observation.condition.code;
      var currently = data.current_observation.condition.text;
      if (temp != null && image != ''){
        $("#conditionsHakai").html('<a href="/calvert"><p class="currently">Calvert Island</p><p class="weatherdata"><span class="tempnum">' + temp + '</span><span class="deg">&deg; </span><img alt="' + currently + ' weather icon" width="32" src="/wp-content/themes/HakaiInstitute/images/weather/' + image + '.png"></p></a>');
      }else{};
    }
  });

}(jQuery));