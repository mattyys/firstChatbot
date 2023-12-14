import React from 'react'
import "./ConfirmLoan.css"

export const ConfirmLoan = (props) => {

  const handleLoan = () => {
    props.actions.handleLoan;
  };

   
  return (
    <div className='btn-container'>
        <button className="btn  btn-primary" type="button" onClick={() => {handleLoan()}}>Yes</button>
        <button className="btn  btn-primary" type="button">No</button>    
    </div>
  )
}
