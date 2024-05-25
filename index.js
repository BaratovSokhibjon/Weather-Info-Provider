import express from 'express'
import axios from 'axios'

const app = express();
const port = 3000;

const api_url_ipify = "https://geo.ipify.org/api/v2/country/";
const ipify_api_access_key = "at_w0Dh0VxGuC0WQkvtU3RH481SYcP30";

const api_url_ipstack = "http://api.ipstack.com/";
const ipstack_api_access_key = "a859d006ba0e9d8281d3157307e4e397";

const api_url_openWeather = "https://api.openweathermap.org/data/2.5/weather/";
const openWeather_api_access_key = "e87ea4c873b7d02c3d4ba0a59fd836ed";

app.use(express.static("public"));



app.get('/', async (req, res) => {
  const getIp = await axios.get(api_url_ipify, {params: {apiKey: ipify_api_access_key}});
  const getPos = await axios.get(api_url_ipstack + getIp.data.ip, {params: {access_key: ipstack_api_access_key}});
  const getWeather = await axios.get(api_url_openWeather, { params: {lat: getPos.data.latitude, lon: getPos.data.longitude, appid: openWeather_api_access_key, units: "metric" }});
  
  res.render('index.ejs', {
    data: getPos.data,
    weatherData: getWeather.data    
  }); 
});


app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})