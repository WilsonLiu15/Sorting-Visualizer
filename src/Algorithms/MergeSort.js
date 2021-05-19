const combine = (blocks, start, middle, end, order) => {
    // Creating a temp arra that acts as the organzied array 
    const temp = []

    // variables for the position in each array 
    // NOTE: variable for temp array is not needed as we know it starts at the 'start' array position
    let pos1 = start                  // starting index for the left side array 
    let pos2 = middle+1               // starting index for the right side array 

    // loop to compare the elements in the 2 arrays until one is "used up"
    while (pos1 <= middle && pos2 <= end) {
        order.push([pos1, pos2, null, null])

        // determine the smaller value and add it to the list 
        if (blocks[pos1] <= blocks[pos2]) {   
            temp.push(blocks[pos1])        
            pos1++
        } else {
            temp.push(blocks[pos2])
            pos2++
        }
    }

    // add the left array to the list if it has elements remaining 
    while (pos1 <= middle) {
        order.push([pos1, null, blocks.slice(), null])
        temp.push(blocks[pos1])
        pos1++
    }

    // add the right array to the list if it has element remaining 
    while (pos2 <= end) {
        order.push([null, pos2, blocks.slice(), null])
        temp.push(blocks[pos2])
        pos2++
    }

    // migrating the temp array over to the actual array 
    for (let i = start; i <= end; i++) {
        blocks[i] = temp[i - start]
        order.push([i, null, blocks.slice(), null])
    }
}

// function doing the actual sorting by recursivly breaking down halfs 
const mergeSortWorker = (blocks, start, end, order) => {
    // base case to know when algorithm has been completed 
    if (start >= end) {return}
    
    // variable to store where the middle position is 
    const middle = Math.floor((start+end)/2)        

    // use of recursion to break down elements to itself then build up
    mergeSortWorker (blocks, start, middle, order)
    mergeSortWorker (blocks, middle+1, end, order)
    combine (blocks, start, middle, end, order)
} 

// function that is simply called and makes use of other 2 functions 
// NOTE: this function is not actually doing the sorting (name may be misleading)
//       it acts more like a preparation to mergsort  
const mergeSort = (blocks) => {
    const dupBlocks = blocks.slice()   // copy of the blocks to be manipulated 
    const order = []                   // array that stores an array of what blocks are manipulated at each step

    // sorting the elements 
    mergeSortWorker (dupBlocks.slice(), 0, dupBlocks.length-1, order)

    // finalizing elements can only be done at end since unstable 
    for (let i = 0; i < dupBlocks.length; i++) {
        order.push([null, null, null, i])
    }

    return order;
}

export default mergeSort 