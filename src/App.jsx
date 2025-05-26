import SearchBar from "./components/SearchBar"
import Sidebar from "./components/Sidebar"
import styles from './App.module.css';
import WeatherBoard from "./components/WeatherBoard";
import AirConditions from "./components/AirConditions";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  
  // const APIKEY = '0ceb754e3d0ccac2b807bdb8e0cde202'
     const APIKEY = '69e67c8bdadf637986d2a5ad89d314c4'
  const [cityName, setCityName] = useState('karachi')
  const [apiResponse, setApiResponse] = useState(null)

  useEffect(()=>{
   fetchData(cityName)
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
    console.log("apicalled",response.data)
    setApiResponse(response);
  } catch (error) {
    console.log("error: ", error.message);
  }
};




  return (
    <>
    <div className="d-flex">
      <Sidebar/>
      <div className={`${styles.middle} ms-5 d-flex flex-column gap-5`}>
        <SearchBar onSearch={handleSearch} />
        <WeatherBoard  weatherData={apiResponse?.data}/>
        <AirConditions  weatherData={apiResponse?.data}/>
      </div>
      
    </div>
      
    </>
  )
}

export default App
