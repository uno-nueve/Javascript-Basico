function initMap() {
    const uluru = {
        lat: -25.344,
        lng: 131.031
    }

    const posicion_1 = new google.maps.LatLng(-25.695, -54.437)

    const posicion_2 = new google.maps.LatLng(63.405, -19.070)

    const posicion_3 = new google.maps.LatLng(-18.920, 44.794)

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: posicion_1
    })

    // Marcador 1: 
    const marker_1 = new google.maps.Marker({
        position: posicion_1,
        map: map
    })

    // Marcador 2: 
    const marker_2 = new google.maps.Marker({
        position: posicion_2,
        map: map
    })

    // Marcador 3: 
    const marker_3 = new google.maps.Marker({
        position: posicion_3,
        map: map,
        title: 'H'
    })


}