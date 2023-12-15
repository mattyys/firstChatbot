import React from 'react'
import "./ConfirmLoan.css"

export const ConfirmLoan = (props) => {
  
  const handleLoans = () => {
      
  };

   
  return (
    <div className='btn-container'>
        <button className="btn  btn-primary m-1 btn-sm" type="button" onClick={handleLoan()}>Yes</button>
        <button className="btn  btn-danger m-1 btn-sm" type="button">No</button>    
    </div>
  )
}
