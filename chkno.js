// Write a js program to check two numbers and return true if one of the number is 100 or if the sum of the two number is 100

//First Approach
const isEqualTo100=(a,b)=> a ===100 || b ===100 ||(a+b)===100;
console.log(isEqualTo100(50,50));
console.log(isEqualTo100(40,60));
//o/p=true
//    true


//S@econd Approach
const isEqualTo=(a,b)=> a ===100 || b ===100;
  console.log(isEqualTo(100,0));
 console.log(isEqualTo(0,100));
//o/p=true
//    true
