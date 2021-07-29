import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../YorkuLogoLion.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-side">
        <Link to="/">
          <img className="logo" src={logo} alt="York Logo, no copyright intended."></img>
        </Link>
      </div>
      <div className="right-side">
        <Link className="navbar-links" to="/about">
          <li>About</li>
        </Link>

        <Link className="navbar-links" to="/contact">
          <li>Contact</li>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
