import { CircularSinglyLinkedList } from './CircularSinglyLinkedList';
import { DoublelyLinkedList } from './DoublelyLinkedList';
import { SinglyLinkedList, nodeType } from './SinglyLinkedList';
import { HashTable } from './HashTable';



const hash = new HashTable(2);
hash.insert(1);
hash.insert(2);
hash.insert(3);
hash.insert(4);
hash.printTable();
hash.clear();
hash.printTable();



// console.log('***********Start SinglyLinkedList**********');
// const newSinglyLinkedListObject = new SinglyLinkedList();
// newSinglyLinkedListObject.addNode(1);
// newSinglyLinkedListObject.addNode(2);
// newSinglyLinkedListObject.addNode(3);
// newSinglyLinkedListObject.addNode(4);
// newSinglyLinkedListObject.displayNodes();
// newSinglyLinkedListObject.insertAfterNode(6, 3);
// newSinglyLinkedListObject.displayNodes();
// newSinglyLinkedListObject.length();
// newSinglyLinkedListObject.removeNode(2);
// newSinglyLinkedListObject.displayNodes();
// console.log('***********Traversing node**********');
// newSinglyLinkedListObject.traverse((node: nodeType) => {
//     if (node) {
//         console.log('Node value', node.data);
//     }
// });
// console.log('***********End SinglyLinkedList**********');



// console.log('***********Start CircularSinglyLinkedList**********');
// const newCircularSinglyLinkedList = new CircularSinglyLinkedList<number>();
// newCircularSinglyLinkedList.insertAtEnd(1);
// newCircularSinglyLinkedList.insertAtEnd(3);
// newCircularSinglyLinkedList.insertAtEnd(4);
// newCircularSinglyLinkedList.display();

// newCircularSinglyLinkedList.display();
// const position = 2;
// if (position <= 1 || position > newCircularSinglyLinkedList.getSize())
// console.log('Invalid position');
// else
// newCircularSinglyLinkedList.insertAtPos(2, position);
// if (position < 1 || position > newCircularSinglyLinkedList.getSize())
// console.log('Invalid position');
// else
// newCircularSinglyLinkedList.deleteAtPos(position);
// console.log('Empty status', newCircularSinglyLinkedList.isEmpty());
// console.log('Size', newCircularSinglyLinkedList.getSize());
// console.log('***********End CircularSinglyLinkedList**********');


// console.log('***********Start DoublelyLinkedList**********');
// const newDoublelyLinkedListObject = new DoublelyLinkedList();
// newDoublelyLinkedListObject.addNode(1);
// newDoublelyLinkedListObject.addNode(2);
// newDoublelyLinkedListObject.addNode(3);
// newDoublelyLinkedListObject.addNode(4);
// newDoublelyLinkedListObject.displayNodes();
// newDoublelyLinkedListObject.insertAfterNode(6, 3);
// newDoublelyLinkedListObject.displayNodes();
// newDoublelyLinkedListObject.length();
// newDoublelyLinkedListObject.removeNode(2);
// newDoublelyLinkedListObject.displayNodes();
// console.log('***********Traversing node**********');
// newDoublelyLinkedListObject.traverse((node: nodeType) => {
//     if (node) {
//         console.log('Node value', node.data);
//     }
// });
// console.log('***********End DoublelyLinkedList**********');



