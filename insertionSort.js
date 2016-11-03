function insertionSort(arr) {
  var newArr = [];
  debugger;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < newArr.length; j++) {
      if (arr[i] < newArr[j]) {
        newArr.splice(j, 0, arr[i]);
        break;
      }

    }
    if (newArr.length === i) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
