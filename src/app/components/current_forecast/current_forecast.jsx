import React, { useState, useEffect } from "react";
import icon_location from "../../../assets/icon_location.svg";
import icon_bogota from "../../../assets/icon_bogota.png";
import container_forecast from "../../../assets/forecast_container.png";
import icon_cloudy from "../../../assets/cloudy-day.png";
import icon_clear from "../../../assets/clear.svg";
import icon_rain from "../../../assets/rain.svg";

function CurrentForecast() {
  const [temp, setTemp] = useState(null);
  const [main, setMain] = useState([]);
  useEffect(() => {
    DataAjax();
  }, []);
  const DataAjax = async () => {
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=3176402fbb821834afb3bf6529df583e";
    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    api.onreadystatechange = function () {
      if (this.status === 200 && this.readyState === 4) {
        const dataJSON = JSON.parse(this.responseText);
        let dataTemp = dataJSON.main.temp - 273.15;
        let dataWeather = dataJSON.weather;
        const dataWeatherMain = dataWeather;
        const dataMainTemp = dataTemp.toFixed(0);
        setTemp(dataMainTemp);
        setMain(dataWeatherMain);
      }
    };
  };
  return (
    <div className="container_current_forecast">
      <div className="container_images">
        <img
          src={icon_location}
          className="icon_location"
          alt="icon_location"
        />
        <span className="text_city">Bogotá</span>
        <img src={icon_bogota} className="icon_bogota" alt="icon_bogota" />
      </div>
      <div>
        <span className="text_number">{temp}</span>
        <span className="text_temperature">°</span>
        <span className="text_celsius">C</span>
        <img
          src={container_forecast}
          className="img_container_forecast"
          alt="img_container_forecast"
        />
        <img
          src={
            main.reduce((accumulator, b) => b.main, 0) === "Clouds"
              ? icon_cloudy
              : main.reduce((accumulator, b) => b.main, 0) === "Clear"
              ? icon_clear
              : icon_rain
          }
          className="img_container_weather"
          alt="img_weather"
        />
        <span className="text_weather">
          {main.reduce((accumulator, b) => b.main, 0) === "Clouds"
            ? "Cloudy"
            : main.reduce((accumulator, b) => b.main, 0) === "Clear"
            ? "Sunny"
            : "Rainy"}
        </span>
      </div>
    </div>
  );
}

export default CurrentForecast;
