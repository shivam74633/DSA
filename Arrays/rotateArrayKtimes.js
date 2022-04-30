// Given an array of integers A and multiple values in B, which represents the number of times array A needs to be left rotated.

// Find the rotated array for each value and return the result in the from of a matrix where ith row represents the rotated array for the ith value in B.

module.exports = { 
    //param A : array of integers
    //param B : array of integers
    //return a array of array of integers
       solve : function(A, B){
           const finalResult = [];
           for(let i=0;i<B.length;i++) {
               const res =[...A];
               let k = Number(B[i]);
               const len = A.length
               if(k > len){
                   k = k % len;
               }
               rotate(res,0,len-1);
               rotate(res,0,len-k-1);
               rotate(res,len-k,len-1);
               finalResult.push(res);
           }
           return finalResult
       },
   };
   
const rotate = (arr,start,end) => {
       while(start<end){
               const temp = arr[start];
               arr[start] = arr[end];
               arr[end] = temp;
               start++;
               end--;
       }
       return;
}


console.log(solve([1,2,3,4,5],[2,3]));