
import { useEffect, useState } from 'react';
import morning from '../assets/morning.png'
import evening from '../assets/evening.png'
import night from '../assets/night.png'
import styles from './WeatherBoard.module.css'


function WeatherBoard({ weatherData }) {
  const dayImage = morning;
  const eveningImage = evening;
  const nightImage = night;

  const [currentImage, setCurrentImage] = useState('');

  const updateImageBasedOnTime = () => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 7 && hour < 16) {
      setCurrentImage(dayImage);
    } else if (hour >= 16 && hour < 20) {
      setCurrentImage(eveningImage);
    } else {
      setCurrentImage(nightImage);
    }
  };

  useEffect(() => {
    updateImageBasedOnTime();
  }, []);

  // 🛑 Don't render if weatherData is not loaded
  if (!weatherData) {
    return null; // or a loading indicator like <p>Loading...</p>
  }

  return (
    <div className={`${styles.fontColor} d-flex justify-content-between`}>
      <div className={`${styles.text} d-flex flex-column mt-4`}>
        <div>
          <h4 className={`${styles.cityHeading}`}>{weatherData.name}</h4>
          <p style={{ color: '#a3aebf' }}>Humidity: {weatherData.main.humidity}%</p>
        </div>
        <div>
          <h3 className="fs-1 fw-bold">{weatherData.main.temp}°C</h3>
        </div>
      </div>
      <div className={`${styles.image}`}>
        {currentImage && (
          <img
            src={currentImage}
            alt="Time-based"
            className="w-full h-auto"
            width="195px"
          />
        )}
      </div>
    </div>
  );
}




export default WeatherBoard