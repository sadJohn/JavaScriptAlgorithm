let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = new Map([
  ["kone", new Set(["id", "nv", "ut"])],
  ["ktwo", new Set(["wa", "id", "mt"])],
  ["kthree", new Set(["or", "nv", "ca"])],
  ["kfour", new Set(["nv", "ut"])],
  ["kfive", new Set(["ca", "az"])]
]);

const finalStation = new Set();

function greedy() {
  while (statesNeeded.size !== 0) {
    let bestStation = null;
    let statesCovered = new Set();
    for (const station of stations.keys()) {
      let covered = intersect(statesNeeded, stations.get(station));
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }
    statesNeeded = difference(statesNeeded, statesCovered);
    finalStation.add(bestStation);
    stations.delete(bestStation);
  }
}

greedy();
console.log(stations, finalStation);

//set1 & set2
function intersect(set1, set2) {
  return new Set([...set1].filter(i => set2.has(i)));
}

//set1 - set2
function difference(set1, set2) {
  return new Set([...set1].filter(i => !set2.has(i)));
}
