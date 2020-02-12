/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function determineSubstring(someStr, startIndex, endIndex) {
  // sooo prob not someStr.substring(startIndex,endIndex) //our own algorithm
  let subString = '';
  for(let i = startIndex;i<someStr.length&&i<endIndex;i++){
    subString+=someStr[i];
  }
  return subString;
}

function tryInputIsString(someStr){
  try{
    if(typeof(someStr)!='string') throw new Error('input is not a string');
  }
  catch(err){
    console.log(err)
  };
}
function substring(someStr,startIndex,endIndex){
  tryInputIsString(someStr);
  return determineSubstring(someStr,startIndex,endIndex);
}

const someStr = 5;
console.log(substring(someStr,0,3));

