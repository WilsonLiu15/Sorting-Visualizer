import React from "react"

// React Components 
import Legend from "../Legend/Legend"
import Stats from "../Stats/Stats"
import AlgorithmExplained from "../AlgorithmExplained/AlgorithmExplained"

import "./Details.scss"

const Details = (props) => {
    // Editing the length of columns based on screen size
    let detailsHeight = "20em"
    if (window.innerWidth > 900) {
        if (props.algorithm === "bubbleSort") {
            detailsHeight = "33em"
        } else if (props.algorithm === "heapSort") {
                detailsHeight = "40em"
        } else if (props.algorithm === "mergeSort") {
            detailsHeight = "62em"
        } else if (props.algorithm === "quickSort") {
            detailsHeight = "44em"
        } else if (props.algorithm === "insertionSort") {
            detailsHeight = "33em"
        } else {
            detailsHeight = "23em"
        }
    } else if (props.algorithm === "bubbleSort" && window.innerWidth > 500) {
        detailsHeight = "25em"
    } else {
        detailsHeight = "11em"
        if (props.algorithm === "bubbleSort") {
            detailsHeight = "16em"
        }
    }

    return (
        <div className = "details-container" style={props.details ? {display: "none"}: null}>
            <div className = "details-content details-legend" >
                <Legend />
            </div>
            <div className = "details-content details-stats" style = {{minHeight: detailsHeight}}>
                <Stats 
                    algorithm = {props.algorithm}
                />
            </div>
            <div className = "details-content details-description" style = {{minHeight: detailsHeight}}>
                <AlgorithmExplained 
                    algorithm = {props.algorithm}
                />
            </div>
        </div>
    )
}

export default Details