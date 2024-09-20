import React from 'react'
import { Image } from '../../Images/Image'

function Team() {
    return (
        <section className="team">
            <div className="team__container _container">
                <div className="team-image">
                    <img src={Image.teamImgEllipse} alt="img" />
                    <img src={Image.teamImgCircle} alt="img" />
                </div>
                <h4>Your <span>team</span></h4>
                <p>
                    We are a dedicated and passionate team focused on the success of our
                    clients and providing the highest quality service. Together, we work to
                    realize our vision and bring innovative solutions to the global market.
                </p>
                <div className="team-workers">
                    <div className='team-workers__item' style={{backgroundImage: `url(${Image.teamImgBack})`}}>
                        <img src={Image.teamGirlImg} alt="img" />
                        <span>Andra Johannes</span>
                        <span>CEO, Marketing</span>
                    </div>
                    <div className='team-workers__item' style={{backgroundImage: `url(${Image.teamImgBack})`}}>
                        <img src={Image.teamGirlImg2} alt="img" />
                        <span>Cristina Swinke</span>
                        <span>Product Placement</span>
                    </div>
                    <div className="team-workers__item team-active" style={{backgroundImage: `url(${Image.teamActive})`}}>
                        <img src={Image.teamGirlImg3} alt="img" />
                        <span>Nadie Johennberg</span>
                        <span>Logistics and Accounting</span>
                    </div>
                </div>
                <img className="team-img" src={Image.teamCircleImg} alt="img" />
            </div>
        </section>
    )
}

export default Team
