import { useContext} from "react";
import { userContext } from "../utils/userContext";
import { Link } from "react-router-dom";
const NavLinks=()=>{

  const {userlogindetail}=useContext(userContext)
  // console.log(userlogindetail);
  

  
    return(<>
     <ul className='navlinks'>
       <li><Link to="/" className="text-decoration-none text-reset">Home</Link></li>
       <li><Link to="/about" className="text-decoration-none text-reset">About us</Link></li>
       <li><Link to="/contact" className="text-decoration-none text-reset">Contact</Link></li>
       <li><Link to="/media" className="text-decoration-none text-reset">Media</Link></li>
       <li>user:{userlogindetail}</li>
     </ul>
     
     </>
    )
}
export default NavLinks;