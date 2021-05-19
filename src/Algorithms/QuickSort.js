// function to swap 2 values 
/* a is the index of the first element
   b is the index of the second element 
   list the the array of the element*/
   const swap = (a, b, list) => {
    let temp = list[a]
    list[a] = list[b]
    list[b] = temp

}

const partition = (dupBlocks, start, end, order) => {
    let pivotSpot = start 
    const pivot = start
    order.push([null, null, null, null, pivotSpot])
    for (let i = pivot+1; i <= end; i++) {
        order.push([i, pivot, null, null])
        if (dupBlocks[pivot] > dupBlocks[i]) {
            pivotSpot++
            order.push ([null, null, null, null, pivotSpot])
            swap (pivotSpot, i, dupBlocks)
            order.push ([pivotSpot, i, dupBlocks.slice(), null, pivotSpot])
        }
    }
    return pivotSpot
}

const quickSortWorker = (dupBlocks, start, end, order) => {
    // base case to stop recursive call 
    if (start >= end) {
        if (start === end) { //case of single block
            order.push ([null, null, null, start])
        }
        return
    }

    // choose pivot 
    const pivot = Math.floor((start+end)/2)

    // move pivot to temp location 
    swap (start, pivot, dupBlocks)
    order.push ([start, pivot, dupBlocks.slice(), null])

    // partition 
    const pivotSpot = partition(dupBlocks, start, end, order)

    // move pivot into correct place 
    swap (start, pivotSpot, dupBlocks)
    order.push ([start, pivotSpot, dupBlocks.slice(), null, null]) // shows the swap of the pivot to it's correct spot 
    order.push ([null, null, null, pivotSpot])                     // turns the pivot green 

    // repeat procedure for remainng halves 
    if (start <= pivotSpot-1) {
        quickSortWorker (dupBlocks, start, pivotSpot-1, order)
    } 

    if (pivotSpot+1 <= end) {
        quickSortWorker (dupBlocks, pivotSpot+1, end, order)
    }

    return 
}

const quickSort = (blocks) => {
    const dupBlocks = blocks.slice()   // copy of the blocks to be manipulated 
    const order = []                   // array that stores an array of what blocks are manipulated at each step

    quickSortWorker(dupBlocks, 0, dupBlocks.length - 1, order)

    return order 
}

export default quickSort 