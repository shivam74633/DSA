const rotate = (arr,start,end) => {
    while(start<end){
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
    }
    return arr;
}


console.log(rotate([1,2,3,4,5],0,4));