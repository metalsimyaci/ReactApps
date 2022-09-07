import React from "react";
import axios from "axios";

export default class WeatherForecast extends React.Component {
    state = {
        forecasts: []
    }

    componentDidMount() {
        axios.get(`https://localhost:7234/WeatherForecast`)
            .then(res => {
                console.log(res);
                const forecasts = res.data;
                this.setState({ forecasts });
            });
        fetch(`https://localhost:7234/WeatherForecast`).then(res => {
            console.log("Fetch");
            console.log(res);
        })
    }

    render() {
        return (
            <ul>
                {
                    this.state.forecasts
                        .map(forecast =>
                            <li key={forecast.date}>{forecast.temperatureC}</li>
                        )
                }
            </ul>
        )
    }
}