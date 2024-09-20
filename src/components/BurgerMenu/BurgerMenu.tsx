import { useSelector } from "react-redux";
import Button from "../../uikit/Button/Button";
import { usersSelector } from "../../store/slices/users/usersSlice";
import { useNavigate } from "react-router-dom";

interface BurgerMenuProps {
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ toggleMenu }) => {
  const { userToken } = useSelector(usersSelector);
  const navigate = useNavigate();

  const navigateLogin = () => {
    toggleMenu(false);
    navigate(userToken ? "/dashboard" : "/login");
  };

  return (
    <div className="burger">
      <a href="/" className="active">
        About us
      </a>
      <a href="/">Services</a>
      <a href="/">How it works</a>
      <a href="/">Cases</a>
      <a href="/">Contact</a>
      <Button title={userToken ? "My account" : "Login"} click={navigateLogin} />
    </div>
  );
};

export default BurgerMenu;
