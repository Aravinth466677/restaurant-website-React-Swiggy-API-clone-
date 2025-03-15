import Logo from "./Logo";
import NavLinks from "./NavLinks";
function Header(){
    return(
      <div className='header'>
      <Logo />
      <NavLinks />
      <div></div>
      </div>
    )
  }
  export default Header;