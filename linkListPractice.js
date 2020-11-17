// created from scratch (minimal peeking) #1

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (!this.head) {
            this.insertFirst(item);
        } else {
            tempNode = this.head

            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    remove(item) {
        if(!this.head) {
            return null;
        } else {
            
            tempNode = this.head
            while(tempNode.value !== item) {
                tempNode = tempNode.next
            }

            this.head = this.head.next
        }
    }

    find(item) {
        if(!this.head) {
            return null;
        } else {

            tempNode = this.head;
            
            while(tempNode.value !== item) {
                if(!tempNode.next) {
                    return null;
                }
                tempNode = tempNode.next
            }
            return tempNode;
        }
    }
}