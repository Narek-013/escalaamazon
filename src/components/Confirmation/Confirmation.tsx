import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = () => {
  return (
    <section className='confirmation'>
        <div className="confirmation__container container">
            <h1>Payment Successful</h1>
            <p>Thank you for your purchase! Your payment has been successfully processed.</p>
            <Link to={'/'}>Go Home</Link>
        </div>
    </section>
  )
}

export default Confirmation
