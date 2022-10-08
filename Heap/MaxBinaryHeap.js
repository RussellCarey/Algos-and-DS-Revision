class MaxBinaryHeap {
  constructor () {
    this.heap = []
  }

  insert (value) {
    // Push value to the end
    this.heap.push(value)
    if (this.heap.length < 3) return

    // Check parent and curr val
    let finish = false
    let cInd = this.heap.length - 1

    // If curr is more than parent, swap them.
    while (!finish) {
      const pInd = Math.floor((cInd - 1) / 2)
      if (this.heap[cInd] > this.heap[pInd]) {
        const curr = this.heap[cInd]
        this.heap[cInd] = this.heap[pInd]
        this.heap[pInd] = curr
      } else {
        console.log('Updated heap')
        console.log(this.heap)
        finish = true
      }
      cInd = pInd
    }
  }

  extract () {
    console.log('Starting extract')
    console.log(this.heap)

    if (this.heap.length === 1) return this.heap.pop()

    // Swap first value with the last value
    const head = this.heap[0]
    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap[this.heap.length - 1] = head

    // Pop last values so we can return it at the end.
    const extracted = this.heap.pop()

    // Sink down
    // Parent index starts at 0 - (2 * i) + 1 left child and right is plus 2
    let currRoot = 0

    while (currRoot !== null) {
      // if left or right child is greater than the element, swap. If both are larger swap with the largest
      let left = currRoot * 2 + 1
      let right = currRoot * 2 + 2

      // The child becomes the new parent index
      let largestValueInd = this.heap[left] > this.heap[right] ? left : right

      if (this.heap[largestValueInd] > this.heap[currRoot]) {
        // Swap the parent with the largest child if needed.
        const currRootVal = this.heap[currRoot]
        this.heap[currRoot] = this.heap[largestValueInd]
        this.heap[largestValueInd] = currRootVal

        // Set new root as the swapped child index.
        currRoot = largestValueInd
      } else {
        // If it cant find a child, or I set it as null. Finish.
        currRoot = null
      }
    }

    console.log('heap')
    console.log(this.heap)
    console.log(`Extract: ${extracted}`)
    return extracted
  }
}

const heap = new MaxBinaryHeap()

for (let i = 0; i < 100; i++) {
  heap.insert(Math.ceil(Math.random() * 1000))
}

for (let i = 0; i < 50; i++) {
  heap.extract()
}
