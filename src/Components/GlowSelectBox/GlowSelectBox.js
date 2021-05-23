import React from "react"

import "./GlowSelectBox.scss"

const GlowSelectBox = (props) => {

    return (
        <div className="custom-select">
            <select 
                className="selectAlgorithm" 
                onChange= {props.handleAlgorithm} 
                value={props.algorithm}
                disabled={props.sorting}>
                    <option value='bubbleSort'>Bubble Sort</option>
                    <option value='heapSort'>Heap Sort</option>
                    <option value='insertionSort'>Insertion Sort</option>
                    <option value='mergeSort'>Merge Sort</option>
                    <option value='quickSort'>Quick Sort</option>
                    <option value='selectionSort'>Selection Sort</option>
            </select>
        </div>
    )
}

export default GlowSelectBox
