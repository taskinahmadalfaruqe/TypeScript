class TopologicalSort {
    private graph: number[][];
    private indegree: number[];
    private n: number;

    // Constructor to initialize the graph and the indegrees array
    constructor(n: number, edges: [number, number][]) {
        this.n = n;
        this.graph = Array.from({ length: n }, () => []);
        this.indegree = Array(n).fill(0);

        // Build the graph from the edges and calculate indegrees
        this.buildGraph(edges);
    }

    // Method to build the graph and calculate the indegree of each node
    private buildGraph(edges: [number, number][]): void {
        for (const [u, v] of edges) {
            this.graph[u].push(v);
            this.indegree[v]++;
        }
    }

    // Method to perform the topological sort
    public sort(): number[] {
        const queue: number[] = [];
        const sortedOrder: number[] = [];

        // Enqueue all nodes with no incoming edges (indegree = 0)
        for (let i = 0; i < this.n; i++) {
            if (this.indegree[i] === 0) {
                queue.push(i);
            }
        }

        // Process the graph nodes
        while (queue.length > 0) {
            const node = queue.shift()!;
            sortedOrder.push(node);

            // For each neighbor, reduce its indegree
            for (const neighbor of this.graph[node]) {
                this.indegree[neighbor]--;
                if (this.indegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // If the sorted order contains all the nodes, return the sorted order
        // Otherwise, return an empty array indicating a cycle
        return sortedOrder.length === this.n ? sortedOrder : [];
    }
}

// Example usage:

// Example 1: No cycle in the graph
const n = 6;
const edges: [number, number][] = [
    [5, 2], [5, 0], [4, 0], [4, 1], [2, 3], [3, 1]
];

const ts = new TopologicalSort(n, edges);
const sortedOrder = ts.sort();
if (sortedOrder.length > 0) { console.log("Topological Sort Order:", sortedOrder); } else { console.log("There is a cycle in the graph, topological sort not possible."); } // Example 2: Graph with a cycle const edgesWithCycle: [number, number][] = [ [0, 1], [1, 0] ]; const tsWithCycle = new TopologicalSort(2, edgesWithCycle); const sortedOrderWithCycle = tsWithCycle.sort(); if (sortedOrderWithCycle.length > 0) { console.log("Topological Sort Order:", sortedOrderWithCycle); } else { console.log("There is a cycle in the graph, topological sort not possible."); }