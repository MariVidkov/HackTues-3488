

    var customLabel = {
      restaurant: {
        label: 'R'
      },
      bar: {
        label: 'B'
      }
    };

      function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10.5,
      center: {lat: 42.698334, lng: 23.319941 },
      });


      
      var infoWindow = new google.maps.InfoWindow;

        // Change this depending on the name of your PHP or XML file
        // downloadUrl('/markers.xml', function(data) {
        //   var xml = data.responseXML;
        //   var markers = xml.documentElement.getElementsByTagName('marker');
        //   Array.prototype.forEach.call(markers, function(markerElem) {
        //     var id = markerElem.getAttribute('id');
        //     var name = markerElem.getAttribute('name');
        //     var address = markerElem.getAttribute('address');
        //     var type = markerElem.getAttribute('type');
        //     var point = new google.maps.LatLng(
        //         parseFloat(markerElem.getAttribute('lat')),
        //         parseFloat(markerElem.getAttribute('lng')));

        //     var infowincontent = document.createElement('div');
        //     var strong = document.createElement('strong');
        //     strong.textContent = name
        //     infowincontent.appendChild(strong);
        //     infowincontent.appendChild(document.createElement('br'));

        //     var text = document.createElement('text');
        //     text.textContent = address
        //     infowincontent.appendChild(text);
        //     var icon = customLabel[type] || {};
        //     var marker = new google.maps.Marker({
        //       map: map,
        //       position: point,
        //       label: icon.label
        //     });
        //     marker.addListener('click', function() {
        //       infoWindow.setContent(infowincontent);
        //       infoWindow.open(map, marker);
        //     });
            
        //   });
        // });
        downloadUrl('/markers3.xml', function(data) {
          var infoWindow = new google.maps.InfoWindow;
          var xml = data.responseXML;
          var markersXml = xml.documentElement.getElementsByTagName('marker');
          const markersData = Array.from(markersXml, marker => {
            return {
                lat: parseFloat(marker.getAttribute('lat')),
                lng: parseFloat(marker.getAttribute('lng')),
                address: marker.getAttribute('name')
            }
        });
            const markers = markersData.map(marker => {
             var infoWindow = new google.maps.InfoWindow;  //const i led, arrow funkciite, prototype chain, funkciqta map
             var infowincontent = document.createElement('div');
            var strong = document.createElement('strong');
            strong.textContent = marker.address;
             infowincontent.appendChild(strong);
             infowincontent.appendChild(document.createElement('br'));

            const googleMarker = new google.maps.Marker({
                position: {
                  lat: marker.lat,
                   
                  lng: marker.lng
                },
                icon: '/images/secondhandcontainer.png'
            })
            googleMarker.addListener('click', function() {
                infoWindow.setContent(infowincontent);
                infoWindow.open(map, googleMarker);
           });
           return googleMarker
        });
          new MarkerClusterer(map, markers, {
            imagePath:
              "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
          });
        });


      }



    function downloadUrl(url, callback) {
      var request = window.ActiveXObject ?
          new ActiveXObject('Microsoft.XMLHTTP') :  
          new XMLHttpRequest;

      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          request.onreadystatechange = doNothing;
          callback(request, request.status);
        }
      };

      request.open('GET', url, true);
      request.send(null);
    }

    function doNothing() {}
