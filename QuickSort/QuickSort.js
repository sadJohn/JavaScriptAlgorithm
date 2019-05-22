function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const less = arr.filter(element => element < pivot);
  const greater = arr.filter(element => element > pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([1, 4, 6, 2, 0, -1, 10]));
