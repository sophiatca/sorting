function split(wholeArray){
  //ex. 1.5->1
  let middle = Math.ceil(wholeArray.length/2);
  let firstHalf = wholeArray.slice(0,middle);
  let secondHalf = wholeArray.slice(middle);
  return [firstHalf,secondHalf];
}

function merge (arr1, arr2,func){
  let result = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (func(arr1[0], arr2[0]) ===-1) {
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


function mergeSort(arr, func) {

   func = func || function(a, b) {
    if (a < b) return -1;
    if (a > b) return  1;
    return 0;
  }


  if (arr.length < 2) {
    return arr;
  }
  var newArr = split(arr);
  return merge(mergeSort(newArr[0], func), mergeSort(newArr[1], func),func);

}
