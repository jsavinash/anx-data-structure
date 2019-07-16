
export interface IInterpolationSearch {
    findElement(data: number): boolean;
}
export class InterpolationSearch implements IInterpolationSearch {
    private sortedArray: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 130, 140];

    public findElement = (data: number): boolean => {
        let elementFind: boolean = false;
        let middleIndex: number = 0;
        let highIndex: number = this.sortedArray.length - 1;
        let lowIndex: number = 0;
        while (!elementFind) {
            highIndex = this.sortedArray.length - 1;
            middleIndex = Math.round((lowIndex + ((highIndex - lowIndex) / (this.sortedArray[highIndex] - this.sortedArray[lowIndex])) * (data - this.sortedArray[lowIndex])));
            if (this.sortedArray[middleIndex] !== data) {
                if (this.sortedArray[middleIndex] && middleIndex) {
                    if (data > this.sortedArray[middleIndex]) {
                        this.sortedArray = this.sortedArray.slice(middleIndex, this.sortedArray.length);
                    } else {
                        this.sortedArray = this.sortedArray.slice(lowIndex, middleIndex);
                    }
                } else {
                    if (this.sortedArray[middleIndex] === data) {
                        elementFind = true;
                    } else {
                        elementFind = false;
                        break;
                    }
                }
            }
            else {
                elementFind = true;
            }
        }
        return elementFind;
    }
}

// Time Complexity: Ο(log (log n)) - since in worst case we're checking each element exactly once.
