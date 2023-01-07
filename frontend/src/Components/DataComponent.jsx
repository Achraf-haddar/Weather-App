// import { getSubtitles } from 'youtube-captions-scraper';
// import axios from 'axios';
import { useEffect, useState } from 'react';
// import he from 'he';

export default function DataComponent({ countryName }) {    
    const [data, setData] = useState();
    const fetchData = async() => {
        const results = await fetch("http://backend:80/", {
            method: 'POST',
            body: JSON.stringify({
                country_name: countryName,
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
          .then(res => setData(res)) 
    }
    useEffect(() => {
        if (countryName !== ""){
            fetchData()
        }
    }, [countryName])
    useEffect(() => {
        console.log(data)
    }, [data])

    return(
        <div>
            {/* {data.map((row) => (
                <div>{row}</div>
            ))} */}
            {
                data 
                ?
                <>
                    <p><b>Country name: </b>{countryName}</p>
                    <p><b>Humidity: </b>{data.humidity}</p>
                    <p><b>Pressure: </b>{data.pressure}</p>
                    <p><b>Temperature: </b>{data.temperature}</p>
                    <p><b>Weather main description: </b>{data.weather_main}</p>
                    <p><b>Weather detailed description: </b>{data.weather_description}</p>
                </>

                :
                null
            }
            
        </div>
    )
}