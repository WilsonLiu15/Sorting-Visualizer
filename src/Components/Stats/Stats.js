import React from "react" 

import "./Stats.scss"

// function that allows you to compare multiple values instead of using
// multiple || 
const oneIsEqual = (beingCompared, expected) => {
    let isEqual = false;
    for (let i = 0; i < beingCompared.length; i++) {
        if (beingCompared[i] === expected) {
            return true;
        }
    }
    return isEqual
}



const Stats = (props) => {
    //----------------------------Determining the values for the stats based on the algorithm----------------------------------------------------//
    // value variables (default: bubble sort)
    let stability = "Stable"
    let space = "O(1)"
    let timeBest = "O(n)"
    let timeWorst = "O(n²)"
    let timeAverage = "O(n²)"

    if (oneIsEqual(["bubbleSort","mergeSort","insertionSort"], props.algorithm)) {
        stability = "Stable"
    } else if (oneIsEqual(["heapSort","quickSort","selectionSort"], props.algorithm)) {
        stability = "Unstable"
    }
    
    if (oneIsEqual(["bubbleSort","heapSort","insertionSort","selectionSort"], props.algorithm)) {
        space = "O(1)"
    } else if ("mergeSort" === props.algorithm) {
        space = "O(n)"
    } else if ("quickSort" === props.algorithm) {
        space = "O(log n)"
    }

    if (oneIsEqual(["heapSort", "quickSort", "mergeSort"], props.algorithm)) {
        timeBest = "O(n log n)"
    } else if (oneIsEqual(["bubbleSort","insertionSort"], props.algorithm)) {
        timeBest = "O(n)"
    } else if ("selectionSort" === props.algorithm) {
        timeBest = "O(n²)"
    }

    if (oneIsEqual(["heapSort", "quickSort", "mergeSort"], props.algorithm)) {
        timeAverage = "O(n log n)"
    } else if (oneIsEqual(["bubbleSort","insertionSort","selectionSort"], props.algorithm)) {
        timeAverage = "O(n²)"
    }

    if (oneIsEqual(["heapSort", "mergeSort"], props.algorithm)) {
        timeWorst = "O(n log n)"
    } else if (oneIsEqual(["bubbleSort","insertionSort","selectionSort", "quickSort"], props.algorithm)) {
        timeWorst = "O(n²)"
    }

    return (
        <div className = "stats-container">
            <h1 className = "stats-title">Stats</h1>
            <p className="stat">Stability:<span className="stat-value">{stability}</span></p>
            <p className="stat">Space Complexity:<span className="stat-value">{space}</span></p>
            <div className="stat stat-time-complexity">
                <p className="stat-time-complexity-title">Time Complexity:</p>
                <p className="stat-time-complexity-case">Best Case:<span className="stat-value">{timeBest}</span></p>
                <p className="stat-time-complexity-case">Average Case:<span className="stat-value">{timeAverage}</span></p>
                <p className="stat-time-complexity-case">Worst Case:<span className="stat-value">{timeWorst}</span></p>
                {props.algorithm === "bubbleSort" ? <p className="stat-time-complexity-case bubble-sort-note">Note: The optimal version of bubble sort was 
                not implemented in this application. Thus a run time of O(n) is not possible with the currently implemented algorithm. 
                To do so the use of a boolean variable is required.</p> : null}
            </div>
        </div>
    )
}

export default Stats