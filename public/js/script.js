const socket = io();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit("send-location", { latitude, longitude });
    }, (error) => {
        console.error(error);
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("Location permission denied");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information unavailable");
                break;
            case error.TIMEOUT:
                alert("Location request timed out");
                break;
        }
    },
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 5000,
        })
}

const map = L.map("map").setView([0, 0], 16);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "OpenStreetMap"
}).addTo(map)

const markers = {}

socket.on("receive-location", (data) => {
    const { id, longitude, latitude } = data;
    map.setView([latitude, longitude], 16);

    if (markers[id]) {
        markers[id].setLatLng({ longitude, latitude })
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});


socket.on("user-disconnected",(id)=>{
      if(markers[id]){
          map.removeLayer(markers[id]);
          delete markers[id];
        }
})