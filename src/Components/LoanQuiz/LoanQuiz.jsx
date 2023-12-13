import './LoanQuiz.css'
import React from 'react'




export const LoanQuiz = () => {



    return (
    <div className='btn-container'>
        <button className="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Do you want to apply a loan?</button>
        <button className="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Loan Conditions</button>
        <button className="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Help</button>
    </div>
  )
}
