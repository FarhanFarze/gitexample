const exampleString = "Hello, World!";

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0; 
    for (let i = 0; i < str.length; i++) {
   
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++;
                break; 
            }
        }
    }
    return count;
}

console.log(countVowels(exampleString));