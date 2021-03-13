async function initMap() {
    const uluru = { lat: 42.64851988827961, lng: 23.40105191567047 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });

    const containers = await fetch_containers()

    for (let i = 0; i < containers.length; i++) {
      let position =  { lat: containers[i][0], lng: containers[i][1] };
      new google.maps.Marker({
      position,
      map,
    });   
    }
  }
   async function fetch_containers() {
    const response = await fetch('/js/containers.json')
    return response.json()
  }