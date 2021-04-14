

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

        downloadUrl('/markers.xml', function(data) {
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
                icon: '/images/container.png'
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
