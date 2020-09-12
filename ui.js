class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");

    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  paint(data) {
    this.location.textContent = data.name;
    this.desc.textContent = data.weather[0].description;
    this.string.textContent = data.main.temp;
    console.log(data.main.feels_like);

    this.icon.setAttribute("src", data.weather[0].icon);

    this.humidity.textContent = `humidity ${data.main.humidity}`;
    this.feelsLike.textContent = `feel Like ${data.main.feels_like}`;
    this.wind.textContent = `wind speed ${data.wind.speed}`;
  }
}
