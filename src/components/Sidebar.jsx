import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud,faList,faMap,faSliders} from '@fortawesome/free-solid-svg-icons'
import styles from './Sidebar.module.css';
import logo from '../assets/weather-app.png'




function Sidebar() {

  return(
    <>
    <div className={`${styles.container} mt-4 ms-4 gap-2 pt-4`} >
      <div className={styles.menuItem}>
        <img src={logo} alt="" height='70px' />
      </div>
      <div className={`${styles.menuItem} mt-5`}>
        <FontAwesomeIcon icon={faCloud} />
        <h5>Weather</h5>
      </div>
      <div className={styles.menuItem}>
        <FontAwesomeIcon icon={faList} />
        <h5>Cities</h5>
      </div>
      <div className={styles.menuItem}>
        <FontAwesomeIcon icon={faMap} />
        <h5>Map</h5>
      </div>
      <div className={styles.menuItem}>
        <FontAwesomeIcon icon={faSliders} />
        <h5>Settings</h5>
      </div>
    </div>
    </>
  )
}




export default Sidebar