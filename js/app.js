$.getJSON('http://data.seattle.gov/api/views/kzjm-xkqj/rows.json?jsonp=?&max_rows=25', function(results) {
  console.log(results.data);

  var map = L.map('map').setView([47.6097, -122.3331], 11);

  L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);

  $.each(results.data, function(index, value) {
    var date = new Date(value[10]*1000);
    var moment_date = moment(date).format("h:mm a, MMM D, YYYY")

    L.marker([value[11], value[12]]).addTo(map)
    .bindPopup('<h6>' + value[9] + '</h6>' + value[8] + '<br>' + moment_date );
  });

});


