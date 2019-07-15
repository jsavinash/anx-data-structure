export type nodeType<T> = IDoubleEndedQueueNode<T> | null;

export interface IDoubleEndedQueueNode<T> {
    setNext(next: nodeType<T>): void;
    setData(data: T): void;
    getData(): T;
    getNext(): nodeType<T>;
}

export interface IDoubleEndedQueue<T> {
    isEmpty(): boolean;
    clear(): void;
    insertAtFront(data: T): void;
    insertAtRear(data: T): void;
    removeAtFront(): T | null;
    removeAtRear(): T | null;
    peekAtFront(): T | null;
    peekAtRear(): T | null;
    display(): void;
}

export class DoubleEndedQueueNode<T> implements IDoubleEndedQueueNode<T> {
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
export class DoubleEndedQueue<T> implements IDoubleEndedQueue<T> {
    private front: nodeType<T> = null;
    private rear: nodeType<T> = null;
    private size: number = 0;

    public isEmpty = (): boolean => {
        return this.front == null;
    }

    public clear = (): void => {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    public insertAtFront = (data: T): void => {
        const newNode: nodeType<T> = new DoubleEndedQueueNode<T>(data, null);
        this.size++;
        if (this.front == null) {
            this.front = newNode;
            this.rear = this.front;
        }
        else {
            if (newNode) newNode.setNext(this.front);
            this.front = newNode;
        }
    }

    public insertAtRear = (data: T): void => {
        const newNode: nodeType<T> = new DoubleEndedQueueNode<T>(data, null);
        this.size++;
        if (this.rear == null) {
            this.rear = newNode;
            this.front = this.rear;
        }
        else {
            this.rear.setNext(newNode);
            this.rear = newNode;
        }
    }

    public removeAtFront = (): T | null => {
        if (this.isEmpty())
            throw new Error("Underflow Exception");
        const newNode: nodeType<T> = this.front;
        this.front = newNode ? newNode.getNext() : null;

        if (this.front == null)
            this.rear = null;
        this.size--;

        return newNode ? newNode.getData() : null;
    }

    public removeAtRear = (): T | null => {
        if (this.isEmpty())
            throw new Error("Underflow Exception");
        let ele: T | null = this.rear ? this.rear.getData() as T : null;
        let startNode: nodeType<T> = this.front;
        let tempNode: nodeType<T> = this.front;
        while (startNode != this.rear) {
            tempNode = startNode;
            startNode = startNode ? startNode.getNext() : null;
        }
        this.rear = tempNode;
        this.rear ? this.rear.setNext(null) : null;
        this.size--;
        return ele;
    }

    public peekAtFront = (): T | null => {
        if (this.isEmpty())
            throw new Error("Underflow Exception");
        return this.front ? this.front.getData() : null;
    }

    public peekAtRear = (): T | null => {
        if (this.isEmpty())
            throw new Error("Underflow Exception");
        return this.rear ? this.rear.getData() : null;
    }


    public display = () => {
        console.log('Dequeue :');
        if (this.size == 0) {
            console.log('Empty :');
            return;
        }
        let newNode: nodeType<T> = this.front;
        if (newNode && this.rear) {
            while (newNode != this.rear.getNext()) {
                if (newNode) {
                    console.log(`${newNode.getData()} `);
                    newNode = newNode.getNext();
                }
            }
        }
    }
}

