import React from "react";
import rain from "../../../assets/rain.svg";
import draw_city from "../../../assets/draw_city.svg";

const WeatherLocation = () => (
  <div className="container_weather_location">
    <div className="container_weather_city">
      <div className="items_flex_city">
        <div className="container_flex_city">
          <div className="icon_weather_city">
            <img src={rain} className="img_weather_city" alt="icon_weather" />
          </div>

          <div className="items_weather_city">
            <span className="text_number_location">29</span>
            <span className="text_temperature_location">°</span>
            <span className="text_celsius_location">C</span>
          </div>
          <div className="divider_div"></div>
          <div className="items_flex_text">
            {" "}
            <div className="text_city_location">Paris</div>
            <div className="text_country_location">Francia</div>
          </div>
        </div>
        <div className="footer_flex_location">
          <div className="text_flex_humidity">Humidity 64%</div>
          <div className="text_flex_direction">West</div>
          <div className="text_flex_speed">8.3km/h</div>
        </div>
      </div>
      <div className="items_flex_city">
        <div className="container_flex_city">
          <div className="icon_weather_city">
            <img src={rain} className="img_weather_city" alt="icon_weather" />
          </div>

          <div className="items_weather_city">
            <span className="text_number_location_next">29</span>
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
          <div className="text_flex_humidity">Humidity 64%</div>
          <div className="text_flex_direction">West</div>
          <div className="text_flex_speed">8.3km/h</div>
        </div>
      </div>
      <div className="items_flex_add_city">
        <div className="add_location_button">Add Locations</div>
        <img src={draw_city} className="img_draw_city" alt="img_draw_city" />
      </div>
    </div>
  </div>
);

export default WeatherLocation;
