import SearchBar from "./components/SearchBar"
import Sidebar from "./components/Sidebar"
import styles from './App.module.css';
import WeatherBoard from "./components/WeatherBoard";
import AirConditions from "./components/AirConditions";
import { useEffect, useState } from "react";
import axios from "axios";
import Forecast from "./components/Forecast";

function App() {
  
  // const APIKEY = '0ceb754e3d0ccac2b807bdb8e0cde202'
     const APIKEY = '69e67c8bdadf637986d2a5ad89d314c4'
  const [cityName, setCityName] = useState('karachi')
  const [apiResponse, setApiResponse] = useState(null)
  const [apiResponseForecast, setApiResponseForecast] = useState(null)

  useEffect(()=>{
   fetchData(cityName)
   fetchDataForecast(cityName)
  },[cityName])

 

const handleSearch = (city) => {
  setCityName(city);
  fetchData(city);
};

const fetchData = async (cityToSearch) => {
  
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&appid=${APIKEY}&units=metric`
    );
    setApiResponse(response);
  } catch (error) {
    console.log("error: ", error.message);
  }
};


const fetchDataForecast = async (cityToSearch) => {
  
  try {
    const responseForecast = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityToSearch}&appid=${APIKEY}&units=metric`
    );
 
    const dailyForecasts = getDailyForecast(responseForecast.data.list);
    setApiResponseForecast(dailyForecasts);
  } catch (error) {
    console.log("error: ", error.message);
  }
};


const getDailyForecast = (list) => {
  const daily = [];
  const dates = new Set();

  for (const item of list) {
    const date = item.dt_txt.split(' ')[0];
    if (!dates.has(date)) {
      dates.add(date);
      daily.push(item);
    }
    if (daily.length === 6) break;
  }

  return daily;
}






  return (
    <>
    <div className={`d-flex`}>
      <Sidebar/>
      <div className={`${styles.middle} ms-5 d-flex flex-column gap-5`}>
        <SearchBar onSearch={handleSearch} />
        <WeatherBoard  weatherData={apiResponse?.data}/>
        <AirConditions  weatherData={apiResponse?.data}/>
      </div>
      <div className={styles.forecastWrapper}>
       <Forecast forecastData={apiResponseForecast} />
      </div>
      
    </div>
      
    </>
  )
}

export default App
