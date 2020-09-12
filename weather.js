class Weather {
  constructor(city) {
    this.apiKey = "caa221e3c2f4db09609092dd4fb0f79d";
    this.city = city;
  }

  // fetch weather details from api

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  //   change Location
  changeLocation(city) {
    this.city = city;
  }
}
