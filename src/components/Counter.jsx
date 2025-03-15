import { useState } from "react"
const Counter=()=>{
    const [counter,Setcounter]=useState(0)

    function inc(){
        Setcounter(counter+1)
    }
    function rs(){
        Setcounter(0)
    }
    function dec(){
        Setcounter(counter-1)
    }

    return(
        <div>
          <h1>{counter}</h1>
          <div>
          <button onClick={inc}>increment</button>
          <button onClick={rs}>reset</button>
          <button onClick={dec}>decrement</button>
          </div>
        </div>
    )
}
export default Counter;