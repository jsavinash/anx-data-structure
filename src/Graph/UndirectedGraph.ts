

class GraphVertex<T> {
    public data: T;
    constructor(data: T) {
        this.data = data;
    }
}

class GraphEdge<T> {
    public ref: GraphVertex<T>;
    public edges: GraphVertex<T>[] = [];
    constructor(ref: GraphVertex<T>, edges: GraphVertex<T> | null) {
        this.ref = ref;
        if (edges)
            this.edges.push(edges);
    }

    public pushEdges = (edges: GraphVertex<T>) => {
        this.edges.push(edges);
    }
}

export class UndirectedGraph<T> {
    private vertices: GraphVertex<T>[] = [];
    private edges: GraphEdge<T>[] = [];
    private numberOfEdges: number = 0;

    public addVertex = (vertex: T) => {
        const newGraphVertex: GraphVertex<T> = new GraphVertex<T>(vertex);
        const newGraphEdge: GraphEdge<T> = new GraphEdge<T>(newGraphVertex, null);
        this.vertices.push(newGraphVertex);
        this.edges.push(newGraphEdge);
        this.numberOfEdges++;
    }

    public removeVertex = (vertex: T) => {
        let foundVertexIndex = -1;
        let foundEdgeIndex = -1;
        this.vertices.map((graphVertex: GraphVertex<T>, index: number) => {
            if (graphVertex.data == vertex) {
                foundVertexIndex = index;
                return;
            }
        });
        if (foundVertexIndex > -1) {
            this.edges.map((graphEdge: GraphEdge<T>, index: number) => {
                if (graphEdge.ref.data === this.vertices[foundVertexIndex].data) {
                    foundEdgeIndex = index;
                    return;
                }
            });
        }
        if (foundVertexIndex > -1) {
            this.vertices.splice(foundVertexIndex, 1);
        }
        if (foundEdgeIndex > -1) {
            this.edges.splice(foundEdgeIndex, 1);
        }
    }

    public size = () => {
        return this.vertices.length;
    }

    public relations = () => {
        return this.numberOfEdges;
    }

    public addEdge = (vertex1: T, vertex2: T) => {
        const graphVertex1: GraphVertex<T> = new GraphVertex<T>(vertex1);
        const graphVertex2: GraphVertex<T> = new GraphVertex<T>(vertex2);
        let foundVertexIndex1 = -1;
        let foundVertexIndex2 = -1;
        this.edges.map((graphEdge: GraphEdge<T>, index: number) => {
            if (graphEdge.ref.data === vertex1) {
                foundVertexIndex1 = index;
            }
            if (graphEdge.ref.data === vertex2) {
                foundVertexIndex2 = index;
            }
            if (foundVertexIndex1 > -1 && foundVertexIndex2 > -1)
                return;
        });
        this.edges[foundVertexIndex1].pushEdges(graphVertex2);
        this.edges[foundVertexIndex2].pushEdges(graphVertex1);
    }

    public removeEdge = (vertex1: T, vertex2: T) => {
        let foundVertexIndex1 = -1;
        let foundVertexIndex2 = -1;
        this.edges.map((graphEdge: GraphEdge<T>, index: number) => {
            if (graphEdge.ref.data === vertex1) {
                foundVertexIndex1 = index;
            }
            if (graphEdge.ref.data === vertex2) {
                foundVertexIndex2 = index;
                if (foundVertexIndex1 > -1 && foundVertexIndex2 > -1)
                    return;
            }
        });
        this.edges[foundVertexIndex1].edges = this.edges[foundVertexIndex1].edges.filter((edge: GraphVertex<T>) => {
            return edge.data === vertex1;
        });
        this.edges[foundVertexIndex2].edges = this.edges[foundVertexIndex2].edges.filter((edge: GraphVertex<T>) => {
            return edge.data === vertex2;
        });

    }
    public print = () => {
        let collectEdgeData: string[] = [];
        this.vertices.map((graphVertex: GraphVertex<T>) => {
            collectEdgeData = [];
            this.edges.map((graphEdge: GraphEdge<T>) => {
                if (graphEdge.ref === graphVertex) {
                    graphEdge.edges.map((graphVertex2: GraphVertex<T>) => {
                        collectEdgeData.push(`${graphVertex2.data}`);
                    });
                }
            });
            console.log(`${graphVertex.data} -->`, collectEdgeData.join('|'));
        });
    };
}