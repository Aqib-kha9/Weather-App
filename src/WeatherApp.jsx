import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 25.05,
        temp_min: 25.05,
        temp_max: 25.05,
        feels_like: 24.84,
        humidity: 47,
        weather: "haze"
    })
    let updateWeaterInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App By Loyalty</h2>

            <SearchBox updateInfo={updateWeaterInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}