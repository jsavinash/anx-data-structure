export interface IWeightedGraphNode<T> {
    pushEdges(edgeValue: T, weight: number): void;
}

export interface IEdge<T> { edgeValue: T, weight: number };

export interface IVisited<T> { visitedVertex: T, visited: boolean };

class WeightedGraphNode<T> implements IWeightedGraphNode<T> {
    public ref: T;
    public edges: IEdge<T>[] = [];
    constructor(ref: T) {
        this.ref = ref;
    }

    public pushEdges = (edgeValue: T, weight: number) => {
        this.edges.push({ edgeValue, weight });
    }
}

export interface DirectedGraph<T> {
    removeEdge(sourceVertex: T, destinationVertex: T): void;
    addEdge(sourceVertex: T, destinationVertex: T): void;
    pathFromTo(sourceVertex: T, destinationVertex: T): void;
    addVertex(vertex: T): void;
    size(): number;
    relation(): void;
    traversDFS(vertex: T, callback: (vertex: T) => void): void;
    traversBFS(vertex: T, callback: (vertex: T) => void): void;
    getShortestPath(sourceVertex: T, destinationVertex: T): T[] | undefined;
    getLongestPath(sourceVertex: T, destinationVertex: T): void;
    getLowCostShortestPath(sourceVertex: T, destinationVertex: T): void;
    getLowCostLongestPath(sourceVertex: T, destinationVertex: T): void;
    getHighCostShortestPath(sourceVertex: T, destinationVertex: T): void;
    getHighCostLongestPath(sourceVertex: T, destinationVertex: T): void;
    removeVertex(vertex: T): void;
    showGraph(): void;
}
export class WeightedDirectedGraph<T> {
    private vertices: T[] = [];
    private edges: WeightedGraphNode<T>[] = [];
    private numberOfVertex: number = 0;

    private checkIfVertexExist = (vertex: T): boolean => {
        let isVertexExist: boolean = false;
        this.vertices.map((currentVertex: T) => {
            if (vertex === currentVertex) {
                isVertexExist = true;
            }
        })
        return isVertexExist;
    }

    public addVertex = (vertex: T) => {
        const newEdge: WeightedGraphNode<T> = new WeightedGraphNode<T>(vertex);
        if (this.checkIfVertexExist(vertex)) {
            throw Error("Vertex already exist");
        } else {
            this.vertices.push(vertex);
            this.edges.push(newEdge);
            this.numberOfVertex++;
        }
    }

    public removeVertex = (vertex: T) => {
        let foundVertexIndex = -1;
        if (!this.checkIfVertexExist(vertex)) {
            this.vertices.splice(this.vertices.indexOf(vertex), 1);
            this.edges.map((graphEdge: WeightedGraphNode<T>, index: number) => {
                if (graphEdge.ref === vertex) {
                    foundVertexIndex = index;
                    return;
                }
            });
            this.edges[foundVertexIndex].edges = this.edges[foundVertexIndex].edges.filter((edge: IEdge<T>) => {
                return edge.edgeValue === vertex;
            });
            this.numberOfVertex--;
        } else {
            throw Error("Vertex does not exist");
        }
    }


    public size = (): number => {
        return this.vertices.length;
    }

    public relations = () => {
        return this.numberOfVertex;
    }

    public addEdge = (sourceVertex: T, destinationVertex: T, weight: number) => {
        if (!this.checkIfVertexExist(sourceVertex)) {
            throw Error("Source does not exist");
            return;
        }
        if (!this.checkIfVertexExist(destinationVertex)) {
            throw Error("Destination does not exist");
            return;
        }
        let foundVertexIndex1 = -1;
        let foundVertexIndex2 = -1;
        this.edges.map((graphEdge: WeightedGraphNode<T>, index: number) => {
            if (graphEdge.ref === sourceVertex) {
                foundVertexIndex1 = index;
            }
            if (graphEdge.ref === destinationVertex) {
                foundVertexIndex2 = index;
            }
            if (foundVertexIndex1 > -1 && foundVertexIndex2 > -1)
                return;
        });
        this.edges[foundVertexIndex1].pushEdges(destinationVertex, weight);
    }

