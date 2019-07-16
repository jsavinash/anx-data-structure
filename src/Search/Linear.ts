
export interface ILinearSearch {
    findElement(data: number): boolean;
}
export class LinearSearch implements ILinearSearch {
    private sortedArray: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 130, 140];

    public findElement = (data: number): boolean => {
        let isElementPresent: boolean = false;
        this.sortedArray.map((value: number) => {
            if (value === data) {
                isElementPresent = true;
            }
        })
        return isElementPresent;
    }
}

// Time Complexity: O(n) - since in worst case we're checking each element exactly once.

