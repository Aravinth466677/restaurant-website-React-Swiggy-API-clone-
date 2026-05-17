// import { ResDetails } from "../utils/ResDetails";
import ResCards,{PromotedRestaurant} from "./ResCards";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import React from "react";
import { Link } from "react-router-dom";
import { userContext } from "../utils/userContext";
import { useTheme } from "../Header/ThemeContext";
import PriceRange from "./PriceRange";
import { apiUrl } from "../../config/api";
const ResContainer=()=>{

    const [pricefromPR,setpricefromPR]=useState("")
    console.log(pricefromPR[0]);
    
    
    
     
    const {theme}=useTheme()

    const themestyle={
      background:theme==="light"?"white":"black",
      color:theme==="light"?"Black":"white"
    }

    const PromotedRes=PromotedRestaurant(ResCards);
    
    const [resList2,setresList2]=useState([])

    useEffect(()=>{

      fetchData();
    },[])

    const fetchData = async () => {
      try {
        const data = await fetch(apiUrl("/api/restaurants"));
        const res = await data.json();
        
        const restaurantList = res?.data?.cards?.find(card => 
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
        if (restaurantList) {
          setresList2(restaurantList);
          console.log(restaurantList);
          setfilderedData(restaurantList);
        } else {
          console.warn("No restaurant data found");
          setresList2([]);
          setfilderedData([]);
        }
    
      } catch (err) {
        console.error("Error fetching data: ", err);
        setresList2([]);
        setfilderedData([]);
      }
    }


    function handlePrice(data){
      setpricefromPR(data)

      const filterByPrice=resList2.filter((res)=>{
        const resPrice=res?.info?.costForTwo;
        if (typeof resPrice!=="string") return false;
        const match=resPrice.match(/\d+/);
        const cost=match?parseInt(match):null;
        return cost>=data[0] && cost<=data[1]//Instead of using pricefromPR inside handlePrice, just use data directly, since that's the current value:
      })
      setfilderedData(filterByPrice)
    }
 
  
  

    
    
    const {userlogindetail,setName}=useContext(userContext)
   
    
    const [Search,setSearch]=useState("")
    const [filderedData,setfilderedData]=useState([])
    // resList2.length === 0? <Shimmer />:
    return resList2?.length === 0? <Shimmer />:(
      
      <div className='res_container' style={themestyle}>
        
        <div className="filter">
        <div className="search">
        
          <input type="text" value={Search} 
          onChange={(e)=>{setSearch(e.target.value)}  } className="searchText" 
          onKeyUp={()=>{
           let searchedResList=resList2.filter((res)=>res.info?.name.toLowerCase().includes(Search.toLowerCase()) )
          // console.log(resList3);
          
          setfilderedData(searchedResList)
          
           
          }} 
          placeholder="Search"></input>
          {/* <div className="fieldset"> */}
          <fieldset>
          <legend>Alter user</legend>
          <input type="text" value={userlogindetail} onChange={(e)=>{setName(e.target.value)}}/>
          </fieldset>
          {/* </div> */}
          
          <PriceRange reslist={resList2} dataToResCon={handlePrice}/>
          


        </div>
        
        


        <div className="filter_btn"><button  onClick={()=>{
            let FilderedresList = resList2.filter((res) => Number(res.info?.avgRatingString) > 4.4);


           console.log(FilderedresList)
           setfilderedData(FilderedresList)
            

        }}>top rated restaurant</button></div>
        </div>
        <div className="res_card_container">
        {
        filderedData.map((e)=> {
          return (
            <div className="cards" key={e.info?.id||e.id}>
              <Link to={'/menu/'+e.info?.id } className="text-decoration-none text-reset" key={e.info?.id||e.id}>
                  {
                    e.info?.locality ==="Saket"? (<PromotedRes resName={e.info?.name} resId={e.info?.id} resImg={e.info?.cloudinaryImageId  } 
                      dish={e.info?.cuisines}  ratings={e.info?.avgRatingString} cost={e.info?.costForTwo}/>):(<ResCards  resName={e.info?.name} resId={e.info?.id} resImg={e.info?.cloudinaryImageId  } 
                        dish={e.info?.cuisines}  ratings={e.info?.avgRatingString} cost={e.info?.costForTwo}/>)
                  }

          
          </Link>
          </div>
          )
        })
      }
      </div>
      </div>
  
    )
  
  
  }

export default ResContainer;
