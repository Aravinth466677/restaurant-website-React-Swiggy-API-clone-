import React from 'react'
import './sidebar.css'
import { Link } from "react-router-dom";
import { useTheme } from '../Header/ThemeContext';
const SideBar = () => {
    const {sidebarvisible,sidebarview}=useTheme()

    const style={
        marginLeft:sidebarvisible===true? "0":"-450px"
    }
  return (
    <div className='sidebar' style={style}>
        <ul>
            <li onClick={sidebarview}><Link to="/" className="text-decoration-none text-reset">Home</Link></li>
            <li onClick={sidebarview}><Link to="/about" className="text-decoration-none text-reset">About us</Link></li>
            <li onClick={sidebarview}><Link to="/contact" className="text-decoration-none text-reset">Contact</Link></li>
            <li onClick={sidebarview}><Link to="/media" className="text-decoration-none text-reset">Media</Link></li>
            
        </ul>
    </div>
  )
}

export default SideBar