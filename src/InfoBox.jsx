import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
   const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRut6ERgCLBRRzKbdSvwgtGcI0Dild3W5kwiA&s"
    const COLD_URL = "https://wexnermedical.osu.edu/-/media/images/wexnermedical/blog/2020-stories/01/frostbite-eyes/coldeyessafety_large.jpg"
    const HOT_URL = "https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2024/04/heatwave-scaled.jpg?size=*:900"
    return(
        <div className='InfoBox'>
            <div className='InnerBox'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 75 ? RAIN_URL : info.temp > 25 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {info.humidity > 75 ? <ThunderstormIcon/> : info.temp > 25 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                        <div>Tempreture = {info.temp}&deg;C</div>
                        <div>Humidity = {info.humidity}&deg;C</div>
                        <div>Min Temp = {info.temp_min}&deg;C</div>
                        <div>Max Temp = {info.temp_max}&deg;C</div>
                        <div>The weather can be described as <b>{info.weather}</b> and feels like {info.feels_like}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            
        </div>
    )
}