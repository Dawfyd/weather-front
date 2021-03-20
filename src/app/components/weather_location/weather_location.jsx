import React, { useState, useEffect } from "react";
import icon_cloudy from "../../../assets/cloudy.svg";
import icon_clear from "../../../assets/clear.svg";
import icon_rain from "../../../assets/rain.svg";
import draw_city from "../../../assets/draw_city.svg";

function WeatherLocation() {
  const [tempParis, setTempParis] = useState(null);
  const [humidityParis, setHumidityParis] = useState(null);
  const [mainParis, setMainParis] = useState([]);
  const [mainWindParis, setMainWindParis] = useState([]);
  const [tempLyon, setTempLyon] = useState(null);
  const [humidityLyon, setHumidityLyon] = useState(null);
  const [mainLyon, setMainLyon] = useState([]);
  const [mainWindLyon, setMainWindLyon] = useState([]);
  useEffect(() => {
    DataAjaxParis();
    DataAjaxLyon();
  }, []);
  const DataAjaxParis = async () => {
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=3176402fbb821834afb3bf6529df583e";
    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    api.onreadystatechange = function () {
      if (this.status === 200 && this.readyState === 4) {
        const dataJSON = JSON.parse(this.responseText);
        let dataTempParis = dataJSON.main.temp - 273.15;
        let dataHumidityParis = dataJSON.main.humidity;
        let dataWeatherParis = dataJSON.weather;
        let dataWindParis = dataJSON.wind;
        const dataWeatherMainParis = dataWeatherParis;
        const dataWindMainParis = dataWindParis;
        const dataMainTempParis = dataTempParis.toFixed(0);
        const dataMainHumidityParis = dataHumidityParis.toFixed(0);
        setTempParis(dataMainTempParis);
        setHumidityParis(dataMainHumidityParis);
        setMainParis(dataWeatherMainParis);
        setMainWindParis(dataWindMainParis);
        console.log(dataMainTempParis);
      }
    };
  };
  const DataAjaxLyon = async () => {
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=lyon&appid=3176402fbb821834afb3bf6529df583e";
    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    api.onreadystatechange = function () {
      if (this.status === 200 && this.readyState === 4) {
        const dataJSON = JSON.parse(this.responseText);
        let dataTempLyon = dataJSON.main.temp - 273.15;
        let dataHumidityLyon = dataJSON.main.humidity;
        let dataWeatherLyon = dataJSON.weather;
        let dataWindLyon = dataJSON.wind;
        const dataWeatherMainLyon = dataWeatherLyon;
        const dataWindMainLyon = dataWindLyon;
        const dataMainTempLyon = dataTempLyon.toFixed(0);
        const dataMainHumidityLyon = dataHumidityLyon.toFixed(0);
        setTempLyon(dataMainTempLyon);
        setHumidityLyon(dataMainHumidityLyon);
        setMainLyon(dataWeatherMainLyon);
        setMainWindLyon(dataWindMainLyon);
        console.log(dataJSON);
      }
    };
  };
  return (
    <div className="container_weather_location">
      <div className="container_weather_city">
        <div className="items_flex_city">
          <div className="container_flex_city">
            <div className="icon_weather_city">
              <img
                src={
                  mainLyon.reduce((accumulator, b) => b.main, 0) === "Clouds"
                    ? icon_cloudy
                    : mainLyon.reduce((accumulator, b) => b.main, 0) === "Clear"
                    ? icon_clear
                    : icon_rain
                }
                className="img_weather_city"
                alt="icon_weather"
              />
            </div>

            <div className="items_weather_city">
              <span className="text_number_location">{tempLyon}</span>
              <span className="text_temperature_location">°</span>
              <span className="text_celsius_location">C</span>
            </div>
            <div className="divider_div"></div>
            <div className="items_flex_text">
              {" "}
              <div className="text_city_location">Lyon</div>
              <div className="text_country_location">Francia</div>
            </div>
          </div>
          <div className="footer_flex_location">
            <div className="text_flex_humidity">Humidity {humidityLyon}%</div>
            <div className="text_flex_direction">West</div>
            <div className="text_flex_speed">{mainWindLyon.speed}km/h</div>
          </div>
        </div>
        <div className="items_flex_city">
          <div className="container_flex_city">
            <div className="icon_weather_city">
              <img
                src={
                  mainParis.reduce((accumulator, b) => b.main, 0) === "Clouds"
                    ? icon_cloudy
                    : mainParis.reduce((accumulator, b) => b.main, 0) ===
                      "Clear"
                    ? icon_clear
                    : icon_rain
                }
                className="img_weather_city"
                alt="icon_weather"
              />
            </div>

            <div className="items_weather_city">
              <span className="text_number_location_next">{tempParis}</span>
              <span className="text_temperature_location_next">°</span>
              <span className="text_celsius_location_next">C</span>
            </div>
            <div className="divider_div_next"></div>
            <div className="items_flex_text">
              {" "}
              <div className="text_city_location">Paris</div>
              <div className="text_country_location">Francia</div>
            </div>
          </div>
          <div className="footer_flex_location">
            <div className="text_flex_humidity">Humidity {humidityParis}%</div>
            <div className="text_flex_direction">
              {mainWindParis.deg >= 337.5 && mainWindParis.deg < 22.5
                ? "North"
                : mainWindParis.deg >= 22.5 && mainWindParis.deg < 67.5
                ? "North-East"
                : mainWindParis.deg >= 67.5 && mainWindParis.deg < 112.5
                ? "East"
                : mainWindParis.deg >= 112.5 && mainWindParis.deg < 157.5
                ? "South-East"
                : mainWindParis.deg >= 157.5 && mainWindParis.deg < 202.5
                ? "South"
                : mainWindParis.deg >= 202.5 && mainWindParis.deg < 247.5
                ? "South-West"
                : mainWindParis.deg >= 247.5 && mainWindParis.deg < 292.5
                ? "West"
                : "North-West"}
            </div>
            <div className="text_flex_speed">{mainWindParis.speed}km/h</div>
          </div>
        </div>
        <div className="items_flex_add_city">
          <div className="add_location_button">Add Locations</div>
          <img src={draw_city} className="img_draw_city" alt="img_draw_city" />
        </div>
      </div>
    </div>
  );
}
export default WeatherLocation;
