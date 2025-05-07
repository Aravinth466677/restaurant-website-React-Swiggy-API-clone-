import React,{useState} from 'react'

const CustomerAdd = () => {
    const [input,setInput]=useState("")
    const [customer,setCustomer]=useState([])
    function display(){
        if(input){
          setCustomer((prev)=>[prev,input])
        }
        console.log(customer);
        
    }
  return (
    <div>
        <h2>add customer</h2>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={display}>Add</button>
    </div>
  )
}

export default CustomerAdd