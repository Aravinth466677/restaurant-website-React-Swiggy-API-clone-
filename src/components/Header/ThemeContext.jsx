import React,{useContext,createContext,useState} from "react";

export const themeContext=createContext();

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState("light")
    const [sidebarvisible,setsidebarvisible]=useState(true)

    function toggleTheme(){
        setTheme((curr)=>curr==="light"?"dark":"light")
    }

    function sidebarview(){
        setsidebarvisible((curr)=>(curr===true?false:true))
    }
    return(
        <themeContext.Provider value={{theme,toggleTheme,sidebarview,sidebarvisible}}>
        {children}
        </themeContext.Provider>
    )
    

}

export const useTheme=()=>useContext(themeContext)