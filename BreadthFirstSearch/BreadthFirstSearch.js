const graph = new Map([
  ["you", ["alice", "bob", "claire"]],
  ["bob", ["anuj", "peggy"]],
  ["alice", ["peggy"]],
  ["claire", ["thom", "jonny"]],
  ["anuj", []],
  ["peggy", []],
  ["thom", []],
  ["jonny", []]
]);

function breadthFirstSearch(name) {
  let searchQueue = [...graph.get(name)];
  const searched = [];

  while (searchQueue.length > 0) {
    let person = searchQueue.shift();
    if (searched.indexOf(person) === -1) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      } else {
        searchQueue = [...searchQueue, ...graph.get(person)];
        searched.push(person);
      }
    }
  }
  console.log(`Not found!`);
  return false;
}

function personIsSeller(name) {
  return name[name.length - 1] === "m";
}

breadthFirstSearch("you");
