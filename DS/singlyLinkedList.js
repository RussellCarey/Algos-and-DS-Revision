class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
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

  // Add to linked list
  push (val) {
    const node = new Node(val)

    // If the list is length 0, set the tail and head as the same new node
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      // Else set the tails next to the new node
      this.tail.next = node
      // Set the taila as the new node
      this.tail = node
    }

    this.length++
  }

  // Remove from end of the linked list
  pop () {
    // No nodes in list? return undefined.
    if (this.length < 1) return undefined

    let current = this.head
    let newTail = current

    // newTail is always one behind current.
    // current is always pointing to the next IF there is a next.
    // If there is not a next, newTail will be current node.
    while (current.next) {
      newTail = current
      current = current.next
    }

    // Set the tail to the found, new tail.
    this.tail = newTail
    // Remove pointer to old tail
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.tail = null
      this.header = null
    }

    return current
  }

  shift () {
    if (length === 0) return undefined

    // Save the head
    const oldHead = this.head
    // Set the head as the next node (2nd)
    this.head = oldHead.next
    // Remove the link from the old head.
    oldHead.next = null
    length--

    return oldHead
  }

  unshift (val) {
    const newNode = new Node(val)

    if (this.head === null) {
      // If we have an empty list, set tail and head the same
      this.head = newNode
      this.tail = newNode
    } else {
      // Add node and set its next to the current head
      newNode.next = this.head
      // Set the new node as the head
      this.head = newNode
    }

    this.length++

    // Return list
    return this
  }

  get (index) {
    if (this.length - 1 < index || index < 0) return undefined

    let counter = 0
    let current = this.head

    // Loop through array with counter until we get to the desired index.
    while (counter !== index) {
      current = current.next
      counter++
    }

    // Return found node
    return current
  }

  insert (index, value) {
    if (this.length - 1 < index || index < 0) return undefined

    // Find the node of the one before what we need.
    const current = this.get(index - 1)
    if (!current) return false

    // Slot the node in the one before
    const newNode = new Node(value)
    // Set the new nodes next to the currents next.
    newNode.next = current.next
    // Set the currents next to the new node.
    current.next = newNode

    return newNode
  }

  set (index, value) {
    if (this.length - 1 < index || index < 0) return undefined

    // Get the node we want at index
    const current = this.get(index)
    if (!current) return false

    // Set the value to the new value
    current.val = value

    return newNode
  }

  remove (index) {
    if (this.length - 1 < index || index < 0) return undefined
    if (index === 0) return this.unshift()
    if (index === this.length - 1) return this.pop()

    // Get the node before the one we want.
    const prev = this.get(index - 1)
    // Save the removed node (index)
    const removed = prev.next

    // We set the previous nodes next to removeds next. Removing the connection to current.
    prev.next = removed.next
    this.length--

    return removed
  }

  reverse () {
    this.print()

    // Switch the head and the tail
    let curr = this.head
    this.head = this.tail
    this.tail = curr

    // Setup space for curr and previous (op counter for while)
    let prev = null
    let next = null
    let counter = 0

    // Mov along from the new head (tail) and switch the direction while saving the next we need to go to move to
    while (counter !== this.length) {
      // This works by at the end, saving CURRENT node as the PREV and setting CURR as the next node (moving along)
      // Then, at the start of the loop we SAVE next as the currents next and set the next to the PREVIOUS (swapping direction).
      // We save the next as we need to set that as the new curent to move along the chain.

      // Set next as the current next node.
      next = curr.next
      // Set curr.next to the previous node!
      curr.next = prev

      // Move along the two pointers.
      prev = curr
      curr = next
      counter++
    }

    this.print()
  }
}

const sll = new SinglyLinkedList()
sll.push(4)
sll.push(6)
sll.push(7)
sll.push(9)
sll.push(10)
sll.reverse()