    public removeEdge = (sourceVertex: T, destinationVertex: T) => {
        if (!this.checkIfVertexExist(sourceVertex)) {
            throw Error("Source vertex does not exist");
            return;
        }
        if (!this.checkIfVertexExist(destinationVertex)) {
            throw Error("Destination vertex does not exist");
            return;
        }
        let foundVertexIndex1 = -1;
        this.edges.map((graphEdge: WeightedGraphNode<T>, index: number) => {
            if (graphEdge.ref === sourceVertex) {
                foundVertexIndex1 = index;
                return;
            }
        });

        this.edges[foundVertexIndex1].edges = this.edges[foundVertexIndex1].edges.filter((edge: IEdge<T>) => {
            return edge.edgeValue === destinationVertex;
        });
    }

    private getEdges = (graphEdge: WeightedGraphNode<T>): T[] => {
        const edges: T[] = [];
        graphEdge.edges.map((edge: IEdge<T>) => {
            edges.push(edge.edgeValue);
        })

        return edges;
    }

    public showGraph = () => {
        if (!this.vertices.length) {
            throw Error("Graph is empty");
            return;
        }
        this.vertices.map((vertex: T) => {
            this.edges.map((graphEdge: WeightedGraphNode<T>) => {
                if (graphEdge.ref === vertex)
                    console.log(`${vertex} --> ${this.getEdges(graphEdge).join(' | ')}`);
            });
        });
    }

    public traverseBFS = (vertex: T, callback: (vertex: T) => void) => {
        if (!this.vertices.length) {
            throw Error("Graph is empty");
            return;
        }
        if (!this.checkIfVertexExist(vertex)) {
            throw Error("Vertex does not exist");
            return;
        }
        var queue: T[] = [];
        let visitRecord: { visitedVertex: T, visited: boolean }[] = [];
        visitRecord.push({ visitedVertex: vertex, visited: true });
        queue.push(vertex);
        while (queue.length) {
            vertex = queue.shift() as T;
            callback(vertex);
            this.edges[this.findEdgeIndexViaVertex(vertex) as number].edges.map((edge: IEdge<T>) => {
                let isElementVisited = false;
                visitRecord.map((visited: { visitedVertex: T, visited: boolean }) => {
                    if (visited.visitedVertex === edge.edgeValue && visited.visited) {
                        isElementVisited = true;
                    }
                })
                if (!isElementVisited) {
                    visitRecord.push({ visitedVertex: edge.edgeValue, visited: true });
                    queue.push(edge.edgeValue);
                }
            });
        }
    }

    public traversDFS = (vertex: T, callback: (vertex: T) => void) => {
        if (!this.vertices.length) {
            throw Error("Graph is empty");
            return;
        }
        if (!this.checkIfVertexExist(vertex)) {
            throw Error("Vertex does not exist");
            return;
        }

        const visitRecord: IVisited<T>[] = [];
        this.traversDFSBase(vertex, visitRecord, callback);
    };

    private traversDFSBase = (vertex: T, visitRecord: IVisited<T>[], callback: (vertex: T) => void) => {

        visitRecord.push({ visitedVertex: vertex, visited: true });
        if (this.edges[this.findEdgeIndexViaVertex(vertex) as number] !== undefined) {
            callback(vertex);
        }
        this.edges[this.findEdgeIndexViaVertex(vertex) as number].edges.map((edge: IEdge<T>) => {
            let isElementVisited = false;
            visitRecord.map((visited: IVisited<T>) => {
                if (visited.visitedVertex === edge.edgeValue && visited.visited) {
                    isElementVisited = true;
                }
            })
            if (!isElementVisited) {
                this.traversDFSBase(edge.edgeValue, visitRecord, callback);
            }
        });
    }

