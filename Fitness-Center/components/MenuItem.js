import React from 'react'

export default function MenuItem({image, name, disc}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{disc}</p>
      
    </div>
  )
}
