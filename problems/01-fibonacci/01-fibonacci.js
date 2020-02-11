/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
  let map = [0,1];
  for(let i=2;i<=n;i++){
    map[i]=map[i-1]+map[i-2];
  }
  return map[n];
}

console.log(fib(8))