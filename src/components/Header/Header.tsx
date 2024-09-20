import { Link, useNavigate } from "react-router-dom";
import Button from "../../uikit/Button/Button";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Image } from "../../Images/Image";
import { useDispatch, useSelector } from "react-redux";
import { logout, usersSelector } from "../../store/slices/users/usersSlice";
import { useRef, useState } from "react";

function Header() {
  const burgermenu = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { userToken } = useSelector(usersSelector);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (burgermenu.current) {
      setIsMenuOpen(!isMenuOpen);
      burgermenu.current.style.display = isMenuOpen ? "none" : "block";
      document.body.classList.toggle("no-scroll");
    }
  };

  const userTokenClear = () => {
    dispatch(logout())
  }

  return (
    <header className="header">
      <div className="header__container _container">
        <Link to={"/"}>
          <img src={Image.logo} alt="img" />
        </Link>
        <ul>
          <li>
            <a href="/" className="active">
              About us
            </a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">How it works</a>
          </li>
          <li>
            <a href="/">Cases</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="header-right">
          <div className="header__buttons">
            <span />
            <Button title={userToken ? "My account" : "Login"} click={() => navigate(userToken ? "/dashboard" : "/login")} />
            <button onClick={toggleMenu}>
              <img src="img/hamburger.png" alt="img" />
            </button>
          </div>
         {userToken && <button className="logout" onClick={userTokenClear}>
            <img src={Image.logout} alt="image" />
          </button>}
        </div>
      </div>
      <div className="burger-menu" ref={burgermenu}>
        <BurgerMenu toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}

export default Header;
