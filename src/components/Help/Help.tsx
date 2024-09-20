import React from 'react'
import { Image } from '../../Images/Image'
import { Link } from 'react-router-dom'

const Help = () => {
    return (
        <div className="help">
            <div className="help-location">
                <Link to="/dashboard" className="help-active"><img src={Image.helpDefault} alt="img" /><span >Dashboard</span></Link>
                <Link to="/"><img src={Image.helpChart} alt="img" /><span>Tables</span></Link>
                <Link to="/"><img src={Image.helpDefault1} alt="img" />Billing</Link>
                <Link to="/"><img src={Image.helpDefault2} alt="img" />My products</Link>
            </div>
            <div className="help-payment">
                <div className="help-payment_item">
                    <div className='help-title'>
                        <h3>Today’s Money</h3>
                        <p>$53,000 <span>+55%</span></p>
                    </div>
                    <img src={Image.helpDefault3} alt="img" />
                </div>
                <div className="help-payment_item">
                    <div className='help-title'>
                        <h3>Today’s Users</h3>
                        <p>2,300 <span>+5%</span></p>
                    </div>
                    <img src={Image.helpOut} alt="img" />
                </div>
                <div className="help-payment_item">
                    <div className='help-title'>
                        <h3>Total Sales</h3>
                        <p>$173,000 <span>+8%</span></p>
                    </div>
                    <img src={Image.helpDefault4} alt="img" />
                </div>
            </div>
            <div className="help-info">
                <img src={Image.helpCircle} alt="img" />
                <h4>Need help?</h4>
                <p>Please check our docs</p>
                <button>DOCUMENTATION</button>
            </div>
        </div>
    )
}

export default Help
