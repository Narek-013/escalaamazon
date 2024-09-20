import React from 'react'
import { Link } from 'react-router-dom'

const CanclePayment = () => {
  return (
    <section className='confirmation'>
        <div className="confirmation__container container">
            <h1>Payment Failed</h1>
            <p>Unfortunately, your payment could not be processed. Please try again.</p>
            <Link to={'/prices'}>Try Again</Link>
        </div>
    </section>
  )
}

export default CanclePayment
