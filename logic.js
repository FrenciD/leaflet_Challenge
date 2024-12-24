// Create tile layers of map
let greyscale = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// URL
const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

// geoJSON request
d3.json(url).then(function (data) {
    console.log(data);
    
    createFeatures(data.features);
});

//  marker size
function markerSize(magnitude) {
    return magnitude * 55000;
};

//  marker color by depth
function chooseColor(depth) {
    if (depth < 10) return "#64B5F6";
    else if (depth < 30) return "#43A047";
    else if (depth < 50) return "#FFF176";
    else if (depth < 70) return "#FB8C00";
    else if (depth < 90) return "#B71C1C";
    else return "#FF3300";