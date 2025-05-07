import React from 'react'
import './Footer.css'
import { BsFillPersonFill } from "react-icons/bs";
import { FaInstagram,FaLinkedin,FaFacebookSquare   } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='person'><BsFillPersonFill style={{width:"150px",height:"150px"}}/></div>
      <div className='about'>
        
        
          <h1>
            Say wow..
          </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quos asperiores tenetur error iusto? Assumenda, perspiciatis autem libero non amet ducimus accusamus reiciendis similique, minus numquam quidem delectus odio, doloribus voluptatem ullam doloremque maiores nulla porro dolorum optio. Alias, quibusdam.</p>

          <div className='logos'>
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedin />
            <FaFacebookSquare />
            <TfiEmail />
          </div>
        </div>
        
      
    </div>
  )
}

export default Footer