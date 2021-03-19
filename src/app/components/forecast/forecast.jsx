import React from "react";
import rain from "../../../assets/rain.svg";

const Forecast = () => (
  <div className="container_forecast">
    <div className="container_forecast_flexbox">
      <div className="container_forecast_text">
        <span className="text_forecast_title">3 Days</span>
        <span className="text_forecast">Forecast</span>
      </div>
      <div className="container_items_flex">
        <div className="items_flex_icon">
          <img src={rain} className="icon_weather" alt="icon_weather" />
        </div>
        <div className="items_flex_weather">
          <div className="text_item_day">Friday</div>
          <div className="text_item_weather">Rain</div>
        </div>
        <div className="items_flex_card"> 32°/23°</div>
      </div>
      <div className="container_items_flex">
        {" "}
        <div className="items_flex_icon">
          <img src={rain} className="icon_weather" alt="icon_weather" />
        </div>
        <div className="items_flex_weather">
          {" "}
          <div className="text_item_day">Friday</div>
          <div className="text_item_weather">Rain</div>
        </div>
        <div className="items_flex_card_next"> 34°/24°</div>
      </div>
      <div className="container_items_flex">
        {" "}
        <div className="items_flex_icon">
          <img src={rain} className="icon_weather" alt="icon_weather" />
        </div>
        <div className="items_flex_weather">
          {" "}
          <div className="text_item_day">Friday</div>
          <div className="text_item_weather">Rain</div>
        </div>
        <div className="items_flex_card_next"> 31°/23°</div>
      </div>
    </div>
  </div>
);

export default Forecast;
