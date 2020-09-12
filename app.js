//ini classes

const storage = new Storage();

const weatherLocation = storage.getLocationData();
console.log(weatherLocation);
const weather = new Weather(weatherLocation.city);
const ui = new UI();

// load weather on dom load
document.addEventListener("DOMContentLoaded", getWeather);

// get weather
function getWeather() {
  weather
    .getWeather()
    .then((data) => {
      ui.paint(data);
    })
    .catch((err) => console.log(err));
}

// listiner for change locaion
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  weather.changeLocation(city);
  getWeather();
  storage.setLocationData(city);
  $("#modelId").modal("hide");
});
