import styles from './Forecast.module.css';

function Forecast(props) {
  const { forecastData } = props;


  const getDayLabel = (timestamp, index) => {
    const date = new Date(timestamp * 1000);
    if (index === 0) return 'Today';
    return date.toLocaleDateString('en-PK', { weekday: 'long' });
  };

  return (
    <>
      <div className={`${styles.forecastContainer} mt-4 d-flex flex-column gap-4`} >
        <h5 className='mt-5 pt-2 text-center'>6-Day Forecast</h5>

        {forecastData ? (
          forecastData.map((obj, index) => {
            const day = getDayLabel(obj.dt, index);
            const icon = obj.weather?.[0]?.icon || '50n';
            const description = obj.weather?.[0]?.main || 'Sunny';
            const maxTemp = Math.round(obj.main?.temp_max || 0);
            const minTemp = Math.round(obj.main?.temp_min || 0);

            return (
              <div
                key={index}
                className={`${styles.forecastCard} d-flex justify-content-between align-items-center m-3 pb-3 ms-5 me-5`}
              >
                <div>
                  <h5>{day}</h5>
                </div>
                <div className='d-flex align-items-center gap-2'>
                  <img
                    src={`https://openweathermap.org/img/w/${icon}.png`}
                    alt="weather icon"
                  />
                  <h5>{description}</h5>
                </div>
                <div>
                  <h5>
                    <span style={{ color: 'lightgrey' }}>{maxTemp}</span>/{minTemp}
                  </h5>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading forecast...</p>
        )}
      </div>
    </>
  );
}

export default Forecast;
