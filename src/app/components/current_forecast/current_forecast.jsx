import React from "react";
import icon_location from "../../../assets/icon_location.svg";
import icon_bogota from "../../../assets/icon_bogota.png";
import container_forecast from "../../../assets/forecast_container.png";
import icon_cloudy from "../../../assets/cloudy-day.png";

const CurrentForecast = () => {
  React.useEffect(() => {
    console.log("useefect");
  });

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
        <span className="text_number">31</span>
        <span className="text_temperature">°</span>
        <span className="text_celsius">C</span>
        <img
          src={container_forecast}
          className="img_container_forecast"
          alt="img_container_forecast"
        />
        <img
          src={icon_cloudy}
          className="img_container_weather"
          alt="img_weather"
        />
        <span className="text_weather">Cloudy</span>
      </div>
    </div>
  );
};
export default CurrentForecast;
