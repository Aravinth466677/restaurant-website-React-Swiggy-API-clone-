import React, { Component } from 'react';
import { userContext } from '../utils/userContext';
import UserClass from '../user/UserClass';
import { themeContext } from '../Header/ThemeContext';

class About extends Component {
  constructor() {
    super();
    console.log("parent constructor called");
  }

  componentDidMount() {
    console.log("parent componentDidMount called");
  }

  

  render() {
    return(
    <themeContext.Consumer >

      {
        ({theme})=>{
          const themestyle={
            background:theme==="light"?"white":"black",
            color:theme==="light"?"Black":"white",
          }
        
      
        return (
            <div style={{...themestyle}}>
       
              <userContext.Consumer>
              {({ userlogindetail }) => (
                <UserClass name={userlogindetail} location="Chennai" />
              )}
              </userContext.Consumer>

        
              <UserClass  location="Chennai" />
              <UserClass  location="Chennai" />
            </div>
    )
  }}
    </themeContext.Consumer>
    )
    
  }
}

export default About;
