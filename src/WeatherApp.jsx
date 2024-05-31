import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./searchBox" ;

export default function WeatherAPP() {
    const [WeatherInfo , setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike : 34.2,
        temp : 24.2,
        tempMax : 29.32,
        tempMin : 20.22,
        humidity: 47,
        weather : "haze",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo) ;
    };
    return(
        <div style={{textAlign : "center"}}>
            <h2>Weather widget</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {WeatherInfo}/>
        </div>
    )
}