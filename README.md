Seattle Fire Dept. 911 dispatches plotted on a map.
---------------------------------------------------

Part of [seattle.io](http://seattle.io)  

This demo uses data from [data.seattle.gov](https://data.seattle.gov).

The dataset is [Seattle Real Time Fire 911 Calls](https://data.seattle.gov/Public-Safety/Seattle-Real-Time-Fire-911-Calls/kzjm-xkqj) on data.seattle.gov.
The Seattle data site uses Socrata for their dataset management, and
they have a fairly easy to use api. Check out [the api docs](https://data.seattle.gov/api/docs).

**I used jquery to make a jsonp ajax request:**

`$.getJSON('http://data.seattle.gov/api/views/kzjm-xkqj/rows.json?jsonp=?&max_rows=10', function(results) { ... }`

Weird thing about the jsonp request: I couldn’t find anything in any
Socrata docs about jsonp, but found this [example repo on somebody’s
Github account](https://github.com/jasonhoekstra/socrata_jquery_test/blob/master/socrata_test.js). It works, so that’s cool.

The json gets plopped onto a map using [Leaflet](http://leaflet.cloudmade.com/index.html). Leaflet is crazy
easy to use. Especially since [they released version 0.4](http://leaflet.cloudmade.com/2012/07/30/leaflet-0-4-released.html). 

I used [moment.js](http://momentjs.com) to turn the UNIX timestamp of each dispatch into a
human readable date format.

The site is hosted using [Github Pages](http://pages.github.com) at [fire.seattle.io](http://fire.seattle.io).
