// ✅ Graph creation
// ✅ Add vertex
// ✅ Add edge
// ✅ Remove edge
// ✅ BFS traversal
// ✅ DFS traversal

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a node (vertex)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an edge (connection)
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1); // Undirected graph
  }

  // Remove an edge
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  // BFS (Breadth First Search)
  bfs(start) {
    const queue = [start];
    const visited = {};
    const result = [];

    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  // DFS (Depth First Search)
  dfs(start) {
    const result = [];
    const visited = {};

    const dfsHelper = (vertex) => {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) dfsHelper(neighbor);
      });
    };

    dfsHelper(start);
    return result;
  }
}

// ✅ Example Usage
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log("Graph:", graph.adjacencyList);
console.log("BFS from A:", graph.bfs("A"));
console.log("DFS from A:", graph.dfs("A"));
