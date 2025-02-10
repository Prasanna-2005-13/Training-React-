import React from 'react'

function FuntionComponentComponent(props){
    console.log(props)//object
    let applyStyle = props.apply ? 'heading': ''
    let inlineStyle ={
        color:'Yellow',
        backgroundcolor:'red',
        fontSize:'50px'
    }
    return (
    <div>
        <h1 class={`${applyStyle} font-style`}> Welcome to React {props.clgname},{props.city}
        </h1>{props.children}
            <h2 style={inlineStyle}>Good Afternoon</h2>
    </div>
  )
}
export default FuntionComponent