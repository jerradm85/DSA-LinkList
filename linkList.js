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
        // create a new node in a linked list, with the item
        // and the pointer, that points to the next item in
        // the list.
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        // if there is no list, create one.
        if (this.head === null) {
            this.insertFirst(item);
        }
        // otherwise, iterate over the items in the list
        // until you reach the end. once you reach the end,
        // create the node with your item, and a pointer to
        // null, because this is the last item in the list.
        else {
            // iteration //
            // set the tempNode to the current head value.
            let tempNode = this.head;
            // while there are still nodes in the list,
            // iterate through the nodes.
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            // when you reach the end of the linked list,
            // create a new node with the item, and a pointer
            // for the next head.
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(beforeItem, item) {
        // if there is no list, insert an item in the
        // first slot.
        if (this.head === null) {
            this.insertFirst(item);
        }

        // iteration //
        // set the tempNode to the current head of the list
        let tempNode = this.head;
        // while there are still nodes in the list...
        while (tempNode.next) {
            // if the value of the next node matches the supplied item
            if (tempNode.next.value === beforeItem) {
                // create a new Node for the item, and point to the
                // next item in the list.
                const node = new _Node(item, tempNode.next);
                tempNode.next = node; // what is the purpose of this line?
                return;
            }
            tempNode = tempNode.next; // and this line?
        }
    }

    insertAfter(afterItem, item) {
        if (this.head === null) {
            this.insertFirst(item);
        }

        let tempNode = this.head;
        while (tempNode) {
            if (tempNode.value === afterItem) {
                const node = new _Node(item, tempNode.next)
                tempNode.next = node;
                return;
            }
            tempNode = tempNode.next;
        }
    }

    insertAt(index, item) {
        // if there is nothing in the list, insert
        // at first position.
        if (this.head === null) {
            this.insertFirst(item);
        }

        let i = 1;

        // save the current head
        let tempNode = this.head;
        // while there is data in the linked list...
        while (tempNode) {
            // if the counter matches the supplied index
            if (i === index) {
                // create the new node at the index supplied
                // and point to the next item in the list.
                const node = new _Node(item, tempNode.next)
                tempNode.next = node;
                return;
            }
            i++; // if not, increment the counter
            tempNode = tempNode.next; // move to the next node
        }
    }

    find(item) {
        let currNode = this.head;

        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    delete(item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;
        let prevNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        prevNode.next = currNode.next;
    }

    print() {
        if (!this.head) {
            return null;
        }

        let node = this.head

        while (node) {
            console.log(node.value)
            node = node.next
        }
    }

    //3b.)(size)

    size(list) {
        let i = 0;
        let tempNode = list.head;
        while (tempNode !== null) {
            tempNode = tempNode.next
            i++
        }
        return (`Size: ${i} nodes`)
    }

    // 3c.)(isEmpty)
    isEmpty(list) {
        if (!list.head) {
            return true;
        } else return false;
    }

    // 3d.)(findPrevious)
    findBefore(item) {
        let tempNode = this.head;
        let previousNode;

        if (!tempNode) {
            return null;
        }

        if (tempNode.head === item) {
            return tempNode
        }

        while (tempNode !== item) {
            previousNode == tempNode;
            tempNode = tempNode.next;
        }
        return previousNode;
    }

    findLast(list) {

        if (!list.head) {
            return null;
        }
        let tempNode = list.head

        while (tempNode !== null) {
            tempNode = tempNode.next
        }
        return tempNode;
    }

    reverse(list) { // help on this one
        if(!list.head) {
            return;
        }
      
        let node = list.head;
        list.head = new _Node(node.value, null);
      
        while (node.next !== null) {
          node = node.next;
          list.insertFirst(node.value);
        }
      
        return list;
      }
}

module.exports = { _Node, LinkedList };
