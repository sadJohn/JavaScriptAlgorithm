function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function BubbleSort(arr) {
  let sorted = false;
  let length = arr.length;
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < length; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i);
        sorted = false;
      }
    }
    length--;
  }
}

const arr = [2, 1, 3, 6, 4, 7, 5];
console.log(arr.toString());
BubbleSort(arr);
console.log(arr.toString());
