import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css'
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "8db1ff76b70fb97d78f527ce022b5647"
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);


    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                temp_max: jsonResponse.main.temp_max,
                temp_min: jsonResponse.main.temp_min,
                feels_like: jsonResponse.main.feels_like,
                humidity:  jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
        
        
    }

    let handelChange = (event)=>{
        setCity(event.target.value);
    }

    let handelSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true)
        }
        
        
    }



    return(
        <div className='Search-Box'>
            <form onSubmit={handelSubmit}>
                <TextField 
                    id="city" 
                    label="Search City"
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handelChange}
                />
                <br /><br />

                <Button variant="contained" endIcon={<SearchIcon /> }type="submit">
                    Search
                </Button> 
                {error && <p style={{color: "red"}}>No such place exists!</p>}
            </form>
        </div>

    )
}