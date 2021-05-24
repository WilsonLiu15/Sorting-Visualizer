// Importing react and any other packages 
import React, {useState, useEffect} from "react"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Blocks from "./Components/Blocks/Blocks"


// Algorithms 
import bubbleSort from "./Algorithms/BubbleSort"
import heapSort from "./Algorithms/HeapSort"
import insertionSort from "./Algorithms/InsertionSort"
import mergeSort from "./Algorithms/MergeSort"
import quickSort from "./Algorithms/QuickSort"
import selectionSort from "./Algorithms/SelectionSort"

const App = () => {
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//

  // function that randomizes a sorted list 
  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) { 
    
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
  }

  // Function that generates a array from 1 to length 
  const createNewArray = (number) => {
    let len = Number(number)
    const tempBlocks = []               // create new array and fill it 
    for (let i = 1; i < (len+1); i++) {
      tempBlocks.push(i) 
    }   
    shuffleArray(tempBlocks)                   // randomize the array and then set it 
    setBlocks(tempBlocks)
    setSorting(false)
    setIsSorted(false)
    setSortedValue([])
  } 

  //-------------------------------------------------------------------------------------------------------------//
  //-------------------------------------------------------------------------------------------------------------//

  //--------------------------------------creating all useState hooks 
  const [algorithm, setAlgorithm] = useState(()=> "bubbleSort")                // Hook that controls which algorithm user selects 
  const [blocks, setBlocks] = useState(() => [])                               // Hook controlling the array of blocks 
  const [compare, setCompare] = useState(() => [])                             // Hook controlling which 2 blocks are being compared
  const [swap, setSwap] = useState(() => [])                                   // Hook controlling when 2 blocks need to be swapped             
  const [sortedValue, setSortedValue] = useState(() => [])                     // Hook that determines which values have been sorted 
  const [sorting, setSorting] = useState(() => false)                          // Hook used to prevent glitches from buttons when sorting 
  const [isSorted, setIsSorted] = useState(() => false)                        // Hook used to prevent resorting if already sorted
  const [speed, setSpeed] = useState(() => 100)                                // Hook used to control the speed of the sorting
  const [size, setSize] = useState(() => 40)                                   // Hook used to control the number of elements in the array
  const [quickIndex, setQuickIndex] = useState(() => null)                     // Hook used to show moving index for quicksort 
  const [hideDetails, setHideDetails] = useState(() => true)                          // Hook used to open and close the details menu 

  // Loading the inital array of blocks 
  if (blocks.length === 0) {
    createNewArray(size)
  }

  // Event handler to change the algorithm value when triggered by selection change
  const handleAlgorithm = (event) => {
    setAlgorithm(event.target.value)
  }

  // Event handler to open and close details menu 
  const handleDetails = () => {
    setHideDetails(!hideDetails)
  }

  // Event handler to randomize the array when button is pressed 
  const handleRandomize = () => {
    setSortedValue([])
    createNewArray(size)
    setIsSorted(false)
    setSorting(false)
  }

  // Function to update the speed when user adjusts it 
  const handleSpeed = (value) => {
    setSpeed(value)
  }

  // Function to update the speed when user adjusts it 
  const handleSize = (sizePassed) => {
    let restrainedSize
    if (sizePassed < 5) { 
      restrainedSize = 5
    } else if (sizePassed > 100) {
      restrainedSize = 100
    } else {
      restrainedSize = sizePassed
    }
    setSize(restrainedSize)
  }

  // Function to visually display the sorting 
  const handleSort = () => {
    // do not sort if array is already sorted 
    if (isSorted) {return}
  
    // The Immdediately invoked function expression acts like a while loop 
    // that stops once all stored values have been executed 
    const sortArray = (values) => {
      (function loop(i) {
          setTimeout(function () {
            // obtain the current sorted "frame" of blocks 
            const [j, k, arr, inPlace, quickIndex] = values[i]      
            setCompare([j, k])
            setSwap([])

            // when the end of one iteration is met update the sorted compoennts 
            if(inPlace !== null){
              setSortedValue((prevState) => (
                // Take the previous state(s) and add on new state
                [...prevState, inPlace]    
              ))
            }

            // when array is valid update the display and store the values being swapped
            if(arr){
              setBlocks(arr)
              if(j !== null || k != null)
                setSwap([j, k])
            }

            // continue to sort until end of iterations
            if (++i < values.length){
              loop(i)
            } else {
              setSorting(false) 
            }

            // setting the quick sort index that will be swapped 
            if (quickIndex >= 0) {
              setQuickIndex(quickIndex)
            }

          }, speed)       
      })(0)
    }

    // determine which algorithm to use when sorting 
    if (algorithm === "bubbleSort") {sortArray(bubbleSort(blocks))}
    else if (algorithm === "heapSort") {sortArray(heapSort(blocks))}
    else if (algorithm === "insertionSort") {sortArray(insertionSort(blocks))}
    else if (algorithm === "selectionSort") {sortArray(selectionSort(blocks))}
    else if (algorithm === "mergeSort") {sortArray(mergeSort(blocks))}
    else if (algorithm === "quickSort") {sortArray(quickSort(blocks))}
    
    setSorting(true)
    setIsSorted(true)
  }

  // Generating random array every time the length is changed by th user
	useEffect(() => {
    // usage of keyboard numerical input causes a unintended error (ie if the user enters a value below 
    // 5 then the array will readjust to 5, but any subsequent typed values will be a multiple of itself, 
    // mulipled by 10. Ex 10 becomed 100, 15 becomes 150, etc). As a solution the mod 100 has been introduced
    // to avoid this error. This was the solution chosen as I was not able to determine the root cause.
    // The value of size is within range and is what I expect, but it still results in an error. All values passed 
    // into the createNewArray are also between 1 and 100. In addition for the function handleSize, I have explicitly 
    // implemented an if statement that filters all invalid values and yet vlaue for the size of the array still 
    // surpases 100 without the %100. 
    // UPDATE: error was the value passed into the createNewArray(), I had assumed the value was an integer, but it was not. When I 
    // added one to the value I got itself x10 +1 (ie 20 -> 201) but since the for loop starts at 1 I saw 200
      createNewArray(size)
	}, [size])


  return (
    <div className ="App" style={{
        display: 'grid', 
        boxSizing: 'border-box', 
        minHeight: '100%',
        backgroundColor: '#0b1616'
      }}>
      <Navbar 
        algorithm = {algorithm}
        handleAlgorithm = {handleAlgorithm}
        handleDetails = {handleDetails}
        handleRandomize = {handleRandomize}
        handleSort = {handleSort}
        handleSpeed = {handleSpeed}
        handleSize = {handleSize}
        sorting = {sorting}
        speed = {speed}
        size = {size}
      />
      <Blocks 
        algorithm = {algorithm}
        blocks = {blocks}
        compare={sorting && compare}
        details = {hideDetails}
				swap={sorting && swap}
        sortedValue = {sortedValue} 
        quickIndex = {quickIndex}
      />
      <Footer/>
    </div>
  )
} 

export default App;

