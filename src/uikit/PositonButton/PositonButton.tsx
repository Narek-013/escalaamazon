import { FC } from "react"

type PositonButtonProps = {
    title: string;
    image: string;
    time?: string
}

const PositonButton:FC<PositonButtonProps> = ({title, image, time}) => {
    return (
        <button className="position_button">
            <img src={image} alt="img" />
            <div className="position_button-text">
                <p>{title}</p>
                {time && <span>{time}</span>}
            </div>
            <p className="title">{title}</p>
        </button>
    )
}

export default PositonButton
