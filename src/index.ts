import { CircularSinglyLinkedList } from './CircularSinglyLinkedList';
import { DoublelyLinkedList } from './DoublelyLinkedList';
import { SinglyLinkedList, nodeType } from './SinglyLinkedList';

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
const newCircularSinglyLinkedListObject = new CircularSinglyLinkedList();
newCircularSinglyLinkedListObject.addNode(1);
newCircularSinglyLinkedListObject.addNode(2);
newCircularSinglyLinkedListObject.addNode(3);
newCircularSinglyLinkedListObject.addNode(4);
newCircularSinglyLinkedListObject.displayNodes();
newCircularSinglyLinkedListObject.removeNode(4);
newCircularSinglyLinkedListObject.displayNodes();
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

