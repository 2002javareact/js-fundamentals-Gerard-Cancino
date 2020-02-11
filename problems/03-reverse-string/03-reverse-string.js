/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  // O(n/2)
  const strArray = someStr.split('');
  for(let i=0;i<Math.floor(strArray.length/2);i++){
    let j = strArray.length-i-1;
    switchChar(i,j,strArray);
  }
  return strArray.join('');
}
function switchChar(first,second,someStr){
  const temp = someStr[first];
  someStr[first] = someStr[second];
  someStr[second] = temp;
}
console.log(reverseStr('testingthefunction'))