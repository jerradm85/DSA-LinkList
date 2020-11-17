const { LinkedList } = require('./linkList');

// #2a
function main() {
    const SLL = new LinkedList();
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Hello');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.print();
    console.log('--------------------------')
    // 2b.
    SLL.insertLast('Tauhida');
    SLL.print();
    console.log('------------2b------------')
    // 2c.)
    SLL.delete('Husker');
    SLL.print();
    console.log('------------2c------------')
    // 2d.)
    SLL.insertBefore('Boomer', 'Athena')
    SLL.print()
    console.log('------------2d------------')
    // 2e.)
    SLL.insertAfter('Hello', 'Hotdog')
    SLL.print()
    console.log('------------2e------------')
    // 2f.)
    SLL.insertAt(2,'Kat')
    SLL.print()
    console.log('------------2f------------')
    // 2g.)
    SLL.delete('Tauhida')
    SLL.print()
    console.log('------------2g------------')

    console.log(SLL.size(SLL))
    console.log(SLL.isEmpty(SLL));
    console.log(SLL.findLast(SLL)) // help with this.

    // 5.)(reverse)
    console.log(SLL.reverse(SLL)) // help with reverse function.
}

main();

// 4.)(Mystery Program)

// it looks like it is trying to check for and unlink duplicate items in
// a linked list. the time complexity of this function is O(n^k) or polynomial
// time complexity.

// // create a function that takes a list as an argument
// function WhatDoesThisProgramDo(lst) {
//     // set value of current to the head of the list
//     let current = lst.head;
//     // while the list still has items to look at
//     while (current !== null) {
//         // set value of newNode to current(head of list)
//         let newNode = current;
//         // while there is a next item in the list...
//         while (newNode.next !== null) {
//             // if the value of the newNode is the same as the value of current
//             if (newNode.next.value === current.value) {
//                 // set the pointer to the item after next
//                 newNode.next = newNode.next.next;
//             }
//             else {
//                 // iterate through the newNode while loop
//                 newNode = newNode.next;
//             }
//         }
//         // iterate through the current while loop
//         current = current.next;
//     }
// }