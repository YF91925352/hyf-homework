/* 1.Display the data */
const input = document.querySelector("#city");
const btn = document.querySelector("#cityBtn");
const ul = document.querySelector(".cityWeather ul");
const img = document.querySelector(".cityWeather ul img");
const li = document.getElementsByTagName("li");
const box = document.getElementsByTagName("div");
const map = L.map("map");
function showMap(lat, lon) {
  map.setView([lat, lon], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  L.marker([lat, lon]).addTo(map);
}

btn.addEventListener("click", () => {
  const city = input.value;
  if (city === "") {
    alert("Input a city name");
  } else {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d3319d93954430ff831dbf513eb9d318`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        img.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        const showData = [
          `The city:${data.name}`,
          `Temperature:${(data.main.temp - 273.15).toFixed(2)} °C`,
          `Wind speed:${data.wind.speed}m/s`,
          `How cloudy it is:${data.weather[0].description}`,
          `sunrise:${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`,
          `sunset:${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`,
        ];
        console.log(showData);
        for (let i = 0; i < showData.length; i++) {
          li[i].innerHTML = showData[i];
        }
        box[2].style.display = "block";
        showMap(data.coord.lat, data.coord.lon);
      });
  }
});

/*2.Use my current position optional */
const btn2 = document.querySelector("#locationBtn");
const ul2 = document.querySelector(".currentLocation ul");
const img2 = document.querySelector(".currentLocation ul img");
let latitude;
let longitude;
function success(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  const newURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d3319d93954430ff831dbf513eb9d318`;
  fetch(newURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      img2.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const currentData = [
        `The city:${data.name}`,
        `Temperature:${(data.main.temp - 273.15).toFixed(2)} °C`,
        `Wind speed:${data.wind.speed}m/s`,
        `How cloudy it is:${data.weather[0].description}`,
        `sunrise:${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`,
        `sunset:${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`,
      ];
      console.log(currentData);
      for (let i = 0; i < currentData.length; i++) {
        li[i + 6].innerHTML = currentData[i];
      }
      box[2].style.display = "block";
      showMap(latitude, longitude);
    });
}
function error() {
  alert("Unable to obtain your location");
}
function getLocation() {
  if (!navigator.geolocation) {
    alert("Your browser does not support geolocation");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
btn2.addEventListener("click", getLocation);
/* Save my location optional */
const btn3 = document.querySelector("#saveBtn");
btn3.addEventListener("click", () => {
  localStorage.setItem("current", JSON.stringify([latitude, longitude]));
});
const current = localStorage.getItem("current");
console.log(current);
if (current !== null) {
  const [latitude, longitude] = JSON.parse(current);
  success({ coords: { latitude, longitude } });
}
