export type nodeType = SinglyLinkedNode | null;
export interface ISinglyLinkedList {
    numberOfValue: number;
    head: nodeType;
    tail: nodeType;
    addNode(data: number): void;
    removeNode(data: number): void;
    insertAfterNode(data: number, nodeValue: number): void;
    length(): void;
    traverse(callback: (node: nodeType) => void): void
    displayNodes(): void;
}

export class SinglyLinkedNode {
    public data: number;
    public next: SinglyLinkedNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}
export class SinglyLinkedList implements ISinglyLinkedList {
    public numberOfValue = 0;
    public head: nodeType = null;
    public tail: nodeType = null;

    public addNode = (data: number) => {
        const newSinglyLinkedNode: nodeType = new SinglyLinkedNode(data);
        this.numberOfValue++;
        if (!this.head) {
            this.head = newSinglyLinkedNode;
            this.tail = newSinglyLinkedNode;
        } else {
            if (this.tail) {
                this.tail.next = newSinglyLinkedNode;
                this.tail = newSinglyLinkedNode;
            }
        }
    }

    public removeNode = (data: number) => {
        let previousNode: nodeType = this.head;
        let currentNode: nodeType = this.head;
        while (currentNode) {
            if (currentNode.data == data) {
                this.numberOfValue--;
                if (currentNode === this.head) {
                    this.head = this.head.next;
                }
                if (currentNode === this.tail) {
                    this.tail = previousNode;
                }
                if (previousNode) {
                    previousNode.next = currentNode.next;
                }
            } else {
                previousNode = currentNode;
            }
            if (currentNode)
                currentNode = currentNode.next;
            else
                currentNode = null;
        }
    }

    public insertAfterNode = (data: number, nodeValue: number) => {
        let currentNode: nodeType = this.head;
        while (currentNode) {
            if (currentNode.data == nodeValue) {
                const newNode = new SinglyLinkedNode(data);
                if (currentNode === this.tail) {
                    this.tail.next = newNode;
                    this.tail = newNode;
                } else {
                    newNode.next = currentNode.next;
                    currentNode.next = newNode;
                }
                this.numberOfValue++;
            }
            currentNode = currentNode.next;
        }
    }

    public traverse = (callback: (node: nodeType) => void): void => {
        let currentNode: nodeType = this.head;
        while (currentNode) {
            callback(currentNode);
            if (currentNode)
                currentNode = currentNode.next;
            else
                currentNode = null;
        }
    }

    public displayNodes = () => {
        let currentNode: nodeType = this.head;
        const elementInNode: string[] = [];
        if (!currentNode) {
            console.log('List is empty');
            return;
        } else {
            while (currentNode !== null) {
                elementInNode.push(`${currentNode.data}`);
                currentNode = currentNode.next;
            }
            console.log('Nodes of singly linked list:', elementInNode.join(' '));
        }
    }
    public length = () => {
        console.log('Nuber of values in singly linked list:', this.numberOfValue);
    }
}


