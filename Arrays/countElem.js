// Given an array count no of elements having ateast one element greater than itself ?


// Approach
// 1. Find count of max element in an array.
// 2. Retrun Len(Arr) - countOfMax
// Because all element smaller than max have atleast max elem greater than them.

const countElem = (arr) => {
    let max = Number.MIN_SAFE_INTEGER;
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] >= max) {
            if(arr[i] == max){
                count++;
            } else {
                max = arr[i];
                count = 1;
            }
        }
    }
    console.log(arr.length - count);
}

// Expected output = 5
countElem([-3,-2,6,8,4,8,5])

// Expected output = 6
countElem([2,3,10,7,3,2,10,8])