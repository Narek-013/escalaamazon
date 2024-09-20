import React from 'react'
import { Image } from '../../Images/Image'

function EasyExport() {
    return (
        <section className="easy-export">
            <div className="easy-export__container _container">
                <div className="easy-export__images">
                    <img src={Image.easyCircle} alt="img" />
                    <img src={Image.easyEllipse} alt="img" />
                    <img src={Image.easyEllipse1} alt="img" />
                </div>
                <span>HOW IT WORKS</span>
                <h4>The easiest way to sell abroad</h4>
                <p>Don't let distance stop you from reaching millions of customers across the United States! Contact us today and let's together bring the beauty and uniqueness of your handmade products into the homes of American customers.</p>
                <div className="easy-export-items">
                    <div className='easy-item'>
                        <span className="easy-export-purple" />
                        <p>Experience and Professionalism</p>
                        <span>We have an experienced team in online sales and know the US market well.</span>
                    </div>
                    <div className='easy-item'>
                        <img src={Image.easyImg} alt="img" />
                        <p>Accessibility</p>
                        <span>We make the process of selling on Amazon as simple and accessible as possible for you.</span>
                    </div>
                    <div className='easy-item'>
                        <span className="easy-export-red" />
                        <p>Full Services</p>
                        <span>We take care of the entire process from A to Z so you don't have to worry about anything.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EasyExport
