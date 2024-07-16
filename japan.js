// 36.2048° N, 138.2529° E -> 36.2048, 138.2529
let map = L.map("map", {
  center: [36.2048, 138.2529],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
