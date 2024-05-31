import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css" ;
export default function InfoBox({info}) {
    const IMG_URL  = "https://cdn.pixabay.com/photo/2016/10/25/14/03/clouds-1768967_640.jpg" ;

    return (
        <div className='infoBox'>
          <div className='contentContainer'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={IMG_URL} title="green iguana"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {info.city}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                  <p>Temperature = {info.temp}&deg;C</p>
                  <p>Humidity = {info.temp} %</p>
                  <p>Max Temp = {info.tempMax}&deg;C</p>
                  <p>Min Temp = {info.tempMin}&deg;C</p>
                  <p>
                    The weather can be described as <i>{info.weather}</i> and feels like
                    {info.feelsLike}&deg;C
                  </p>
                </Typography>
            </CardContent>
        </Card>
        </div>
    </div>
    )

}