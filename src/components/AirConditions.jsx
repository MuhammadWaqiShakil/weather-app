import styles from './AirConditions.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHalf, faWind, faCloudRain, faSun } from '@fortawesome/free-solid-svg-icons'

function AirConditions({ weatherData }) {
  // ⛔ Don't try to render until weatherData is loaded
  if (!weatherData || !weatherData.main || !weatherData.wind) {
    return null; // Or show a loading spinner/message if you prefer
  }

  return (
    <div style={{ color: 'white' }} className={`${styles.airConditionsContainer} p-4`}>
      <p style={{ color: "#a3aebf" }} className='fs-5'>Air conditions</p>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className={`${styles.para}`}>
              <FontAwesomeIcon className='me-1' icon={faTemperatureHalf} /> Real Feel
            </p>
            <h4 className='ms-3'>{weatherData.main.feels_like}°C</h4>
          </div>
          <div className="col">
            <p className={`${styles.para}`}>
              <FontAwesomeIcon className='me-1' icon={faWind} /> Wind
            </p>
            <h4 className='ms-4'>{weatherData.wind.speed} km/h</h4>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <p className={`${styles.para}`}>
              <FontAwesomeIcon className='me-1' icon={faCloudRain} /> Sea Level
            </p>
            <h4 className='ms-4'>{weatherData.main.sea_level ?? 'N/A'} MSL</h4>
          </div>
          <div className="col">
            <p className={`${styles.para}`}>
              <FontAwesomeIcon className='me-1' icon={faSun} /> Max Temperature
            </p>
            <h4 className='ms-4'>{weatherData.main.temp_max}°C</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirConditions;
