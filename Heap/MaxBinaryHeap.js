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
        console.log(this.heap)
        finish = true
      }
      cInd = pInd
    }
  }
}

const heap = new MaxBinaryHeap()
heap.insert(10)
heap.insert(5)
heap.insert(52)
heap.insert(51)
heap.insert(22)
heap.insert(44)
