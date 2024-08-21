import React from "react";
import lodding from './lodding.gif'
const Spinner=()=>{
    return (
      <div className='text-center'>
        <img className='my-3' src={lodding} alt="loading"/>
      </div>
    )
}

export default Spinner
