function binarySearch(list, item) {
  let low = 0,
    high = list.length - 1,
    mid,
    guess;
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
const myList = [1, 3, 5, 7, 9];
console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -1));
