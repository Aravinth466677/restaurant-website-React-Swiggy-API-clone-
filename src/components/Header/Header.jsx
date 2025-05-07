import Logo from "./Logo";
import NavLinks from "./NavLinks";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useTheme } from "./ThemeContext";
import { TbMoonStars } from "react-icons/tb";
import { IoSunnyOutline } from "react-icons/io5";
import { HiStatusOnline,HiStatusOffline } from "react-icons/hi";
import { VscThreeBars } from "react-icons/vsc";
function Header(){
    const isOnline= useOnlineStatus();

    const {theme,toggleTheme}=useTheme()

    const {sidebarview}=useTheme()

    
    const themestyle={
      background:theme==="light"?"white":"black",
      color:theme==="light"?"Black":"white",
      borderBottom:theme==="light"?"1px solid black":"1px solid white"
    }

    
    return(
      <div className='header' style={{...themestyle,padding: "1rem"}}>
      <Logo />
      <NavLinks />
      <div className="indicator"> <button onClick={toggleTheme}  style={{...themestyle,border:"none",borderRadius:"100%"}}>{theme==="light"?<IoSunnyOutline />:<TbMoonStars />}</button>
      <div>{isOnline?<HiStatusOnline />:<HiStatusOffline />}</div></div>
      <div className="threebar" onClick={sidebarview}><VscThreeBars /></div>
      </div>
      
    )
  }
  export default Header;