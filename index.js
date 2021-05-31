function findMinAndRemove(array){
  // Algorithm:
  // find the minimum value in array 
  // remove that value from the array 
  // repeat this process for length of array 
  
  // Implementation:
  // set a min and minIndex
  // loop through array 
  // compare min to current value
  // update min if needed
  // splice min from the array 
  // return the min value 
  let min = array[0];
  let minIndex = 0;
  
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] < min) {
      min = array[idx];
      minIndex = idx;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function insertionSort(array){

}
