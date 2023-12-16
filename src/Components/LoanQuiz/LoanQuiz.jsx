import './LoanQuiz.css'
import React from 'react'


const linkPrimary = "link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
const linkSecondary = "link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
export const LoanQuiz = () => {



    return (
    <div className='btn-container'>
        <p><button className={linkPrimary} >Do you want to apply a loan?</button></p>
        <p><button className={linkPrimary} >Loan Conditions</button></p>
        <p><button className={linkSecondary}>Help</button></p>
    </div>
  )
}
