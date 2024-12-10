import React from 'react'
import "./Card.css"

const Card = ({Emoji,heading,detail})=> {
  return (
    <div className="card">
        <img src={Emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className='c-button'>LEARN MORE</button>
    </div>
  )
}

export default Card
