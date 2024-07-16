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
  }).bindPopup('<iframe width="280" height="120" src="https://www.youtube.com/embed/x-htlH8Jnx0?si=mF3JkZv9ROEn8G3V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')
         .addTo(map);
