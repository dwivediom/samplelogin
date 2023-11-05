import React from 'react'

function Input(props) {
//  {props= { type , holder }  props.type }

  return (
    <> 
     
      <input type={props.type} placeholder={props.holder}/> 
      
    </>
    
  )
}

export default Input