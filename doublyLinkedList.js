class Node {
  constructor (val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  print () {
    let counter = 0
    let curr = this.head
    let arr = []

    while (counter < this.length) {
      arr.push(curr.val)
      curr = curr.next
      counter++
    }

    console.log(arr)
  }

  push (val) {
    const newNode = new Node(val)

    // Is it a new list?
    if (this.length < 1) {
      this.head = newNode
      this.tail = newNode
    } else {
      // Set the new nodes prev to the tail
      newNode.prev = this.tail
      // Set the current tails next to new node
      this.tail.next = newNode
      // Set the tail to the new
      this.tail = newNode
    }

    this.length++
    return newNode
  }

  pop () {
    if (!this.head) return undefined

    const currTail = this.tail
    if (this.length < 2) {
      // If length is one, remove all nodes
      this.head = null
      this.tail = null
    } else {
      // Set the current to tail to the prev old tail
      this.tail = currTail.prev
      // Remove link TO old tail
      this.tail.next = null
      // Remove link for old tail to previous
      currTail.prev = null
    }
    this.length--
  }

  shift () {
    if (this.length < 1) return undefined

    // If length is one, set head and tail to null.
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      // save curr head
      const curr = this.head
      // Set the head to the second
      this.head = this.head.next
      // Remove link from second to head
      curr.next.prev = null
      // Remove link from old head to second
      curr.next = null
    }

    this.length--
  }

  unshift (val) {
    const newNode = new Node(val)
    if (length < 1) {
      this.head = newNode
      this.tail = newNode
    } else {
      // Set new node next to head
      newNode.next = this.head
      // Set new second prev to the node
      this.head.prev = newNode
      // Set head to new node
      this.head = newNode
    }
    this.lenth++
  }

  get (index) {
    // Check for correct index values
    if (index >= this.length) return undefined
    if (index < 0) return undefined

    // IF we are looging at first half of strcture
    if (index <= Math.floor(this.length)) {
      let curr = this.head
      let counter = 0

      // Loop through FROM head to index
      while (counter !== index) {
        curr = curr.next
        counter++
      }

      return curr
    } else {
      let curr = this.tail
      let counter = this.length - 1

      // Loop through FROM tail to index
      while (counter !== index) {
        curr = curr.prev
        counter++
      }

      return curr
    }
  }

  set (index, val) {
    const node = this.get(index)
    if (node !== null) {
      node.val = val
      return node
    }

    return false
  }

  insert (index, val) {
    if (index < 0 || index > this.length - 1) return undefined
    if (index === 0) return this.unshift(val)
    if (index === this.length - 1) return this.push(val)

    const prev = this.get(index - 1)
    const next = this.get(index + 1)
    const newNode = new Node(val)

    prev.next = newNode
    newNode.prev = prev

    next.prev = newNode
    newNode.next = prev

    return newNode
  }

  remove (index) {
    if (index < 0 || index > this.length - 1) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop(val)

    const prev = this.get(index - 1)
    const next = this.get(index + 1)
    const curr = this.get(index)

    prev.next = next
    next.prev = prev
    curr.next = null
    curr.prev = null

    return curr
  }

  reverse () {
    // Print array version of list
    this.print()

    // Save current head to switch tail andhead
    const currHead = this.head
    this.head = this.tail
    this.tail = currHead

    // Set curr to head (old tail)
    let curr = this.head
    let counter = 0

    while (counter < this.length) {
      // Save the prev and next of the current element
      const prevCurr = curr.prev
      const nextCurr = curr.next
      // Swap the next and prev of current
      curr.next = prevCurr
      curr.prev = nextCurr

      // Go to the next node
      curr = curr.next
      counter++
    }

    this.print()
    return this
  }
}

const dll = new DoublyLinkedList()
dll.push(0)
dll.push(1)
dll.push(2)
dll.push(3)
dll.push(4)

dll.reverse()
