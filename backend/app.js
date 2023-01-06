const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const express = require('express')
const cors = require('cors')
const app = express()
const port = 9000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const appId = process.env.APPID || '7ed516b1f9423e09ba9a290b7e055df6';

const fetchLongLat = async (countryName) => {
  const endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${countryName}&appid=${appId}`;
  const response = await fetch(endpoint);

  return response ? response.json() : {}
};

const fetchWeather = async (long, lat) => {
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${appId}`;
    const response = await fetch(endpoint);
  
    return response ? response.json() : {}
};

app.post('/', async (req, res) => {
    var data = req.body;
    console.log(data)
    var countryName = data.country_name;
    console.log(countryName)
    var geoData = await fetchLongLat(countryName);
    var lat = geoData[0].lat
    var long = geoData[0].lon    
    var weatherData = await fetchWeather(long, lat)    
    res.send({
        "weather_main": weatherData["weather"][0]["main"],
        "weather_description": weatherData["weather"][0]["description"],
        "temperature": weatherData["main"]["temp"],
        "pressure": weatherData["main"]["pressure"],
        "humidity": weatherData["main"]["humidity"]
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})