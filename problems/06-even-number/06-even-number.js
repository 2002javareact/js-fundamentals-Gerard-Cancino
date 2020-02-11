/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
  // bitwise?
  // 001 = 1
  // 010 = 2
  // 011 = 3
  // 100 = 4
  // 101 = 5
  // 110 = 6
  // Get last bit
  // if last bit is 1 this is odd return false
  // else return true
  /* reference: 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
      - bases toString(2) 2 is the base sooooo 0 or 1
  */
  let binaryNumber = someNum.toString(2);
  return binaryNumber[binaryNumber.length-1]==='0'?(true):(false);
}
console.log(isEven(11))