/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  if(sumNum===0){
    return 0;
  }
  // sum, current
  const findFactorialNum = (sum, current) => {
    if(current!==0) return findFactorialNum(sum*current,current-1);
    else return sum;
  } 
  return findFactorialNum(1,sumNum);
}

console.log(factorial(5));