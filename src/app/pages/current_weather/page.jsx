import React, { Fragment } from "react";
import logo from "../../../assets/logo.png";
import Forecast from "../../components/forecast/forecast.jsx";
import CurrentForecast from "../../components/current_forecast/current_forecast.jsx";
import Places from "../../components/places/places.jsx";
import WeatherLocation from "../../components/weather_location/weather_location.jsx";

function page(props) {
  return (
    <Fragment>
      <div className="page_container">
        <img src={logo} className="icon_gradiweb" alt="gradiweb_icon" />
        <div className="container_flexbox_page">
          <div>
            <CurrentForecast />
          </div>
          <div>
            <Forecast />
          </div>
          <div>
            <Places />
          </div>
          <div>
            <WeatherLocation />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default page;
