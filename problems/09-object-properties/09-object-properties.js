/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */

const someObj = {
  el1:'test1',
  el2:'test2',
  el3:[1,3,5,1],
  el4: {
    el1:'test3',
    el2:{
      el1:'test4'
    }
  }
}

function objectProperties(someObj) {
  let allProperties= '{\n';
  Object.keys(someObj).map((el)=>{
    isAnObject(someObj[el])?(allProperties+=el+': '+objectProperties(someObj[el])):(
      allProperties+=`${el} ${someObj[el]}\n`
    )
  })
  allProperties+='}\n';
  return allProperties;
}

function isAnObject(someObj){
  if(typeof someObj === 'object') return true;
  return false;
}

console.log(objectProperties(someObj));