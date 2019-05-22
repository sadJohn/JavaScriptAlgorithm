function findSmallest(arr) {
  let smallest = arr[0],
    smallestIndex = 0;
  arr.forEach((element, index) => {
    if (element < smallest) {
      smallest = element;
      smallestIndex = index;
    }
  });
  return smallestIndex;
}

function selectionSort(arr) {
  const newArr = [];
  while (arr.length !== 0) {
    newArr.push(+arr.splice(findSmallest(arr), 1));
  }
  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10, 0, -1]))
