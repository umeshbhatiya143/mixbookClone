import React from 'react'
import './Card.css'

const Card = ({photo}) => {
  return (
      <div className="card">
          <img src={photo} alt="" />
          
      </div>
   
  )
}

export default Card