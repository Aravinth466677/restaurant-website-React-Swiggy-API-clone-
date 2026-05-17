import React,{useEffect ,useState} from 'react'
import { useParams } from 'react-router';
import { useTheme } from '../Header/ThemeContext';
import { apiUrl } from '../../config/api';
const ResMenu = () => {
    const[resdata,setresdata]=useState(null);
    const[menu,setmenu]=useState(null);
    const param=useParams();

        useEffect(()=>{
            const fetchMenu=async()=>{
                const data=await fetch(apiUrl("/api/menu?id="+param.id))
    
                const json=await data.json();
    
                setresdata(json?.data?.cards[2]?.card?.card?.info);
                console.log(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
                setmenu(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
                
            }

            fetchMenu()
        },[param.id])
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
