$.getJSON('http://data.seattle.gov/api/views/kzjm-xkqj/rows.json?jsonp=?&max_rows=10', function(results) {
  console.log(results.data);
  
  var map = L.map('map').setView([47.6097, -122.3331], 11);
  
  L.tileLayer('http://{s}.tile.cloudmade.com/5aabd2e38b214356942b011b42b77394/997/256/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
  }).addTo(map);
  
  $.each(results.data, function(index, value) {
    L.marker([value[11], value[12]]).addTo(map)
  });
  
  $('.meta-description').text( results.meta.view.description );
});


