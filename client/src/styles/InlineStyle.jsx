import React from 'react'
import "./inlineStyle.css"

const InlineStyle = () => {

    const headLineStule = {
        color:"red",
        fontFamily:"Roboto"
    }
  return (

    <>
    <h1 style={headLineStule}>InlineStyle</h1>
    <h2 style={{color:"green",background:"black"}}>subtitle</h2>
    <p className="red">pppp</p>
    </>
   
  )
}

export default InlineStyle