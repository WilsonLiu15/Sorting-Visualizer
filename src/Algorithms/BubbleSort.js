// function to swap 2 values 
/* a is the index of the first element
   b is the index of the second element 
   list the the array of the element */
const swap = (a, b, list) => {
    let temp = list[a]
    list[a] = list[b]
    list[b] = temp
}

const bubbleSort = (blocks) => {
    const dupBlocks = blocks.slice()   // copy of the blocks to be manipulated 
    const order = []                   // array that stores an array of what blocks are manipulated at each step

    for (let i = 0; i < dupBlocks.length; i++) {             // iterate through list i times, once for each item 
        for (let j = 0; j < dupBlocks.length-i-1; j++) {     // each iteration through list decrease by number of items already sorted 
            order.push([j, j+1, null, null])
            if (dupBlocks[j] > dupBlocks[j+1]) {             // swap adjacent items if first item is larger 
                swap(j, j+1, dupBlocks)
                order.push([j, j+1, dupBlocks.slice(), null])
            }
        }
        order.push([null, null, null, dupBlocks.length-i-1])
    }
    return order 
}

export default bubbleSort