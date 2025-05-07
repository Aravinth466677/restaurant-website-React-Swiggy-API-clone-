import React,{useState} from 'react'

const Child = ({getDataToParent}) => {
    const [data,setData]=useState("")

    function sentDataclick(){
        getDataToParent(data)
    }
  return (
    <div>
        <input type='text' value={data} onChange={e=>{setData(e.target.value)}} ></input>
        <button onClick={sentDataclick}>click</button>
    </div>
  )
}

export default Child