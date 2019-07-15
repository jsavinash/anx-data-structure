export interface IHashTable {
    insert(ele: number): void;
    clear(): void;
    delete(ele: number): void;
    contains(ele: number): boolean;
}

export class HashTable implements IHashTable {
    private arr: number[];
    private capacity: number;
    constructor(capacity: number) {
        this.capacity = this.nextPrime(capacity);
        this.arr = new Array<number>(this.capacity);
        ;
    }

    public insert = (ele: number): void => {
        this.arr[ele % this.capacity] = ele;
    }

    private nextPrime = (capacity: number): number => {
        if (capacity % 2 == 0)
            capacity++;
        for (; !this.isPrime(capacity); capacity += 2);

        return capacity;
    }

    public clear = (): void => {
        this.arr = new Array<number>(this.capacity);
    }

    public contains = (ele: number): boolean => {
        return this.arr[ele % this.capacity] == ele;
    }

    public delete = (ele: number): void => {
        if (this.arr[ele % this.capacity] == ele)
            this.arr[ele % this.capacity] = 0;
        else
            console.log('Error : Element not found');
    }

    /** Function to check if given number is prime **/
    private isPrime = (value: number): boolean => {
        if (value == 2 || value == 3)
            return true;
        if (value == 1 || value % 2 == 0)
            return false;
        for (let i = 3; i * i <= value; i += 2)
            if (value % i == 0)
                return false;
        return true;
    }

    public printTable = () => {
        console.log("Hash Table :");
        let isArrayEmpty = true;
        for (let i = 0; i < this.capacity; i++) {
            if (this.arr[i]) {
                isArrayEmpty = false;
                console.log(`${this.arr[i]} `);
            }
        }
        if(isArrayEmpty){
            console.log("Empty Hash Table");
    }
}
}

