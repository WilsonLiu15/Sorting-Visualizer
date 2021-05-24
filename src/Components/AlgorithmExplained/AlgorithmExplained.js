import React from "react"
import binaryHeap from "./binaryheap.PNG"
import mergesort from "./mergesort.webp"

import "./AlgorithmExplained.scss" 

const AlgorithExplained = (props) => {
    return (
        <div className = "algorithm-explained-container">
            <h1 className = "description-title">Algorithm Explained</h1>
            <div className = "details-steps-container"  style={props.algorithm !== "bubbleSort" ? {display: "none"} : null}>
                <p className = "details-bubble-sort">
                    <b>Bubble Sort </b>is a simple algorithm that is based of swaping the largest value to the end of the array. Since each incrementation only moves one element 
                    (ie the largest element) to the end of the array that means that there needs to be a total of [list.length() - 1] iterations. Since we know that each iteration 
                    brings the largest element to the end of the list, we can make this algorithm a little more efficent by making the end point the last element that was sorted 
                    that is if the end of the list was j = [lengthOfList - 1] then each iteration through j would need to decrease by 1.            
                </p>
                <p className = "details-description-title">General Steps</p>
                <ol className = "details-description-steps">
                    <li className="first-step">Start at left-most element (ie i = 0)</li>
                    <li className="second-step">Compare adjacent elements (ie i and i+1)</li>
                    <li className="third-step">If first element is greater than second element then swap the elements</li>
                    <li className="fourth-step">Increment i by 1 and repeat steps 1 to 4 until you reach the end of the list, minus the sorted blocks if any</li>
                    <li className="fifth-step">Repeat steps 1 to 4, each time reducing the end position by 1</li>
                </ol>
            </div>
            <div className = "details-steps-container" style={props.algorithm !== "heapSort" ? {display: "none"} : null}>
                <p className = "details-heap-sort">
                    <b>Heap Sort </b> is an algorithm that makes use of a heap, so before I explain how it works I have attached a picture of a heap/binary tree for those who need a refresher.
                    <img src = {binaryHeap} alt="heap Image" className = "heapImg"/>
                    In addition to knowing what a heap is, you will also need to know some terminology:
                </p>
                    <ul className = "heapTerms">
                        <li>Max Heap: heap where the child nodes are less than the parent node</li>
                        <li>Root: First (top) node in the entire heap</li>
                    </ul>
                <p>
                    Note: Heap Sort is an algorithm that is a little different from the other algorithms in this application. That is, in order to understand how 
                    it works requires the visual aid of a binary tree. Thus you will not be able to follow along to how it is sorting, but you will be able to see the speed.
                </p>
                <p className = "details-description-title">General Steps</p>
                <ol className = "details-description-steps">
                    <li className="first-step">Turn array into a max heap</li>
                    <li className="second-step">Swap the root with the final element</li>
                    <li className="third-step">Decrease array length by 1</li>
                    <li className="fourth-step">Repeat Steps 1 to 3 until 1 node is left</li>
                </ol>
            </div>
            <div className = "details-steps-container" style={props.algorithm !== "insertionSort" ? {display: "none"} : null}>
                <p className = "details-insertion-sort">
                    <b>Insertion Sort </b>is an algorithm that is based on how you may sort a pile of cards. You would pick up one card and know it to be sorted, and then you would pick up 
                    a second card and place it either in front or behind the first card. Each time you add a new card you need to iterate through the sorted stack until you find the 
                    correct spot. The concept is replicated with Insertion Sort. That is, you start at the left most element and then iterate to the end of the array, each time adding the 
                    next element. In order to place the new element (letting the elements position be i) in the correct spot you need to compare i and i-1, and if the i-1 element is greater than 
                    i then you know you need to move further back into the array (or stack of cards).
                </p>
                <p className = "details-description-title">General Steps</p>
                <ol className = "details-description-steps">
                    <li className="first-step">Start with left-most element</li>
                    <li className="second-step">Add next element into array being sorting</li>
                    <li className="third-step">Compare current element (ie i) and previous element (ie i-1)</li>
                    <li className="fourth-step">If previous element is greater than current element then swap elements and decrease i by 1</li>
                    <li className="fifth-step">When previous element is smaller than current element then stop</li>
                    <li className="sixth-step">Repeat step 2 to 5 until end of array is reached</li>
                </ol>
            </div>
            <div className = "details-steps-container" style={props.algorithm !== "mergeSort" ? {display: "none"} : null}>
                <p className = "details-merge-sort">
                    <b>Merge Sort </b>is a divide and conquer sorting algorithm. It makes use of recursion by repeatedly splitting the array into 2 halves (left half and right half)
                    until the list is comprised of single elements. After, it will go back and recombine each half into sorted order. In order to combine the lists back into sorted order
                    it requires a temporary array. Merge Sort will iterate through the arrays being combined, with an index at the start of both arrays. As each element is being compared 
                    it will take the smaller element and copy it into to temporary array. Then the index for the smaller elements array will increase by 1. If one of the arrays is 
                    completely sorted then it will simply add the remaining array onto the temporary array. Once the temporary array is filled it will replace the appropriate spots in
                    the original array. 
                    <img src={mergesort} alt="mergesort example" className = "mergeImg"/> 
                    Note: Since splitting a list in half doesn't change the list itself, the visual component will only show the list being merged back together. 
                </p>
                <p className = "details-description-title">General Steps</p>
                <ol className = "details-description-steps">
                    <li className="first-step">Split List in half</li>
                    <li className="second-step">Repeat step 1 with subsequent lists until lists become length 1</li>
                    <li className="third-step">Combine lists</li>
                        <ol>
                            <li>Create a temporary array</li>
                            <li>Start at left side of both lists being compared</li>
                            <li>Compare values and copy smaller array into temporary array</li>
                            <li>Increment index of array with smaller element by 1</li>
                            <li>Repeat sub-steps 1 to 4 until array is sorted</li>
                        </ol>
                    <li className="fourth-step">Repeat step 3 until list is sorted</li>
                </ol>
            </div>
            <div className = "details-steps-container" style={props.algorithm !== "quickSort" ? {display: "none"} : null}>
                <p className = "details-quick-sort">
                    <b>Quick Sort </b>is a divide and conquer algorithm that picks a random element, called the pivot, and then places it off to the side. Once the pivot has 
                    been determined, the algorithm needs to determine where the pivot needs to go. In order to find this spot, an index (let's use j) is placed where the first element 
                    occurs and a second index (let's use i) is also placed at that spot. As i iterates through the current list, at each element the i element and the pivot will be compared. If the 
                    pivot is greater than the i element, the j element and the i element will swap. At this point we know that anything to the left of the j element must be smaller than the pivot.
                    This means that the position of j must increment by 1 so that there is at least 1 value less than the pivot to the left of itself. The algorithm will continue this procedure to 
                    the end until we have found the pivots spot and can move it there. We are then left with two sides where the values are either less than the pivot or greater than the pivot.
                    We can simply use recursion to perform what we just did with the remaining two halves and subsequent halves. 
                </p>
                <p className = "details-description-title">General Steps</p>
                <ol className = "details-description-steps">
                    <li className="first-step">Choose a random value as the pivot</li>
                    <li className="second-step">Swap the first element and the pivot element</li>
                    <li className="third-step">Create a index at the element position</li>
                    <li className="fourth-step">Iterate through the array comparing the pivot to the other element values</li>
                    <li className="fifth-step">If the other element values are less than the pivot then swap them with the index position and increment the index value by 1</li>
                    <li className="sixth-step">Once end of array has been met, replace pivot with index value leaving you with a left and right half</li>
                    <li className="seventh-step">Repeat steps 1 to 6 for the left and right half</li>
                </ol>
            </div>
            <div className = "details-steps-container" style={props.algorithm !== "selectionSort" ? {display: "none"} : null}>
                <p className = "details-selection-sort">
                    <b>Selection Sort </b>is a fairly simple algorithm. The main idea of the algorithm is to pick and choose. That is, you start at the left-most element 
                    and iterate through the list. As you iterate through the list, compare each element with the left-most element and swap them if the element is smaller
                    than the left-most element. At the end of each iteration, the left most element will be in the correct spot. Then each time this is repeated just increase 
                    where you start by one. 
                </p>
                <p className = "details-description-title">General Steps</p>
                <ol className = "details-description-steps">
                    <li className="first-step">Start at left most element</li>
                    <li className="second-step">Iterate to the end of the list, replacing the left most element with a element if it is smaller</li>
                    <li className="third-step">Repeat steps 1 and 2, each time increasing the starting the position by 1</li>
                </ol>
            </div>
        </div>
    )
}

export default AlgorithExplained