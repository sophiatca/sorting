function bubbleSort(arr, func){

  let temp;

  func = func || function(a, b) {
    if (a < b) return -1;
    if (a > b) return  1;
    return 0;
  }

  for(var j =arr.length-1;j>0;j--){
    for(var i =0; i<j;i++){
      if(func(arr[i], arr[i+1]) === 1) {
        temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;

}
