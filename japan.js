// 36.2048° N, 138.2529° E -> 36.2048, 138.2529
let map = L.map("map", {
  center: [35.6586, 139.7454],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// tokyo tower: Coordinates: 35.6586° N, 139.7454° E -> 35.6586, 35.6586
L.circle([35.6586, 139.7454], {
         fillcolor: 'teal',
          color: 'blue',
          radius: 1000
}).addTo(map);
