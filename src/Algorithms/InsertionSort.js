// function to swap 2 values 
/* a is the index of the first element
   b is the index of the second element 
   list the the array of the element */
const swap = (a, b, list) => {
    let temp = list[a]
    list[a] = list[b]
    list[b] = temp
}

const insertionSort = (blocks) => {
    const dupBlocks = blocks.slice()   // copy of the blocks to be manipulated 
    const order = []                   // array that stores an array of what blocks are manipulated at each step

    // start at the unsorted array (second indexed element (ie arr[1])) and go to end 
    for (let i = 1; i < dupBlocks.length; i++) {
        let j = i - 1                       // variable to hold index position when going back in list 
        let currentElem = dupBlocks[i]      // new element from unsorted list that needs to be sorted  

        // replace elements until previous element is smaller than currenElement
        order.push([null, null, dupBlocks.slice(), null])
        while (j >=0 && dupBlocks[j] > currentElem) {      
            swap(j, j+1, dupBlocks)
            order.push([j, j+1, null, null]) 
            order.push([j, j+1, dupBlocks.slice(), null])
            j-- 
        }
        order.push([j, j+1, null, null]) 
    }

    // since elements are added on, elements are only sorted when finished 
    for (let i = 0; i < dupBlocks.length; i++) {
        order.push([null, null, null, i]) 
    }
    return order
}

export default insertionSort 