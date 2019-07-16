export type nodeType<T> = IQueueNode<T> | null;

export interface IQueue<T> {
    enqueue(data: T): void;
    denqueue(): void;
    display(): void;
    peak(): T | null;
}
export interface IQueueNode<T> {
    setNext(next: nodeType<T>): void;
    setData(data: T): void;
    getData(): T;
    getNext(): nodeType<T>;
}

export class QueueNode<T> implements IQueueNode<T> {
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
export class Queue<T> implements IQueue<T> {
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

    public enqueue = (data: T): void => {
        const newNode: nodeType<T> = new QueueNode<T>(data, null);
        this.size++;
        if (this.front == null) {
            this.front = newNode;
            this.rear = this.front;
        }
        else {
            if (newNode) newNode.setNext(this.front);
            this.rear = newNode;
        }
    }

    public denqueue = () => {
        const newNode: nodeType<T> = this.front;
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
    public peak = (): T | null => {
        return this.rear && this.rear.getData();
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