function initialise() {
    myLatlng = new google.maps.LatLng(54.559323,-3.321304);
    mapOptions = {
        zoom: 5,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    geocoder = new google.maps.Geocoder();
    infoWindow = new google.maps.InfoWindow;
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
     
    xmlUrl = "inc/markers.xml";
     
    loadMarkers();
     
}
 
google.maps.event.addDomListener(window, 'load', initialise);   