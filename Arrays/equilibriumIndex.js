// You are given an array A of integers of size N.

// Your task is to find the equilibrium index of the given array

// The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
// NOTE:

// Array indexing starts from 0.
// If there is no equilibrium index then return -1.
// If there are more than one equilibrium indexes then return the minimum index.
module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           let PF = [];
           PF[0] = Number(A[0]);
           for(let i=1;i<A.length;i++){
               PF[i] = PF[i-1] + Number(A[i]);
           }
           for(let j=0;j<A.length;j++){
               let left;
               let right;
               if(j==0) left = 0;
               else left = PF[j-1]
               right = PF[A.length-1]- PF[j]
               if(left == right){
                   return j
               }
           }
           return -1
       }
   };


   solve([-3,2,4,-1]);
   