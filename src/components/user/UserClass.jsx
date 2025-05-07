import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
        console.log(`${this.props.name} constructor called`);
        //for state
        this.state={
            count:0,
            count2:100,
            userInfo:null
        }

          
    }
     async componentDidMount() {
         console.log(`${this.props.name} componentDidMount called`);
            const data=await fetch("https://api.github.com/users/Aravinth466677")
            const json=await data.json();
            console.log(json);
            this.setState(
                {userInfo:json}
            )
           
      }
      componentDidUpdate(){
        console.log("CDU");
        
      }
    render(){
        const {location}=this.props;
        const {count,count2,userInfo}=this.state;
        console.log(`${this.props.name} render called`);
        const {name}=this.props;
        return(
            <div className='user'>
                 Name: {
                    userInfo
                        ? name
                            ? name
                            : userInfo.login
                        : name
                }

                <h2>Location:{location}</h2>
                <h6>count:{count}</h6>
                <h6>count:{count2}</h6>
                <h5>Contact:</h5>
                <button onClick={()=>{
                    this.setState({
                        count:count+1,
                        count2:count2-1
                    })
                }}>for state</button>
            </div>
        )
    }
}
export default UserClass