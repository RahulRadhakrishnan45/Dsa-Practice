//single linkedlist

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }
    append(data) {
        const newNode = new Node(data)
        if(this.head === null) {
            this.head = newNode
            return
        }
        let curr = this.head
        while (curr.next !== null) {
            curr = curr.next
        }
        curr.next = newNode
    }
    prepend(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }
     delete(val) {
         if(this.head === null) return
         if(this.head.data === val) {
             this.head = this.head.next
             return
         }
         let curr = this.head
         while(curr.next !== null && curr.next.data !== val) {
             curr = curr.next
         }
         curr.next = curr.next.next
     }
     print() {
         let result = ''
         let curr = this.head
         while (curr !== null) {
             result += curr.data + '->'
             curr =  curr.next
         }
         console.log(result + 'null')
     }
}
const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.print()
list.prepend(5)
list.print()
list.delete(2)
list.print()

// circular linked list 

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class CircularLinkedList {
    constructor() {
        this.head = null
    }
    append(data) {
        const newNode = new Node(data)
        if(!this.head) {
            this.head = newNode
            newNode.next = this.head
            return
        }
        let curr = this.head
        while (curr.next !== this.head) {
            curr = curr.next
        }
        curr.next = newNode
        newNode.next = this.head
    }
    print() {
        if(!this.head) return 
        let result = ''
        let curr = this.head
        do {
            result += curr.data + '->'
            curr = curr.next
        } while ( curr !== this.head)
        console.log(result + 'back to head')
    }
}
const list = new CircularLinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(5)
list.print()

// remove duplicate from linkedlist

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }
    append(data) {
        const newNode = new Node(data) 
        if(this.head === null) {
            this.head = newNode
            return 
        }
        let curr = this.head
        while(curr.next !== null) {
            curr = curr.next
        }
        curr.next = newNode
    }
    print() {
        let result = ''
        let curr = this.head
        while (curr !== null) {
            result += curr.data + '->'
            curr = curr.next
        }
        console.log(result + null)
    }
    removeDuplicate() {
        let seen = new Set()
        let pre = null
        let curr = this.head
        while(curr) {
            if(seen.has(curr.data)) {
                pre.next = curr.next
            }else{
                seen.add(curr.data)
                pre = curr
            }
            curr = curr.next
        }
    }
}

const list = new LinkedList()
list.append(10)
list.append(20)
list.append(10)
list.append(30)
list.append(40)
list.append(30)
list.print()
list.removeDuplicate()
list.print()

// remove from the back to K-th element

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }
    append(data) {
        const newNode = new Node(data) 
        if(this.head === null) {
            this.head = newNode
            return 
        }
        let curr = this.head
        while(curr.next !== null) {
            curr = curr.next
        }
        curr.next = newNode
    }
    print() {
        let result = ''
        let curr = this.head
        while (curr !== null) {
            result += curr.data + '->'
            curr = curr.next
        }
        console.log(result + null)
    }
    removeFromBack(k) {
        let fast = this.head
        let slow = this.head
        
        for(let i=0;i<k;i++) {
            if(!fast) return
            fast = fast.next
        }
//if the node wanted to be removed         
        if(!fast) {
            this.head = this.head.next
            return 
        }
//
        while(fast.next) {
            fast = fast.next
            slow = slow.next
        }
        slow.next = slow.next.next
    }
}

const list = new LinkedList()
list.append(10)
list.append(20)
list.append(10)
list.append(30)
list.append(40)
list.append(30)
list.print()
list.removeFromBack(6)
list.print()

//remove middle from linkedlist
    //for even nos the 2nd middle no removes
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }
    append(data) {
        const newNode = new Node(data) 
        if(this.head === null) {
            this.head = newNode
            return 
        }
        let curr = this.head
        while(curr.next !== null) {
            curr = curr.next
        }
        curr.next = newNode
    }
    print() {
        let result = ''
        let curr = this.head
        while (curr !== null) {
            result += curr.data + '->'
            curr = curr.next
        }
        console.log(result + null)
    }
    removeMiddle() {
        let fast = this.head
        let slow = this.head
        let pre = null
        while (fast && fast.next) {
            pre = slow
            slow = slow.next
            fast = fast.next.next
        }
        pre.next = slow.next
    }
}

const list = new LinkedList()
list.append(10)
list.append(20)
list.append(10)
list.append(30)
list.append(40)
list.append(30)
list.print()
list.removeMiddle()
list.print()


//length & reverse a linkedlist

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }
    append(data) {
        const newNode = new Node(data)
        if(this.head === null) {
            this.head = newNode
            return
        }
        let curr = this.head
        while(curr.next !== null) {
            curr = curr.next
        }
        curr.next = newNode
    }
    print() {
        let curr = this.head
        let result = ''
        while (curr !== null) {
            result += curr.data + '->'
            curr = curr.next
        }
        console.log(result + 'null')
    }
    reverse() {
        let curr = this.head
        let prev = null
        while(curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    length() {
        let count = 0
        let curr = this.head
        while (curr) {
            count ++
            curr = curr.next
        }
        return count
    }
}

const list = new LinkedList()
list.append(1)
list.append(3)
list.append(5)
list.print()
console.log(list.length())
console.log(list.length())
list.print()
list.delete(3)
list.print()
list.reverse()
list.print()
console.log(list.length())


// find the middle of the node

middle() {
    if(!this.head) {
        console.log('List is empty')
        return
    }
    let slow = this.head
    let fast = this.head

    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    console.log('middle element is ',slow.data)
}