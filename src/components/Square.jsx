import React from 'react'
import { useState } from 'react'
const Square = (props) => {
   
  return (
   
          <button className="square" onClick={props.onSquareClick}  >{props.value}</button>
    
  )
}

export default Square;
