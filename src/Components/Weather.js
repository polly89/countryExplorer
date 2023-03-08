import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlide";

const Weather = () => {
    const [weather, setWeather] = useState();
    const display = useSelector(selectDisplay);
    const latitude = display.capitalInfo.latlng[0];
    const longitude = display.capitalInfo.latlng[1];

    useEffect(()=> {
        const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: `${latitude}, ${longitude}`},
        headers: {
            'X-RapidAPI-Key': '6c69f6ff77msh0bb004aa00a6023p1ca4bfjsn6a4ddc176177',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setWeather(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    })

    return (
        <div>
            <table className="overview-table">
                <thead>
                <tr key={display.name}>
                    <th>Conditions: </th>
                    <th>Temperature: </th>
                    <th>Feels Like: </th>
                    <th>Humidity: </th>
                    <th>Wind Speed: </th>
                </tr>
                </thead>
                    
                <tbody>
                        <tr>
                        <td>{weather?.current?.condition?.text}</td>
                        <td>{weather?.current.temp_f}° F</td>
                        <td>{weather?.current?.feelslike_f}° F</td>
                        <td>{weather?.current?.humidity}%</td>
                        <td>{weather?.current?.wind_mph}mph{" "}</td>
                    </tr>
                </tbody>
            </table>
            <img src={weather?.current?.condition?.icon} alt='weather icon'/>
        </div>
    );
};

export default Weather;
