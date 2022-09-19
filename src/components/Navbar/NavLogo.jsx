import {NavLink} from "react-router-dom";
//import {LOGO_URL, WHITE_LOGO_URL} from "../../requests";
import LOGO_IMG from "../../Img/LogoImage1.png";

const NavLogo = ({ isScrolled }) => {
  return (
    <NavLink to="/">
      <img className="navbar__logo" src={LOGO_IMG} alt="Moodflix logo"/>
    </NavLink>
  )
}
export default NavLogo