export type nodeType<T> = CircularSinglyLinkedListNode<T> | null;

export interface ICircularSinglyLinkedListNode<T> {
    setNext(next: nodeType<T>): void;
    setData(data: T): void;
    getData(): T;
    getNext(): nodeType<T>;
}

export interface ICircularSinglyLinkedList<T> {
    size: number;
    isEmpty(): boolean;
    getSize(): number;
    insertAtStart(data: T): void;
    insertAtEnd(data: T): void;
    insertAtPos(data: T, position: number): void;
    deleteAtPos(position: number): void;
    display(): void;
}

export class CircularSinglyLinkedListNode<T> implements ICircularSinglyLinkedListNode<T> {
    protected data: T;
    protected next: nodeType<T>;
    constructor(data: T, next: nodeType<T>) {
        this.data = data;
        this.next = next;
    }

    public setNext(next: nodeType<T>) {
        this.next = next;
    }

    public setData(data: T) {
        this.data = data;
    }

    public getNext(): nodeType<T> {
        return this.next;
    }

    public getData(): T {
        return this.data;
    }
}
export class CircularSinglyLinkedList<T> implements ICircularSinglyLinkedList<T> {
    public size: number = 0;
    private start: nodeType<T>;
    private end: nodeType<T>;
    constructor() {
        this.start = null;
        this.end = null;
        this.size = 0;
    }

    public getSize(): number {
        return this.size;
    }

    public isEmpty = (): boolean => {
        return this.start == null;
    }
    public insertAtStart = (data: T): void => {
        const newNode: nodeType<T> = new CircularSinglyLinkedListNode<T>(data, null);
        newNode.setNext(this.start);
        if (this.start === null) {
            this.start = newNode;
            newNode.setNext(this.start);
            this.end = this.start
        } else {
            (this.end as CircularSinglyLinkedListNode<T>).setNext(newNode);
            this.start = newNode;
        }
        this.size++;
    };

    public insertAtEnd = (data: T): void => {
        const newNode: nodeType<T> = new CircularSinglyLinkedListNode<T>(data, null);
        newNode.setNext(this.start);
        if (this.start === null) {
            this.start = newNode;
            newNode.setNext(this.start);
            this.end = this.start
        } else {
            (this.end as CircularSinglyLinkedListNode<T>).setNext(newNode);
            this.end = newNode;
        }
        this.size++;
    };

    public insertAtPos = (data: T, position: number): void => {
        let newNode: nodeType<T> = new CircularSinglyLinkedListNode<T>(data, null);
        let pointerNode: nodeType<T> = this.start;
        position = position - 1;
        for (let i = 1; i < this.size - 1; i++) {
            if (i == position) {
                let tmp: nodeType<T> = pointerNode ? pointerNode.getNext() : null;
                if (pointerNode) pointerNode.setNext(newNode);
                newNode.setNext(tmp);
                break;
            }
            if (pointerNode) pointerNode = pointerNode.getNext();
        }
        this.size++;
    };


    public deleteAtPos = (position: number): void => {
        if (this.size === 1 && position === 1) {
            this.start = null;
            this.end = null;
            this.size = 0;
        }
        if (position === 1) {
            this.start = this.start ? this.start.getNext() : null;
            this.end ? this.end.setNext(this.start) : null;
            this.size--;
            return;
        }
        if (position === this.size) {
            let startNode: nodeType<T> = this.start;
            let tempNode: nodeType<T> = this.start;
            while (startNode != this.end) {
                tempNode = startNode;
                startNode = startNode ? startNode.getNext() : null;
            }
            this.end = tempNode;
            this.end ? this.end.setNext(this.start) : null;
            this.size--;
            return;
        }

        let pointerNode: nodeType<T> = this.start;
        position = position - 1;
        for (let i = 1; i < this.size - 1; i++) {
            if (i === position) {
                let tempNode: nodeType<T> = pointerNode ? pointerNode.getNext() : null;
                tempNode = tempNode ? tempNode.getNext() : null;
                if (pointerNode) pointerNode.setNext(tempNode);
                break;
            }
            if (pointerNode) pointerNode = pointerNode.getNext();
        }
        this.size--;
    }

    public display = () => {
        console.log('Circular Singly Linked List =');
        let pointerNode: nodeType<T> = this.start;
        if (this.size == 0) {
            console.log('Empty Circular Singly Linked List');
            return;
        }
        if (this.start && (this.start.getNext() == this.start) && pointerNode) {
            console.log(`${this.start.getData()} ---> ${pointerNode.getData()}`);
            return;
        }
        if (this.start)
            console.log(`${this.start.getData()} --->`);
        pointerNode = this.start ? this.start.getNext() : null;
        if (pointerNode) {
            while (pointerNode && pointerNode.getNext() != this.start) {
                console.log(`${pointerNode.getData()} --->`);
                pointerNode = pointerNode.getNext();
            }
        }
        if (pointerNode) {
            console.log(`${pointerNode.getData()} --->`);
            if (pointerNode) pointerNode = pointerNode.getNext();
            if (pointerNode)
                console.log(`${pointerNode.getData()} --->`);
        }
    }
}

