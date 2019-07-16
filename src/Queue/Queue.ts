export interface IQueue<T> {
    enqueue(data: T): void;
    denqueue(): void;
}
export class Queue<T> implements IQueue<T> {
    private data: T[] = [];

    public enqueue = (data: T) => {
        this.data.push(data);
    }

    public denqueue = () => {
        this.data.shift();
    }
    public peak = (): T => {
        return this.data[this.data.length - 1];
    }

    public display = (): void => {
        console.log('Queue :');
        this.data.map((element: T) => {
            console.log(`${element} `);
        })
    }
}