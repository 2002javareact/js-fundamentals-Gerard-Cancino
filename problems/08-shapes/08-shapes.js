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
    if(i!==height-1) stringShape+='/n' 
  }
  return stringShape;
};
const createTriangle = (height,character) => {
  let stringShape = '';
  for(let i=0;i<height;i++){
    for(let j=0;j<i+1;j++){
      stringShape+=character;
      if(j===i) stringShape+='/n';
    }
  }
  return stringShape;
};
const createDiamond = (height,character) => {
  /*
    while + for -> while + for => O(N/2*N/2)+O(M/2*M/2)
    for2 => O(N2)
  */
  const stringShape = [height][height];
  const middle = Math.floor(height/2);
  console.log(stringShape)
  let i = 0;
  while(i<middle){
    for(let j=0;j<i;j++){
      height[i][middle-j]=character;
    }
    i++
  }
  console.log(stringShape);
};

createDiamond(3,'$')