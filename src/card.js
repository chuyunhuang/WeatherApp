import React from "react";

const WeatherCard = props => {
  return (
    <div>
      <div>Summary: {props.summary}</div>
      <div>High Temp: {props.highTemp}</div>
      <div>Low Temp: {props.lowTemp}</div>
    </div>
  );
};

export default WeatherCard;
