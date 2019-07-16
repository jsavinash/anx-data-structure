export type nodeType<T> = IStackNode<T> | null;

export interface IQueue<T> {
    push(data: T): void;
    pop(): void;
    display(): void;
    peak(): T | null;
}
export interface IStackNode<T> {
    setNext(next: nodeType<T>): void;
    setData(data: T): void;
    getData(): T;
    getNext(): nodeType<T>;
}

export class StackNode<T> implements IStackNode<T> {
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
export class Stack<T> implements IQueue<T> {
    private bottom: nodeType<T> = null;
    private top: nodeType<T> = null;
    private size: number = 0;

    public isEmpty = (): boolean => {
        return this.bottom == null;
    }

    public clear = (): void => {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    public push = (data: T): void => {
        const newNode: nodeType<T> = new StackNode<T>(data, null);
        this.size++;
        if (this.bottom == null) {
            this.bottom = newNode;
            this.top = this.bottom;
        }
        else {
            if (newNode) newNode.setNext(this.bottom);
            this.top = newNode;
        }
    }

    public pop = () => {
        const topNode: nodeType<T> = this.top;
        if (topNode) {
            this.top = topNode.getNext();
        }
    }
    public peak = (): T | null => {
        return this.top && this.top.getData();
    }

    public display = () => {
        console.log('Dequeue :');
        if (this.size == 0) {
            console.log('Empty :');
            return;
        }
        let newNode: nodeType<T> = this.top;
        if (newNode && this.top) {
            while (newNode != this.top.getNext()) {
                if (newNode) {
                    console.log(`${newNode.getData()} `);
                    newNode = newNode.getNext();
                }
            }
        }
    }
}


// Time Complexity
// Access  Insertio  Deletion
//  O(n)	 O(1)	    O(1)

// Space Complexity
// O(1)