/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  const newArr = [];
  for(let i=0;i<someArr.length;i++){
    if(index!==i){
      newArr.push(someArr[i]);
    }
  }
  return newArr;
}
console.log(spliceElement([],2))
console.log(spliceElement([1,2,3,4,5],2))