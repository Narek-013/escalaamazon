import { FC } from "react";

type ButtonProps = {
  title: string;
  click?: () => void;
  Icon?: React.ElementType; 
}

const Button: FC<ButtonProps> = ({ title, click, Icon }) => {
  return (
    <button className="uikit__button" onClick={click}>
      {title}
      {
        Icon && <Icon />
      }
    </button>
  )
}

export default Button;
