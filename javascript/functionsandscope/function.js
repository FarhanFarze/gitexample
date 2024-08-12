//......functiondeclaration.....//

/*function greet()
{
    return "hello";
}
console.log(greet());
//hello

function add(a,b){
    return a+b;
}
console.log(add(2,3));
//5

//....functionexpression....//

//..named function...//
let sum = function add (a,b){
    return a+b;
}
console.log(sum(6,3));
//9

//..anonymous function...//
let greet = function(name){
    return ("hello " + name);
}
console.log(greet("farhan"));
//hello farhan

//......funtion parameters and arguments........//

//......function scope and global scope......//

let x = 10;
function test (){
    let y = 20
    console.log(y);
}
console.log(x);
//console.log(y);

//.....function return....//

let side;
let area;
function calculateArea(side){
    return side * side;
}
area = calculateArea (4);
console.log(area);
//16
*/


//....closure....//

//....closure is a function that has access to the parent scope even after the parent function has returned

function outer() {
    let count = 0
    return function inner (){
        count ++;
        return count;
    }
}
let counter = outer();
console.log(counter);
console.log(counter());
console.log(counter());



