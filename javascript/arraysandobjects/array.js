//.............array methods......../

//......forEach.....//

/*let numbers = [1,2,3,4,5];
numbers.forEach(function (number){
console.log(number)
});

//......map().....//

let numbers =[1,2,3,4,5]
let squaredNumber = numbers.map(function(number){
    return number*number;
});
console.log(squaredNumber);



//....filter().....//

let numbers =[1,2,3,4,5]
let evenNumber = numbers.filter(function(number){
    return number%2 === 0;
});
console.log(evenNumber);

//....mutati..
//.....push()....//

fruits = ['apple','banana']
fruits.push('cherry','mango');
console.log(fruits);

//.....pop()......//

fruits = ['apple','banana','cherry','mango']
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

//......shift()......//

fruits = ['apple','banana','cherry','mango']
fruits.shift();
console.log(fruits);

//.......unshift().....//

fruits.unshift('orange');
console.log(fruits);
fruits.unshift('apple');
console.log(fruits);



//........slice().......//

// array.slice(start,end);
let fruits = [ 'apple', 'orange', 'banana', 'cherry', 'mango' ]
let citrus = fruits.slice(1,4)
console.log(citrus);
*/

//......splice().........//

/*
//....adding elements
let fruits = ['apple','mango']
fruits.splice(1, 0, 'banana', 'cherry');
console.log(fruits); // [ 'apple', 'banana', 'cherry', 'mango' ]

//.....deleting elements.....//

//let  fruits = ['apple','banana','cherry','mango']
fruits.splice(1,2);
console.log(fruits); // [ 'apple', 'mango' ]
*/

//.......replacing elements....//

let  fruits = ['apple','banana','cherry','mango']
fruits.splice(1, 2, 'blueberry', 'cramberry');
console.log(fruits); // [ 'apple', 'blueberry', 'cramberry', 'mango' ]

