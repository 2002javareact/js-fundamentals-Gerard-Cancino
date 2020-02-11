/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  console.log(numArray.length)
  for(let i = 0;i<numArray.length-1;i++){
    for(let j = 0;j<numArray.length-i-1;j++){
      if(numArray[j]>numArray[j+1]){
        switchValues(j,j+1,numArray);
      } 
    }
  }
  return numArray;
}

function switchValues(first,second,numArray){
  const temp = numArray[first];
  numArray[first] = numArray[second];
  numArray[second] = temp;
}

console.log(bubbleSort([5,1,3,2,5,6]))