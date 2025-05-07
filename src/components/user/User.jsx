import React from 'react'

const User = (props) => {
  return (
    <div className='user'>
        <h1>Name:{props.name}</h1>
        <h2>Location:Trichy</h2>
        <h5>Contact:1234567890</h5>
    </div>
  )
}

export default User