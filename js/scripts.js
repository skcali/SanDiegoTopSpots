$(document).ready(function () {
  $.getJSON('json/topspots.json', function(data) {
    console.log(data);
    $.each(data, function(i, f) {
      var tblRow = "<tr>" + "<td>" + f.name + "</td>" +
       "<td>" + f.description + "</td>" + "<td>" + "<button data-lat='" + f.location[0] + "' data-lon='" + f.location[1] + "' class='mapsLink'>Click to open in google Maps</button>" + "</td>" + "</tr>";
       $(tblRow).appendTo("#topSpotTable");
       $(".mapsLink").click( function () {
         var lat = $(this).data('lat');
         var lon = $(this).data('lon');

         window.open("https://www.google.com/maps/preview/@" + lat + "," + lon + ",12z");
       });
     });
  });
});
