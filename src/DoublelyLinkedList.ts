export type nodeType = DoublelyLinkedListNode | null;

export interface IDoublelyLinkedList {
    numberOfValues: number;
    head: nodeType;
    tail: nodeType;
    length(): void;
    addNode(data: number): void;
    removeNode(data: number): void;
    displayNodes(): void;
    insertAfterNode(data: number, nodeValue: number): void;
    traverse(callback: (node: nodeType) => void): void
    traverseReverse(callback: (node: nodeType) => void): void
}

export class DoublelyLinkedListNode {
    public data: number;
    public next: DoublelyLinkedListNode | null;
    public previous: DoublelyLinkedListNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

export class DoublelyLinkedList implements IDoublelyLinkedList {
    public numberOfValues = 0;
    public head: nodeType = null;
    public tail: nodeType = null;

    public addNode = (data: number): void => {
        const newNode: nodeType = new DoublelyLinkedListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.previous = this.tail;
            if (this.tail)
                this.tail.next = newNode;
            this.tail = newNode;
        }
        this.numberOfValues++;
    }

    public removeNode = (data: number): void => {
        let currentNode: nodeType = this.head;
        let previousNode: nodeType = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                if (currentNode === this.head && currentNode === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (currentNode === this.head) {
                    this.head = this.head.next;
                } else if (currentNode === this.tail) {
                    this.tail = this.tail.previous;
                } else {
                    if (previousNode)
                        previousNode.next = currentNode.next;
                    currentNode.previous = previousNode;
                }
            } else {
                previousNode = currentNode;
            }
            this.numberOfValues--;
            currentNode = currentNode.next;
        }
    }
    public insertAfterNode = (data: number, nodeValue: number): void => {
        let currentNode: nodeType = this.head;
        while (currentNode) {
            if (currentNode.data === nodeValue) {
                var node = new DoublelyLinkedListNode(data);
                if (currentNode === this.tail) {
                    this.addNode(data);
                } else {
                    if (currentNode.next)
                        currentNode.next.previous = node;
                    node.previous = currentNode;
                    node.next = currentNode.next;
                    currentNode.next = node;
                    this.numberOfValues++;
                }
            }
            currentNode = currentNode.next;
        }
    }

    public length(): void {
        console.log('Nuber of values in doublely linked list:', this.numberOfValues);
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

    public traverseReverse = (callback: (node: nodeType) => void): void => {
        let currentNode: nodeType = this.tail;
        while (currentNode) {
            callback(currentNode);
            if (currentNode)
                currentNode = currentNode.previous;
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
            console.log('Nodes of doublely linked list:', elementInNode.join(' '));
        }
    }
}

