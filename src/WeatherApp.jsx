import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "",
        temp: 0,
        temp_min: 0,
        temp_max: 0,
        feels_like: 0,
        humidity: 0,
        weather: ""
    })
    let updateWeaterInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Check Weather</h2>

            <SearchBox updateInfo={updateWeaterInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}