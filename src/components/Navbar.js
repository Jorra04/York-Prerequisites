import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/YorkuLogoLion.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-side">
        <Link to="/">
          <img className="logo" src={logo} alt="York Logo, no copyright intended." draggable={false}></img>
        </Link>
      </div>
      <div className="right-side">
        <Link className="navbar-links" to="/about">
          About
        </Link>

        <Link className="navbar-links" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;