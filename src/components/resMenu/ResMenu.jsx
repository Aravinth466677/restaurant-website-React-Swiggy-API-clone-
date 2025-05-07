import React,{useEffect ,useState} from 'react'
import { useParams } from 'react-router';
import { useTheme } from '../Header/ThemeContext';
const ResMenu = () => {
    const[resdata,setresdata]=useState(null);
    const[menu,setmenu]=useState(null);
        useEffect(()=>{
            fetchMenu()
        })
        const fetchMenu=async()=>{
            const data=await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0102&lng=76.9701&restaurantId="+param.id+"&query=Pizza&submitAction=ENTER&source=collection")

            const json=await data.json();

            setresdata(json?.data?.cards[2]?.card?.card?.info);
            console.log(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
            setmenu(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
            
        }
        const param=useParams();
        console.log(param);
        
    const {theme}=useTheme();

    const themestyle={
        background:theme==="light"?"white":"black",
        color:theme==="light"?"Black":"white"
      }

  return (
    <div style={themestyle}>
        <h1>{resdata?.name}</h1>
        <h4>cusines:{resdata?.cuisines}</h4>
        <h2>Menu:</h2>
        <ul>
            {
                menu?.map((e)=>{
                    return(
                        <li>{e?.card?.info?.name}</li>
                    )
                })
            }
        </ul>
       
    </div>
  )
}

export default ResMenu