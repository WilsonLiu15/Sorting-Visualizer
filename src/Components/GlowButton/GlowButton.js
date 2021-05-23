import React from "react"

import "./GlowButton.scss"

// Possible parameters include the color and the title and the width and height
const GlowButton = (props) => {

    const handleClick = () => {
        if (props.className === "randomizebtn") {
            return props.handleRandomize
        } else if (props.className === "sortbtn") {
            return props.handleSort
        } else if (props.className === "detailsbtn") {
            return props.handleDetails
        }
    }

    return (
        <span className="glowButton">
             <button 
                className={`myButton ${props.color}`} 
                onClick = {handleClick()}
                disabled = {props.sorting}> 
                    <i className={props.icon} id="icon"></i>{props.text}
             </button>
        </span>
    )
}

export default GlowButton 