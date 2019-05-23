const graph = new Map([
  ["start", new Map([["a", 6], ["b", 2]])],
  ["a", new Map([["fin", 1]])],
  ["b", new Map([["a", 3], ["fin", 5]])],
  ["fin", new Map([])]
]);

const costs = new Map([["a", 6], ["b", 2], ["fin", Infinity]]);

const parents = new Map([["a", "start"], ["b", "start"], ["fin", null]]);

const processed = [];

function Dijkstra() {
  let node = findLowestCostNode(costs);
  while (node !== null) {
    const cost = costs.get(node);
    const neighbors = graph.get(node);
    for (const n of neighbors.keys()) {
      const newCost = cost + neighbors.get(n);
      if (newCost < costs.get(n)) {
        costs.set(n, newCost);
        parents.set(n, node);
      }
    }
    processed.push(node);
    node = findLowestCostNode(costs);
  }
}

function findLowestCostNode(costs) {
  let lowestCost = Infinity,
    lowCostNode = null;
  for (const node of costs.keys()) {
    const cost = costs.get(node);
    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = cost;
      lowCostNode = node;
    }
  }
  return lowCostNode;
}

Dijkstra();
console.log(processed);
