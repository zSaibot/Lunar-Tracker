const lat = 56.68573301778158;
const lng = -4.177401596726793;
const end = 2021-05-01;

fetch(`https://api.stormglass.io/v2/astronomy/point?lat=${lat}&lng=${lng}&end=${end}`, {
  headers: {
    'Authorization': '137a8eec-95b0-11eb-a551-0242ac130002-137a8fb4-95b0-11eb-a551-0242ac130002'
  }
}).then((response) => response.json())
.then((jsonData) => {
    
  console.log(jsonData.data["moonFraction"]); //fetching json data
});

