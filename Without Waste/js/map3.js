async function initMap() {
    const uluru = { lat: 42.64851988827961, lng: 23.40105191567047 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });

    const containers3 = await fetch_containers3()

    for (let i = 0; i < containers3.length; i++) {
      let position =  { lat: containers3[i][0], lng: containers3[i][1] };
      new google.maps.Marker({
      position,
      map,
    });   
    }
  }
   async function fetch_containers3() {
    const response = await fetch('/js/containers3.json')
    return response.json()
  }