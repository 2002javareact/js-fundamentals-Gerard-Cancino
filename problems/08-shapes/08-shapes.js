/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  if(shape==='Square') return createSquare(height,character);
  else if(shape==='Triangle') return createTriangle(height,character);
  else if(shape==='Diamond') return createDiamond(height,character);
  else return 'please input either Square, Triangle, Diamond';
};

const createSquare = (height,character) => {
  let firstLine = "";
  let stringShape = "";
  for(let i=0;i<height;i++){
    firstLine+=character;
  }
  for(let i=0;i<height;i++){
    stringShape+=firstLine;
    if(i!==height-1) stringShape+='\n' 
  }
  return stringShape.substring(0,stringShape.lastIndexOf(`\n`));
};
const createTriangle = (height,character) => {
  let stringShape = '';
  for(let i=0;i<height;i++){
    for(let j=0;j<i+1;j++){
      stringShape+=character;
      if(j===i) stringShape+='\n';
    }
  }
  return stringShape.substring(0,stringShape.lastIndexOf(`\n`));
};
const createDiamond = (height,character) => {
  /*
    while + for -> while + for => O(N/2*N/2)+O(M/2*M/2)
    for2 => O(N2)
  */
  const map = [];
  let middle = Math.floor(height/2);
  for(let i=0;i<height/2;i++){
    let x = '';
    let k = 0;
    while(k<middle-i){
      x+=' ';
      k++;
    }
    while(k<middle+i+1){
      x+=character;
      k++;
    }
    map.push(x+`\n`);
  }
  for(let i=middle-1;i<0;i++){
    map.push(map[i]);
  }
  let result = '';
  for(let i=0;i<middle;i++){
    result+=map[i];
  }
  for(let i=middle;i>=0;i--){
    result+=map[i];
  }
  return result.substring(0,result.lastIndexOf(`\n`));
};
console.log(printShape('Square',5,'*'))
console.log(printShape('Triangle',3,'X'))
console.log(printShape('Diamond',7,'$'))