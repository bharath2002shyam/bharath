import React from 'react'
import stylea from './Car.module.css'


const Car = ({ results }) => {
  let display;
  console.log(results);

  if(results) {
    display = results.map(x=>{
      let {id , name , image , location, status } =x;
      return(
        <div key={id} className='col-4 position-relative mb-4' >
          <div className={`${stylea.card} card`} >
            <img src={image} alt='t' className={`${stylea.img} img-fluid`}/>
            <div style={{padding:"10px"}} className='content'>
              <div className='fs-5 fw-bold mb-4'>{name}</div>
              <div className=''>
                <div className='fs-6'>Last Location</div>
                <div className='fs-5'>{location.name}</div>
              </div>
            </div>
          </div>
          {(()=>{
            if(status === "Dead"){
              return(
                <div className={`${stylea.badge} position-absolute badge bg-danger`}>
                {status}
                </div>
              )
            }
            else if(status === "Alive"){
              return(
                <div className={`${stylea.badge} position-absolute badge bg-success`}>
                {status}
                </div>
              )
            }
            else{
              return(
                <div className={`${stylea.badge} position-absolute badge bg-secondary`}>
                {status}
                </div>
              )
            }
          })()}
          
        </div>
      )
    })
  }
  else{
    display="no character found"
  }
  return (
    <>{display}</>
  )
}

export default Car