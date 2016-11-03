function split(wholeArray){
  //ex. 1.5->1
  let middle = Math.ceil(wholeArray.length/2);
  let firstHalf = wholeArray.slice(0,middle);
  let secondHalf = wholeArray.slice(middle);
  return [firstHalf,secondHalf];
}

function merge (arr1, arr2){
  let result = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    }
    else {
      result.push(arr2.shift());
    }
  }

  result = result.concat(arr1.concat(arr2));

  return result;
}

// function mergeSort(arr) {
//   arr.map(function(element){return [element]})
// }


function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var newArr = split(arr);
  return merge(mergeSort(newArr[0]), mergeSort(newArr[1]));

}
