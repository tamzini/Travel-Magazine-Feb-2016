

var myCenter=new google.maps.LatLng(51.508742,-0.120850);
var myCenter2=new google.maps.LatLng(51.3678072,-0.15228);
var myCenter3=new google.maps.LatLng(51.5548482,-0.3337245);
var marker;
var marker2;
var marker3;

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:8,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var mapProp2 = {
  center:myCenter2,
  zoom:8,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  }; 

  var mapProp3 = {
  center:myCenter2,
  zoom:8,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };   

var map=new google.maps.Map(document.getElementById("myMap"),mapProp,mapProp2,mapProp3);

var marker=new google.maps.Marker({
  position:myCenter,
   icon:'images/nero.png',
  animation:google.maps.Animation.DROP
  });

marker.setMap(map);

var marker2=new google.maps.Marker({
  position:myCenter2,
   icon:'images/nero.png',
  animation:google.maps.Animation.BOUNCE
  });

marker2.setMap(map);

var marker3=new google.maps.Marker({
  position:myCenter3,
   icon:'images/nero.png',
  animation:google.maps.Animation.BOUNCE
  });

marker3.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"<span style = 'color:red;'>Head office!<br> 020123896723 </span><br> <a href='https://google.com' target='_blank'>www.google.com</a>"
  });

infowindow.open(map,marker);

}

google.maps.event.addDomListener(window, 'load', initialize);
