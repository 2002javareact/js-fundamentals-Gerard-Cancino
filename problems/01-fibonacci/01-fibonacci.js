/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function getPerformance(func,n){
  console.time(`${func.name}`)
  func(n);
  console.timeEnd(`${func.name}`)
}
function fib1(n) {
  let map = [0,1];
  for(let i=2;i<n;i++){
    map[i]=map[i-1]+map[i-2];
  }
  return map[n-1]; 
}
function fib2(n){
  let map = [0,1];
  function fib(index){
    if(map[index]!==undefined){
      return map[index]
    }
      return fib(index-1)+fib(index-2);
  }
  return fib(n-1);
}
function run(n){
  console.log(`1st Alg Result: ${fib1(n)}`)
  getPerformance(fib1,n)
  console.log(`2nd Alg Result: ${fib2(n)}`)
  getPerformance(fib2,n)
}
run(5)
run(20)

/*
  Fib1 was better for larger calculations
  Fib2 was better for lower numbers
*/