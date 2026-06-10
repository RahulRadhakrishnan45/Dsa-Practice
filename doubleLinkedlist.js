class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}
class DLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    append(data) {
        const newNode = new Node(data)
        if(!this.head) {
            this.head = this.tail = newNode
        }else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
    }
    prepend(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }
    delete(val) {
        if(!this.head) return
        let curr = this.head
        while(curr) {
            if(curr.data === val) {
                if(curr === this.head) {
                    this.head = curr.next
                    if(this.head) this.head.prev = null
                }
                else if(curr === this.tail) {
                    this.tail = curr.prev
                    this.tail.next = null
                }else{
                    curr.next.prev = curr.prev
                    curr.prev.next = curr.next
                }
            }
            curr = curr.next
        }
    }
    reverse() {
        let curr = this.head
        let temp = null

        while (curr) {
            temp = curr.prev
            curr.prev = curr.next
            curr.next = temp
            curr = curr.prev
        }

        if (temp) {
            this.tail = this.head
            this.head = temp.prev
        }
    }
}