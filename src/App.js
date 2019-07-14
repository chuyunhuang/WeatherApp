import React from "react";
import axios from "axios";
import APIKEY from "./darksky";
import WeatherCard from "./card";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longtitude: "",
      result: []
    };
  }

  handleLatitude = e => {
    const input = e.target.value;
    this.setState({ latitude: input });
  };

  handleLongtitude = e => {
    const input = e.target.value;
    this.setState({ longtitude: input });
  };

  handleClick = () => {
    const { latitude, longtitude } = this.state;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${APIKEY}/${latitude},${longtitude}`
      )
      .then(data => {
        this.setState({ result: data.data.daily.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log("data in state", this.state.result);
    return (
      <div className="entire-app-view">
        <form>
          <input
            type="text"
            placeholder="Enter latitude"
            onChange={this.handleLatitude}
          />
          <input
            type="text"
            placeholder="Enter longtitude"
            onChange={this.handleLongtitude}
          />
        </form>
        <button onClick={this.handleClick}>Search</button>

        <div className="result-wrapper">
          {this.state.result.map((e, i) => {
            return (
              <WeatherCard
                key={i}
                summary={e.summary}
                highTemp={e.temperatureHigh}
                lowTemp={e.temperatureLow}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
