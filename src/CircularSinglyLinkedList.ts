import { SinglyLinkedNode, nodeType, ISinglyLinkedList, SinglyLinkedList } from './SinglyLinkedList';

export class CircularSinglyLinkedList extends SinglyLinkedList implements ISinglyLinkedList {
    public numberOfValue: number = 0;
    public head: nodeType = null;
    public tail: nodeType = null;
    addNode = (data: number): void => {
        const newSinglyLinkedNode = new SinglyLinkedNode(data);
        if (!this.head) {
            this.head = newSinglyLinkedNode;
            this.tail = newSinglyLinkedNode;
        } else {
            if (this.tail)
                this.tail.next = newSinglyLinkedNode;
            this.tail = newSinglyLinkedNode;
        }
    }
    removeNode = (data: number): void => {
        let current = this.head;
        let previousNode = this.head;
        while (current) {
            if (current.data === data) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    this.head = this.head.next;
                    if (this.tail)
                        this.tail.next = this.head;
                } else if (current === this.tail) {
                    current.next = this.head;
                    if (this.tail)
                        this.tail.next = this.head; 
                } else {
                    if (previousNode) {
                        previousNode.next = current.next; //skipping current node 
                    }
                }
            } else {
                previousNode = current;
            }
            current = current.next;
        }
    }
}

