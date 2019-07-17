export interface IGraphNode<T> {
    pushEdges(edges: T): void;
}
class GraphNode<T> implements IGraphNode<T> {
    public ref: T;
    public edges: T[] = [];
    constructor(ref: T) {
        this.ref = ref;
    }

    public pushEdges = (edges: T) => {
        this.edges.push(edges);
    }
}

export interface UndirectedGraph<T> {
    removeEdge(sourceVertex: T, destinationVertex: T) : void;
    addEdge(sourceVertex: T, destinationVertex: T) : void;
    pathFromTo(sourceVertex: T, destinationVertex: T) : void;
    addVertex(vertex: T): void;
    size(): number;
    relation(): void;
    traversDFS(vertex: T, callback: (vertex: T) => void): void;
    traversBFS(vertex: T, callback: (vertex: T) => void): void;
    removeVertex(vertex: T): void;
    showGraph(): void;
}
export class DirectedGraph<T> {
    private vertices: T[] = [];
    private edges: GraphNode<T>[] = [];
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
        const newEdge: GraphNode<T> = new GraphNode<T>(vertex);
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
            this.edges.map((graphEdge: GraphNode<T>, index: number) => {
                if (graphEdge.ref === vertex) {
                    foundVertexIndex = index;
                    return;
                }
            });
            this.edges[foundVertexIndex].edges = this.edges[foundVertexIndex].edges.filter((edge: T) => {
                return edge === vertex;
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

    public addEdge = (sourceVertex: T, destinationVertex: T) => {
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
        this.edges.map((graphEdge: GraphNode<T>, index: number) => {
            if (graphEdge.ref === sourceVertex) {
                foundVertexIndex1 = index;
            }
            if (graphEdge.ref === destinationVertex) {
                foundVertexIndex2 = index;
            }
            if (foundVertexIndex1 > -1 && foundVertexIndex2 > -1)
                return;
        });
        this.edges[foundVertexIndex1].pushEdges(destinationVertex);
        this.edges[foundVertexIndex2].pushEdges(sourceVertex);
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
        let foundVertexIndex2 = -1;
        this.edges.map((graphEdge: GraphNode<T>, index: number) => {
            if (graphEdge.ref === sourceVertex) {
                foundVertexIndex1 = index;
            }
            if (graphEdge.ref === destinationVertex) {
                foundVertexIndex2 = index;
            }
            if (foundVertexIndex1 > -1 && foundVertexIndex2 > -1)
                return;
        });
        this.edges[foundVertexIndex1].edges = this.edges[foundVertexIndex1].edges.filter((edge: T) => {
            return edge === destinationVertex;
        });
        this.edges[foundVertexIndex2].edges = this.edges[foundVertexIndex2].edges.filter((edge: T) => {
            return edge === sourceVertex;
        });
    }

    public showGraph = () => {
        if (!this.vertices.length) {
            throw Error("Graph is empty");
            return;
        }
        this.vertices.map((vertex: T) => {
            this.edges.map((graphEdge: GraphNode<T>) => {
                if (graphEdge.ref === vertex)
                    console.log(`${vertex} --> ${graphEdge.edges.join(' | ')}`);
            });
        });
    }

    private findEdgeIndexViaVertex = (vertex: T): number | null => {
        let indexStatus: number | null = 0;
        this.edges.map((graphEdge: GraphNode<T>, index: number) => {
            if (graphEdge.ref === vertex) {
                indexStatus = index;
            }
        });

        return indexStatus;
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
        var queue = [];
        let visitRecord: { visitedVertex: T, visited: boolean }[] = [];
        visitRecord.push({ visitedVertex: vertex, visited: true });
        queue.push(vertex);
        while (queue.length) {
            vertex = queue.shift() as T;
            callback(vertex);
            this.edges[this.findEdgeIndexViaVertex(vertex) as number].edges.map((edge: T) => {
                let isElementVisited = false;
                visitRecord.map((visited: { visitedVertex: T, visited: boolean }) => {
                    if (visited.visitedVertex === edge && visited.visited) {
                        isElementVisited = true;
                    }
                })
                if (!isElementVisited) {
                    visitRecord.push({ visitedVertex: edge, visited: true });
                    queue.push(edge);
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

       const visitRecord: { visitedVertex: T, visited: boolean }[] = [];
        this.traversDFSBase(vertex, visitRecord, callback);
      };

    private traversDFSBase = (vertex: T, visitRecord: { visitedVertex: T, visited: boolean }[], callback: (vertex: T) => void) => {
        
        visitRecord.push({ visitedVertex: vertex, visited: true });
        if(this.edges[this.findEdgeIndexViaVertex(vertex) as number] !== undefined) {
            callback(vertex);
          }
            this.edges[this.findEdgeIndexViaVertex(vertex) as number].edges.map((edge: T) => {
                let isElementVisited = false;
                visitRecord.map((visited: { visitedVertex: T, visited: boolean }) => {
                    if (visited.visitedVertex === edge && visited.visited) {
                        isElementVisited = true;
                    }
                })
                if (!isElementVisited) {
                    this.traversDFSBase(edge, visitRecord, callback);
                }
            });
    }
}