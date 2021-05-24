// function to swap 2 values 
/* a is the index of the first element
   b is the index of the second element 
   list the the array of the element */
const swap = (list, a, b) => {
    let temp = list[a]
    list[a] = list[b]
    list[b] = temp
}

// builds a max heap, which is a type of tree where the children nodes are less than the parent node
const buildMaxHeap = (dupBlocks, order) => {
    // iterate through the nodes that have children 
    // NOTE: we start at Math.floor(n/2), where n is the length of the array 
    //       this value provides us with the last node that could have children, 
    //       not the last node in the array
    // Note: when dealing with heaps, array indexes, by convention, start at 1 and thus why the length 
    //       doesn't have 1 subtracted from it
    for (let i = Math.floor(dupBlocks.length / 2); i >= 0; i--) {
        heapify(dupBlocks, i, dupBlocks.length, order)
    }
}

// --------------------------------------Heapify Explained----------------------------------//
// Given a speciifc node heapify swaps provided node and subsequent nodes until all nodes under 
// the provided node are in a max heap, for out purposes 
//                  10
//            12        38
//         3    9     39    8
//       1  2  4 5  40 37  7  6
// If the value 38 was substituted in then the 39, 40 and 38 would be manipulated until they were   
// a max heap. The rs (ie 8, 7, 6) is already a max heap thus the new tree would be 
//                  10
//            12        40
//         3    9     39    8
//       1  2  4 5  38 37  7  6
const heapify = (dupBlocks, startNode, endNode, order) => {
    let leftNode = 2 * startNode + 1;
    let rightNode = leftNode + 1;
    let maxVal = startNode

    if (leftNode < endNode && dupBlocks[leftNode] > dupBlocks[maxVal]) {
        maxVal = leftNode;
    }

    if (rightNode < endNode && dupBlocks[rightNode] > dupBlocks[maxVal])     {
        maxVal = rightNode;
    }

    if (maxVal !== startNode) {
        swap(dupBlocks, startNode, maxVal)
        order.push([startNode, maxVal, null, null])
        order.push([startNode, maxVal, dupBlocks.slice(), null])
        heapify(dupBlocks, maxVal, endNode, order)
    }
}

const heapSort = (blocks) => {
    const dupBlocks = blocks.slice()   // copy of the blocks to be manipulated 
    const order = []                   // array that stores an array of what blocks are manipulated at each step

    // build the max heap 
    buildMaxHeap(dupBlocks, order)

    // continue to create max heaps until 1 element
    for (let i = dupBlocks.length - 1; i >= 0; i--) {
        // replace greatest element with last not sorted element and ignore last element 
        order.push([0, i, null, null])
        swap(dupBlocks, 0, i)
        order.push([0, i, dupBlocks.slice(), null])
        order.push([null, null, null, i])

        // move top element to result in max heap (ie heapify)
        heapify (dupBlocks, 0, i, order)
    }

    order.push([null, null, dupBlocks.slice(), null])
    return order 
}

  export default heapSort