import React,{useContext} from "react";
import { userContext } from "../utils/userContext";
import { FcRating } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
const ResCards=({resImg,resName,dish,ratings,resId,cost})=>{

  const{userlogindetail}=useContext(userContext)

  const style_item = {
    alignContent:"center",
    marginTop:"10px",
    marginBottom:"10px",
    padding: "0px"
  };
  const default_style={margin:"0px",padding:"0px"}
  
    // const {resImg,resName,dish,ratings,resLoc}=props;
    return(
      <div className='res_cards'>
        <div className="res_img">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resImg}`} alt="dish_img" />
        </div>
        <div className="res_text">
        <h4 style={default_style}>{resName}</h4>
        {/* <p>{resId}</p> */}
        <h6 style={style_item} ><FcRating />{ratings}</h6>
        <h6 className="cusines">{Array.isArray(dish) ? dish.join(", ") : "Not Available"}</h6>
        <p>cost:{cost}</p>
        <p>user:{userlogindetail}</p>
        </div>
      </div>
    )
  }
  export const PromotedRestaurant = (ResCards) => {
    return (props) => {
      return (
        <div style={{marginTop:"-21px"}}>
          <label>Promoted</label>
          <div style={{paddingTop:"0"}}><ResCards {...props}/></div>
        </div>
      );
    };
  };
  
  

  export default ResCards;