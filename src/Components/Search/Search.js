import React from 'react'
import barath from './Search.module.scss'

const Search = ({ setSearch, setpageNumber }) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
      <input onChange={e=>{
        setpageNumber(1);
       setSearch(e.target.value); 
      }} placeholder='Search for characters' type='text' className={`${barath.input}`}/>
      <button onClick={e=>{e.preventDefault();}} className={`${barath.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  )
}

export default Search