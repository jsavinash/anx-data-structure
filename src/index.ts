import { CircularSinglyLinkedList } from './List/CircularSinglyLinkedList';
import { DoublelyLinkedList } from './List/DoublelyLinkedList';
import { SinglyLinkedList, nodeType } from './List/SinglyLinkedList';
import { HashTable } from './HashTable';
import { LinearSearch } from './Search/Linear';
import { BinarySearch } from './Search/Binary';
import { UndirectedGraph } from './Graph/UndirectedGraph';
import { DirectedGraph } from './Graph/DirectedGraph';
import { InterpolationSearch } from './Search/Interpolation';



// const hash = new HashTable(2);
// hash.insert(1);
// hash.insert(2);
// hash.insert(3);
// hash.insert(4);
// hash.printTable();
// hash.clear();
// hash.printTable();

// const newLinear = new LinearSearch();
// console.log('Finding 10', newLinear.findElement(9));

const newUndirectedGraph = new DirectedGraph<number>();
newUndirectedGraph.addVertex(1);
newUndirectedGraph.addVertex(2);
newUndirectedGraph.addVertex(3);
newUndirectedGraph.addVertex(4);
newUndirectedGraph.addVertex(5);
newUndirectedGraph.addVertex(6);
newUndirectedGraph.addEdge(1, 6);
newUndirectedGraph.print();
newUndirectedGraph.removeEdge(1, 6);
newUndirectedGraph.print();
newUndirectedGraph.addEdge(1, 6);
newUndirectedGraph.addEdge(1, 2);
newUndirectedGraph.addEdge(1, 3);
newUndirectedGraph.addEdge(1, 4);
newUndirectedGraph.addEdge(1, 5);
newUndirectedGraph.print();

// const newBinary = new InterpolationSearch();
// console.log('Finding 10', newBinary.findElement(11));

// console.log('Finding 140', newBinary.findElement(141));
// console.log('Finding 80', newBinary.findElement(80));
// console.log('Finding 50', newBinary.findElement(50));
// console.log('Finding 5', newBinary.findElement(5));

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



