let arr = [1,2,3,4,5]
function swap(arr)
{
    let left = 0;
    let right = arr.length-1;
    while (left < right){
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
console.log(swap(arr));
