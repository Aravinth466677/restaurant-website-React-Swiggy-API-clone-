import { ResDetails } from "../utils/ResDetails";
import ResCards from "./ResCards";
import { useState } from "react";
import Shimmer from "./Shimmer";

const ResContainer=()=>{
    
    const [resList2,setresList2]=useState(ResDetails)
    return ResDetails.length === 0? <Shimmer />:(
      <div className='res_container'>
        <div className="filter_btn"><button  onClick={()=>{
            let resList=resList2.filter((res)=>res.ratings === 5)
            
            setresList2(resList)
            

        }}>top rated restaurant</button></div>
        <div className="res_card_container">
        {
        resList2.map((e)=> {
          return(
          <ResCards key={e.id||e.name} resName={e.name} resImg={e.img} dish={e.dishName} resLoc={e.location} ratings={e.ratings} />
          )
        })
      }
      </div>
      </div>
  
    )
  
  
  }

export default ResContainer;