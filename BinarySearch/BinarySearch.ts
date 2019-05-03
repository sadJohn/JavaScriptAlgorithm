function binarySearch(list: number[], item: number) {
  let low: number = 0;
  let high: number = list.length - 1;
  let mid: number;
  let guess: number;
  
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = list[mid];
    if (guess === item) return mid;
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

const myList: number[] = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -1));
