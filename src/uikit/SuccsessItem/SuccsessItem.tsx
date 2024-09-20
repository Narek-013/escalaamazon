import React from 'react'
import { Image } from '../../Images/Image';

type SuccsessItemProps = {
    title: string;
    text: string;
    image: string;
    btnClass?: string
}

const SuccsessItem = ({title, text, image, btnClass}: SuccsessItemProps) => {
    return (
        <div className="succsess-card">
            <img className="succsess__container-items-card-img" src={image} alt="img" />
            <span>12/05/2024</span>
            <h4>{title}</h4>
            <p>{text}</p>
            <div className="succsess__buttons">
                <button className={btnClass ? btnClass : ''}>Tariff PRO</button>
                <button>
                    Find out more
                </button>
                <img className="button__img" src={Image.succsesim1} alt="img" />
            </div>
        </div>
    )
}

export default SuccsessItem
