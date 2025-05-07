import React from 'react'
import { useRouteError } from 'react-router'
const Error = () => {
  return (
    <div >
        <h1>OOPs! something went wronng...</h1>
        <h4 className='bg-danger '>{useRouteError().status}</h4>
    </div>
  )
}

export default Error