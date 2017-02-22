//variables to change based on user input (may also look into calling a thousand rows or something and putting them in localStorage and then filtering before populating map)

var numPinsLimit = 25;

//AJAX call to API
$.ajax({
  url: 'https://data.seattle.gov/resource/grwu-wqtk.json?$limit=' + numPinsLimit + '&$order=datetime%20DESC&$where=datetime>"2014-01-01"',
  method: 'GET',
  dataType: 'json',
  // data: {
  //   'codedescription': 'EMBEZZLEMENT',
  //   '$$app_token': app_token
  // },
  success: function( data, status, jqxhr ){
    console.log(Object.values(data));
    var map = L.map('map').setView([47.6097, -122.3331], 11);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

    $.each(data, function() {
      if (this.latitude && this.longitude) {
        var date = new Date(this['datetime']);
        var moment_date = moment(date).format('h:mm a, MMM D, YYYY');
        L.marker([this['latitude'], this['longitude']]).addTo(map)
        .bindPopup('<h6>' + this['type'] + '</h6>' + this['address'] + '<br>' + moment_date );
      }
    });
  },
  error: function( jqxhr, status, error ){
    console.log( 'Something went wrong!' );
  }
});
