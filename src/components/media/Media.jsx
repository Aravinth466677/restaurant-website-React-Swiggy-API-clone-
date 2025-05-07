import React,{useEffect,useState} from 'react'

const Media = () => {
    const [name,setName]=useState([])
    useEffect(()=>{
        const nameStore=localStorage.getItem("name");
        if(nameStore){
            setName(nameStore)
        }
    },[])
    
    localStorage.setItem("name",name)
  return (
    <div>
        <h1>hello {name}</h1>
        <input placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}></input>
    </div>
  )
}

export default Media