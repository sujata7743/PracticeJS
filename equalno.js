//how to check two numbwres are approximately equal in JavaScript
// First Approach//
// const checkApprox=(num1,num2,eposition)=>{
//     return Math.abs(num1-num2)<eposition;
//  }
//O/p=true


//Second Approach
//  console.log(checkApprox(10.003,10.001,0.005));
//  const checkApprox=(n1,n2,eposition=0.004) =>{
//      return Math.abs(n1-n2)<eposition;
//  }
//  console.log(checkApprox(Math.PI/2.0,1.5708));
//O/p=true



//Third Approach
// const checkApprox = (n1, n2, eposition = 0.004) => {
//     return Math.abs(n1 - n2) < eposition;
// }
// console.log(checkApprox(0.003, 0.003));
//O/p=true