    public pathFromTo(sourceVertex: T, destinationVertex: T): T[] | undefined {
        if (!this.vertices.length) {
            throw Error("Graph is empty");
            return;
        }
        if (!this.checkIfVertexExist(sourceVertex)) {
            throw Error("Source Vertex does not exist");
            return;
        }

        if (!this.checkIfVertexExist(destinationVertex)) {
            throw Error("Destination Vertex does not exist");
            return;
        }
        const visitRecord: IVisited<T>[] = [];
        const queue: T[] = [];
        const path: T[] = [];
        queue.push(sourceVertex);
        while (queue.length) {
            sourceVertex = queue.shift() as T;
            path.push(sourceVertex);
            if (sourceVertex === destinationVertex)
                return path;
            this.edges[this.findEdgeIndexViaVertex(sourceVertex) as number].edges.map((edge: IEdge<T>) => {
                let isElementVisited = false;
                visitRecord.map((visited: { visitedVertex: T, visited: boolean }) => {
                    if (visited.visitedVertex === edge.edgeValue && visited.visited) {
                        isElementVisited = true;
                    }
                })
                if (!isElementVisited) {
                    visitRecord.push({ visitedVertex: edge.edgeValue, visited: true });
                    queue.push(edge.edgeValue);
                }
            });
        }

        return path;
    }

    private findLowCostPath = (edges: IEdge<T>[], index: number): IEdge<T> => {
        var sortedEdges = edges.sort((a: IEdge<T>, b: IEdge<T>) => {
            return a.weight - b.weight;
        });

        return sortedEdges[sortedEdges.length - index];
    }

    private findEdgeIndexViaVertex = (vertex: T): number | null => {
        let indexStatus: number | null = 0;
        this.edges.map((graphEdge: WeightedGraphNode<T>, index: number) => {
            if (graphEdge.ref === vertex) {
                indexStatus = index;
            }
        });

        console.log('index', indexStatus);
        return indexStatus;
    }


    public getShortestPath(sourceVertex: T, destinationVertex: T): T[] | undefined {
        console.log('***********************************************************************************************');
        if (!this.vertices.length) {
            throw Error("Graph is empty");
            return;
        }
        if (!this.checkIfVertexExist(sourceVertex)) {
            throw Error("Source Vertex does not exist");
            return;
        }

        if (!this.checkIfVertexExist(destinationVertex)) {
            throw Error("Destination Vertex does not exist");
            return;
        }
        const visitRecord: IVisited<T>[] = [];
        const queue: T[] = [];
        const path: T[] = [];
        queue.push(sourceVertex);
        while (queue.length) {
            sourceVertex = queue.shift() as T;
            if (sourceVertex === destinationVertex)
                return path;
            let lowCostEdge: IEdge<T>;


            console.log('eges', this.edges[this.findEdgeIndexViaVertex(sourceVertex) as number].edges);
            lowCostEdge = this.findLowCostPath(this.edges[this.findEdgeIndexViaVertex(sourceVertex) as number].edges, 1);
            console.log('lowCostEdge 1', lowCostEdge);
            let index = 1;
            while (!lowCostEdge) {
                console.log('while 2');
                console.log(this.edges[this.findEdgeIndexViaVertex(sourceVertex) as number].edges.length);
                if(index <= this.edges[this.findEdgeIndexViaVertex(sourceVertex) as number].edges.length){
                    console.log('if');

                    index++;
                } else {
                    console.log('else');

                    break;
                }

                lowCostEdge = this.findLowCostPath(this.edges[this.findEdgeIndexViaVertex(sourceVertex) as number].edges, index);
                console.log('lowCostEdge 2', lowCostEdge);
                if(lowCostEdge)
                break;
            }
            if(!lowCostEdge)
            break;


            let isElementVisited = false;
            visitRecord.map((visited: { visitedVertex: T, visited: boolean }) => {
                if (visited.visitedVertex === lowCostEdge.edgeValue && visited.visited) {
                    isElementVisited = true;
                }
            })
            if (!isElementVisited && this.findEdgeIndexViaVertex(lowCostEdge.edgeValue)) {
                visitRecord.push({ visitedVertex: lowCostEdge.edgeValue, visited: true });
                queue.push(lowCostEdge.edgeValue);
                path.push(lowCostEdge.edgeValue);
            }
        }

        return path;
    }
}
