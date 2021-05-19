// function to swap 2 values 
/* a is the index of the first element
   b is the index of the second element 
   list the the array of the element */
const swap = (a, b, list) => {
    let temp = list[a]
    list[a] = list[b]
    list[b] = temp
}

const selectionSort = (blocks) => {
    const dupBlocks = blocks.slice()   // copy of the blocks to be manipulated 
    const order = []                  // array that stores an array of what blocks are manipulated at each step

    for (let i = 0; i <dupBlocks.length; i++) {            // iterate from the from of the list to the end 
        for (let j = i; j < dupBlocks.length; j++) {       // iterate from current position until end of list
            order.push([i, j, null, null])
            if (dupBlocks[i] > dupBlocks[j]) {             // compare current index with every element preceedign it 
                swap(i, j, dupBlocks)
                order.push([i, j, dupBlocks.slice(), null])
            }
        }
        order.push([null, null, null, i])
    }

    return order 
}

export default selectionSort