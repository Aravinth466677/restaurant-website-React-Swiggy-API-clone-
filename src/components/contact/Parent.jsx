import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [dataFromChild,setDataFromChild]=useState("")

    function handleData(data){
        setDataFromChild(data)
    }
  return (
    <div>
        data from child:{dataFromChild}
         <Child getDataToParent={handleData} />{/* //actually it use call back function to get data from child to parent by sending function to get data istead of data as prop*/}
    </div>
  )
}

export default Parent