import React from 'react'
import "./ConfirmLoan.css"

export const ConfirmLoan = ({actions}) => {

   
  return (
    <div className='btn-container'>
        <button className="btn  btn-primary" type="button" onClick={() => {actions.handleLoan()}}>Yes</button>
        <button className="btn  btn-primary" type="button">No</button>    
    </div>
  )
}
