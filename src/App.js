import React, { useState, useEffect } from 'react'
import './App.css';
import Filter from './Components/Filters/Filter';
import Car from './Components/Cards/Car';

import Paginaion from './Components/Pagination/Paginaion';
import Search from './Components/Search/Search';


function App() {

  let [pageNumber, setpageNumber] = useState(1);
  let [ search, setSearch ] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  console.log(results);
  let api =`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(()=>{
    (async function(){
      let data= await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();

  },[api])


  return (
    <>
    <div className='App'>
      <h1 className='text-center ubuntu my-4'>
        Rick & Morty <span className='text-primary'>Wiki</span>
      </h1>

      <Search setpageNumber={setpageNumber} setSearch={setSearch} />

      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <Filter/>
            </div>
          <div className='col-8'>
            <div className='row'>
              <Car results={results} />
              
            </div>
          </div>
        </div>
      </div>

      <Paginaion info={info} pageNumber={pageNumber} setpageNumber={setpageNumber}/>
    </div>
    
    </>
  );
}

export default App;
