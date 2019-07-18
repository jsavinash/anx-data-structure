export interface ITrieNode<T> {
    getData(): string;
    getIsWord(): boolean;
    setIsWord(): void;
    unsetIsWord(): void;
    increasePrefixes(): void;
    decreasePrefixes(): void;
    getPrefixes(): number;
    getChildren(): TrieNode<T>[];
    addChild(data: TrieNode<T>): void;
}
class TrieNode<T> implements ITrieNode<T> {
    private data: string;
    private isWord: boolean = false;
    private prefixes: number = 0;
    public children: TrieNode<T>[] = [];

    constructor(data: string) {
        this.data = data;
    }

    getData = (): string => {
        return this.data;
    }
    getIsWord = (): boolean => {
        return this.isWord;
    }
    setIsWord = (): void => {
        this.isWord = true;
    }
    unsetIsWord = (): void => {
        this.isWord = false;
    }
    getPrefixes = (): number => {
        return this.prefixes;
    }

    getChildren = (): TrieNode<T>[] => {
        return this.children;
    }
    setChildren = (children: TrieNode<T>[]) => {
        return this.children = children;
    }

    addChild = (data: TrieNode<T>) => {
        this.children.push(data);
    }

    getChild = (data: TrieNode<T>) => {
        this.children.push(data);
    }

    increasePrefixes = () => {
        this.prefixes++;
    }

    decreasePrefixes = () => {
        if (this.prefixes > 0) {
            this.prefixes--;
        } else {
            throw Error('Prefixes is alreay zero');
        }
    }
}

export interface ITrie<T> {
    addNode(word: string): void;
    getWords(): string;
    removeNode(word: string): void;
    containsWord(word: string): void;
}

export class Trie<T> implements ITrie<T> {
    private root: TrieNode<T> = new TrieNode('');

    addNode(word: string): void {
        if (!this.root) {
            throw new Error('Root node does not exist');
            return;
        }
        if (!word) {
            throw new Error('Data does not exist');
            return;
        }
        this.baseAddNode(this.root, word);
    }

    private baseAddNode(root: TrieNode<T>, word: string): void {
        root.increasePrefixes();
        const letter = word.charAt(0);
        let newChild: TrieNode<T>;
        newChild = new TrieNode(letter);
        const child = this.getChildrenNode(root, letter);
        if (!child) {
            newChild = new TrieNode(letter);
            root.addChild(newChild);
        }
        const remainder = word.substring(1);
        if (!remainder) {
            newChild.setIsWord();
        }
        this.baseAddNode(newChild, remainder);
    }

    private getChildrenNode = (root: TrieNode<T>, letter: string): TrieNode<T> | null => {
        let isExist: TrieNode<T> | null = null;
        root.getChildren().map((value: TrieNode<T>) => {
            if (letter === value.getData()) {
                isExist = value;
            }
        })

        return isExist;
    }

    removeNode(word: string): void {
        if (!this.root) {
            throw new Error('Root node does not exist');
            return;
        }
        if (!word) {
            throw new Error('Data does not exist');
            return;
        }
        if (this.containsWord(word)) {
            this.baseRemoveNode(this.root, word);
        } else {
            throw new Error('Word does not exists in tries');
        }
    }

    baseRemoveNode(root: TrieNode<T>, word: string): void {
        root.decreasePrefixes();
        const letter = word.charAt(0);
        const child: TrieNode<T> | null = this.getChildrenNode(root, letter);
        if (child) {
            var remainder = word.substring(1);
            if (remainder) {
                if (child.getPrefixes() === 1) {
                    root.setChildren(root.getChildren().filter((node: TrieNode<T>) => {
                        return node.getData() === letter;
                    }));
                }
                else {
                    this.baseRemoveNode(child, remainder);
                }
            } else {
                if (child.getPrefixes() === 0) {
                    root.setChildren(root.getChildren().filter((node: TrieNode<T>) => {
                        return node.getData() === letter;
                    }));
                } else {
                    child.setIsWord();
                }
            }
        }
    }

    public containsWord = (word: string): boolean | null => {
        if (!this.root) {
            throw new Error('Root node does not exist');
            return false;
        }
        if (!word) {
            throw new Error('Data does not exist');
            return false;
        }

        return this.baseContainsWord(this.root, word);
    }

    private baseContainsWord(root: TrieNode<T>, word: string): boolean | null {
        const letter = word.charAt(0);
        const child: TrieNode<T> | null = this.getChildrenNode(root, letter);
        if (child) {
            const remainder = word.substring(1);
            if (!remainder && child && (child as TrieNode<T>).getIsWord()) {
                return true;
            } else {
                if (child)
                    return this.baseContainsWord(child, remainder);
                else
                    return false;
            }
        } else {
            return false;

        }
    }

    public countWords = (): number | undefined => {
        if (!this.root) {
            throw new Error('Root node does not exist');

            return;
        }
        const queue: TrieNode<T>[] = [this.root];
        let counter = 0;
        while (queue.length) {
            var node = queue.shift();
            if (node && node.getIsWord()) {
                counter++;
            }
            if (node)
                for (var child in node.getChildren()) {
                    if (node.children.hasOwnProperty(child)) {
                        queue.push(node.children[child]);
                    }
                }
        }
        return counter;
    };

    public getWordFromNode = (node: TrieNode<T>[]): string => {
        let wordArray: string[] = [];
        node.map((node: TrieNode<T>) => {
            wordArray.push(node.getData());
        });
        return wordArray.join('');
    }

    public getWords = (): string => {
        const queue: TrieNode<T>[] = [this.root];
        let allWords: string[] = [];
        while (queue.length) {
            var node = queue.shift();
            if (node && node.getIsWord()) {
                allWords.push(this.getWordFromNode(node.getChildren()));
            }
            if (node)
                for (var child in node.getChildren()) {
                    if (node.children.hasOwnProperty(child)) {
                        queue.push(node.children[child]);
                    }
                }
        }

        return allWords.join(' | ');
    };
}