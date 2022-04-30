// Q2. Count ways to make sum of odd and even indexed elements equal by removing an array element
// Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal

module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           // even Prefix array
           let PFEven = [];
           PFEven[0] = Number(A[0]);
           for(let i=1;i<A.length;i++){
               if(i % 2==0){
                   PFEven[i] = PFEven[i-1]+ Number(A[i])
               } else {
                   PFEven[i] = PFEven[i-1];
               }
           }
           // odd prefix array
           let PFOdd = [];
           PFOdd[0] = 0;
           for(let i=1;i<A.length;i++){
               if(i % 2==0){
                   PFOdd[i] = PFOdd[i-1]
               } else {
                   PFOdd[i] = PFOdd[i-1]+ Number(A[i]);
               }
           }
           // calculating no of special indexes
           let count = 0;
           for(let i=0;i<A.length;i++) {
               let tEven;
               let tOdd;
               if(i==0) {
                   tEven = PFOdd[A.length-1] - PFOdd[i];
                   tOdd = PFEven[A.length-1] - PFEven[i];
               } else {
                   tEven = PFEven[i-1] + PFOdd[A.length-1] - PFOdd[i];
                   tOdd = PFOdd[i-1] + PFEven[A.length-1] - PFEven[i];
               }
               if(tEven == tOdd){
                   count++;
               }
           }
           return count
       }
   }