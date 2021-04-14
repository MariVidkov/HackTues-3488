let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: new google.maps.LatLng(42.64851988827961,  23.40105191567047),
    
    
  });

    const labels = "";
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
   


    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  const locations = [    
      {lat: 42.73359288008637, lng: 23.30205989005183}, 
      {lat: 42.70861467105155, lng: 23.28789712336639},
      {lat: 42.70156895706728, lng: 23.319202545888132},
      {lat: 42.70178530619981, lng: 23.304662715629682},
      {lat: 42.704603269137515,lng: 23.32297909623142},
      {lat: 42.72547719888158, lng: 23.26795135455025},
      {lat: 42.68985556487789, lng: 23.32648070552171},
      {lat: 42.69010594123358, lng: 23.32572567828318},
      {lat: 42.690862159894436,lng: 23.32253249380424},
      {lat: 42.71356534377683, lng: 23.292578327979875},
      {lat: 42.701665056098044,lng: 23.315820705276426},
      {lat: 42.690390882786495,lng: 23.325897339662482},
      {lat: 42.71479086305654, lng: 23.34424059491799},
      {lat: 42.701671159970225,lng: 23.31911671519762},
      {lat: 42.69105207753793,lng: 23.325811508973263},
      {lat: 42.701604018778475,lng: 23.31928837657516},
      {lat: 42.69551241424097,lng: 23.31345188968166}, 
      {lat: 42.695645086736725,lng: 23.317880641799015},
      {lat: 42.728720607491226,lng: 23.32374573572274},
      {lat: 42.69955862949281,lng: 23.311477783825342},
  ];
    


