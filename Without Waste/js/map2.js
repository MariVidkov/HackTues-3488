async function initMap() {
    const uluru = { lat: 42.64851988827961, lng: 23.40105191567047 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });

    const containers2 = await fetch_containers2()

    for (let i = 0; i < containers2.length; i++) {
      let position =  { lat: containers2[i][0], lng: containers2[i][1] };
      new google.maps.Marker({
      position,
      map,
    });   
    }
  }
   async function fetch_containers2() {
    const response = await fetch('/js/containers2.json')
    return response.json()
  }