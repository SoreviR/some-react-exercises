import React from 'react'

const Rating = ({stars}) => {

    let starsFull = "";
    
    for (let i = 0; i < stars; i++) {
        starsFull += "⭐"
    }

    let starsEmpty = "";
    for (let i = 0; i < 5-stars; i++) {
        starsEmpty += "👀"        
    }
    
  return (
    <div>
      <div>{starsFull}{starsEmpty}</div>
    </div>
  )
}

export default Rating