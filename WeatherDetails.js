import React from "react";
import { Redirect } from 'react-router-dom';
import FormWeather from "./FormWeather";
import Weather from "./Weather";
import Titles from "./Tiles";


const API_KEY = "073d04f9aa4824c7891d7cacb4309f3e";
class WeatherDetails extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
      }
      getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if (city && country) {
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
          });
        } else {
          this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter the values."
          });
        }
      }
      render() {
        return (
          <div>
            <div className="wrapper">
              <div className="main">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-2 title-container">
                      <Titles />
                    </div>
                    <div className="col-xs-2 form-container">
                      <FormWeather getWeather={this.getWeather} />
                      <Weather 
                        temperature={this.state.temperature} 
                        humidity={this.state.humidity}
                        city={this.state.city}
                        country={this.state.country}
                        description={this.state.description}
                        error={this.state.error}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
}
export default WeatherDetails;