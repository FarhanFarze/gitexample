
function palindrome(str){
    let left = 0;
    let right = str.length-1;
    while(left < right){
        if (str[left]!==str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(palindrome("malayalam"));

let arr = [1,2,3];
console.log(arr.length);
