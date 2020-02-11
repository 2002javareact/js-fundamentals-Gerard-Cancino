/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    // O(n/2)
    // modifying my code from reverse string
    if(someStr.length===0) return false;
    const strArray = someStr.split('');
    for(let i=0;i<Math.floor(strArray.length/2);i++){
      let j = strArray.length-i-1;
      if(strArray[i]!==strArray[j]) return false;
    }
    return true;
}

console.log(isPalindrome(''))