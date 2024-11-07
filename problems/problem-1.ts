//Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray (array:number[]):number{
    const sumOfArray = array.reduce((sum,current)=>sum+current,0);
   return sumOfArray;
}

//console.log(sumArray([1,2,4]));