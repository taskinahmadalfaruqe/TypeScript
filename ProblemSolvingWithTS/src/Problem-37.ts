{
// Block Scoping

class MinHeap {
    private heap: [number, number][] = [];

    insert(node: [number, number]) {
        this.heap.push(node);
        this.bubbleUp();
    }

    extractMin(): [number, number] | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown();
        return min;
    }

    private bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index][1] >= this.heap[parentIndex][1]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    private bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let left = 2 * index + 1, right = 2 * index + 2;
            let smallest = index;
            
            if (left < length && this.heap[left][1] < this.heap[smallest][1]) {
                smallest = left;
            }
            if (right < length && this.heap[right][1] < this.heap[smallest][1]) {
                smallest = right;
            }
            if (smallest === index) break;
            
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    size(): number {
        return this.heap.length;
    }
}

function dijkstra(n: number, edges: number[][], startNode: number, endNode: number): number {
    const graph: Map<number, [number, number][]> = new Map();

    for (const [u, v, w] of edges) {
        if (!graph.has(u)) graph.set(u, []);
        graph.get(u)!.push([v, w]);
    }

    const distances = new Array(n).fill(Infinity);
    distances[startNode] = 0;

    const minHeap = new MinHeap();
    minHeap.insert([startNode, 0]);

    while (minHeap.size() > 0) {
        const [currentNode, currentDist] = minHeap.extractMin()!;

        if (currentNode === endNode) return currentDist;

        if (graph.has(currentNode)) {
            for (const [neighbor, weight] of graph.get(currentNode)!) {
                const newDist = currentDist + weight;
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    minHeap.insert([neighbor, newDist]);
                }
            }
        }
    }

    return -1;
}

// Test Case
const n = 5;
const edges = [
  [0, 1, 10], 
  [0, 2, 3], 
  [1, 2, 1], 
  [2, 1, 4], 
  [1, 3, 2], 
  [2, 3, 8], 
  [3, 4, 7]
];
const startNode = 0;
const endNode = 4;

console.log(dijkstra(n, edges, startNode, endNode)); //Output: 18
// Block Scoping
}
