
import { useState } from 'react';
import styles from './SearchBar.module.css'

function SearchBar(props){
 const { onSearch } = props;
 const [city,setCity] = useState("")
  return(
    <form role="search" className="mt-5 d-flex justify-content-center gap-3">
      <input className={`${styles.searchField} ps-3 me-2 fs-5`} onChange={(e)=>{
        setCity(e.target.value)
        
      }} type="search" placeholder="Search for Cities" aria-label="Search" />
      <button className='btn btn-outline-light' style={{borderRadius:"13px"}} onClick={(e)=>{
        e.preventDefault();
        onSearch(city);
      }}>Search</button>
    </form>
  )
}



export default SearchBar