import React, { useState, useEffect } from "react";
import icon_cloudy from "../../../assets/cloudy.svg";
import icon_clear from "../../../assets/clear.svg";
import icon_rain from "../../../assets/rain.svg";

function CurrentForecast() {
  const [dailyoneWeather, setDailyOneWeather] = useState([]);
  const [dailytwoWeather, setDailyTwoWeather] = useState([]);
  const [dailythreeWeather, setDailyThreeWeather] = useState([]);
  const [dailyoneDate, setDailyOneDate] = useState(null);
  const [dailytwoDate, setDailyTwoDate] = useState(null);
  const [dailythreeDate, setDailyThreeDate] = useState(null);
  const [dailyoneTemp, setDailyOneTemp] = useState([]);
  const [dailytwoTemp, setDailyTwoTemp] = useState([]);
  const [dailythreeTemp, setDailyThreeTemp] = useState([]);

  useEffect(() => {
    DataAjaxForecast();
  }, []);
  const DataAjaxForecast = async () => {
    let url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=4.3556&lon=-74.0451&exclude=hourly,minutely&appid=3176402fbb821834afb3bf6529df583e";
    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    api.onreadystatechange = function () {
      if (this.status === 200 && this.readyState === 4) {
        const dataJSON = JSON.parse(this.responseText);
        let dataTemp = dataJSON.daily.values();
        const ceroData = dataTemp.next().value;
        const firstData = dataTemp.next().value;
        const secondData = dataTemp.next().value;
        const thirdData = dataTemp.next().value;
        const firstDataWeather = firstData.weather;
        const secondDataWeather = secondData.weather;
        const thirdDataWeather = thirdData.weather;
        setDailyOneWeather(firstDataWeather);
        setDailyTwoWeather(secondDataWeather);
        setDailyThreeWeather(thirdDataWeather);
        const firstDataDate = firstData.dt;
        const secondDataDate = secondData.dt;
        const thirdDataDate = thirdData.dt;
        var timestamp1 = firstDataDate * 1000;
        var timestamp2 = secondDataDate * 1000;
        var timestamp3 = thirdDataDate * 1000;
        var date1 = new Date(timestamp1).getDay();
        var date2 = new Date(timestamp2).getDay();
        var date3 = new Date(timestamp3).getDay();
        setDailyOneDate(date1);
        setDailyTwoDate(date2);
        setDailyThreeDate(date3);
        const firstDataTemp = firstData.temp;
        const secondDataTemp = secondData.temp;
        const thirdDataTemp = thirdData.temp;
        setDailyOneTemp(firstDataTemp);
        setDailyTwoTemp(secondDataTemp);
        setDailyThreeTemp(thirdDataTemp);
      }
    };
  };
  return (
    <div className="container_forecast">
      <div className="container_forecast_flexbox">
        <div className="container_forecast_text">
          <span className="text_forecast_title">3 Days</span>
          <span className="text_forecast">Forecast</span>
        </div>
        <div className="container_items_flex">
          <div className="items_flex_icon">
            <img
              src={
                dailyoneWeather.reduce((accumulator, b) => b.main, 0) ===
                "Clouds"
                  ? icon_cloudy
                  : dailyoneWeather.reduce((accumulator, b) => b.main, 0) ===
                    "Clear"
                  ? icon_clear
                  : icon_rain
              }
              className="icon_weather"
              alt="icon_weather"
            />
          </div>
          <div className="items_flex_weather">
            <div className="text_item_day">
              {dailyoneDate === 0
                ? "Sunday"
                : dailyoneDate === 1
                ? "Monday"
                : dailyoneDate === 2
                ? "Tuesday"
                : dailyoneDate === 3
                ? "Wednesday"
                : dailyoneDate === 4
                ? "Thursday"
                : dailyoneDate === 5
                ? "Friday"
                : "Saturday"}
            </div>

            <div className="text_item_weather">
              {dailyoneWeather.reduce((accumulator, b) => b.main, 0) ===
              "Clouds"
                ? "Cloudy"
                : dailyoneWeather.reduce((accumulator, b) => b.main, 0) ===
                  "Clear"
                ? "Sunny"
                : "Rainy"}
            </div>
          </div>
          <div className="items_flex_card">
            {(dailyoneTemp.max - 273.15).toFixed(0)}°/
            {(dailyoneTemp.min - 273.15).toFixed(0)}°
          </div>
        </div>
        <div className="container_items_flex">
          {" "}
          <div className="items_flex_icon">
            <img
              src={
                dailytwoWeather.reduce((accumulator, b) => b.main, 0) ===
                "Clouds"
                  ? icon_cloudy
                  : dailytwoWeather.reduce((accumulator, b) => b.main, 0) ===
                    "Clear"
                  ? icon_clear
                  : icon_rain
              }
              className="icon_weather"
              alt="icon_weather"
            />
          </div>
          <div className="items_flex_weather">
            {" "}
            <div className="text_item_day">
              {dailytwoDate === 0
                ? "Sunday"
                : dailytwoDate === 1
                ? "Monday"
                : dailytwoDate === 2
                ? "Tuesday"
                : dailytwoDate === 3
                ? "Wednesday"
                : dailytwoDate === 4
                ? "Thursday"
                : dailytwoDate === 5
                ? "Friday"
                : "Saturday"}
            </div>
            <div className="text_item_weather">
              {dailytwoWeather.reduce((accumulator, b) => b.main, 0) ===
              "Clouds"
                ? "Cloudy"
                : dailytwoWeather.reduce((accumulator, b) => b.main, 0) ===
                  "Clear"
                ? "Sunny"
                : "Rainy"}
            </div>
          </div>
          <div className="items_flex_card_next">
            {" "}
            {(dailytwoTemp.max - 273.15).toFixed(0)}°/
            {(dailytwoTemp.min - 273.15).toFixed(0)}°
          </div>
        </div>
        <div className="container_items_flex">
          {" "}
          <div className="items_flex_icon">
            <img
              src={
                dailythreeWeather.reduce((accumulator, b) => b.main, 0) ===
                "Clouds"
                  ? icon_cloudy
                  : dailythreeWeather.reduce((accumulator, b) => b.main, 0) ===
                    "Clear"
                  ? icon_clear
                  : icon_rain
              }
              className="icon_weather"
              alt="icon_weather"
            />
          </div>
          <div className="items_flex_weather">
            {" "}
            <div className="text_item_day">
              {" "}
              {dailythreeDate === 0
                ? "Sunday"
                : dailythreeDate === 1
                ? "Monday"
                : dailythreeDate === 2
                ? "Tuesday"
                : dailythreeDate === 3
                ? "Wednesday"
                : dailythreeDate === 4
                ? "Thursday"
                : dailythreeDate === 5
                ? "Friday"
                : "Saturday"}
            </div>
            <div className="text_item_weather">
              {dailythreeWeather.reduce((accumulator, b) => b.main, 0) ===
              "Clouds"
                ? "Cloudy"
                : dailythreeWeather.reduce((accumulator, b) => b.main, 0) ===
                  "Clear"
                ? "Sunny"
                : "Rainy"}
            </div>
          </div>
          <div className="items_flex_card_next">
            {" "}
            {(dailythreeTemp.max - 273.15).toFixed(0)}°/
            {(dailythreeTemp.min - 273.15).toFixed(0)}°
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentForecast;
