function bubbleSort(arr){
    let len =  arr.length;
    for(let i =0; i < len; i++){
    for(let j=0; j< len; j++){
    if(arr[j] > arr[j+1]){
    let tmp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = tmp;
    }}                            }
    return arr;
    }

function selectionSort(arr){
        let len = arr.length;
        for(let i =0; i < len; i++){
        let min = i;
        for(let j = i+ 1; j < len; j++){
        if(arr[min] > arr[j]){
        min = j;}
        }
        if (min !== i){
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp}
        }
        return arr }

function insertionSort(arr){
            let length = arr.length;
            for (let i = 1; i < length; i++) {
                let key = arr[i];
                let j = i - 1;
                while (j >= 0 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                }
                arr[j + 1] = key;
            }
            return arr;
        };

function merge (left, right) {
            let resultArray = [], leftIndex = 0, rightIndex = 0;
          
            // We will concatenate values into the resultArray in order
            while (leftIndex < left.length && rightIndex < right.length) {
              if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++; // move left array cursor
              } else {
                resultArray.push(right[rightIndex]);
                rightIndex++; // move right array cursor
              }
            }
          
            // We need to concat here because there will be one element remaining
            // from either left OR the right
            return resultArray
                    .concat(left.slice(leftIndex))
                    .concat(right.slice(rightIndex));
          }
          
function mergeSort (unsortedArray) {
            // No need to sort the array if the array only has one element or empty
            if (unsortedArray.length <= 1) {
              return unsortedArray;
            }
            // In order to divide the array in half, we need to figure out the middle
            const middle = Math.floor(unsortedArray.length / 2);
          
            // This is where we will be dividing the array into left and right
            const left = unsortedArray.slice(0, middle);
            const right = unsortedArray.slice(middle);
          
            // Using recursion to combine the left and right
            return merge(
              mergeSort(left), mergeSort(right)
            );
          }

 function quickSort(array) {
            if(array.length < 2) {
              return array;
            }
          
            var pivot = array[0];
            var lesserArray = [];
            var greaterArray = [];
          
            for (var i = 1; i < array.length; i++) {
              if ( array[i] > pivot ) {
                greaterArray.push(array[i]);
              } else {
                lesserArray.push(array[i]);
              }
            }
          
            return quickSort(lesserArray).concat(pivot, quickSort(greaterArray));
          }          