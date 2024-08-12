//........LOGICAL AND &&.......//

let result1 = (true && false);
console.log(result1);
//false

let result2 = (true && true);
console.log(result2);
//true

let result3 = (0 && 10);
console.log(result3);
//0

let result4 = ("" && 0);
console.log(result4);
//empty

let result5 = (10 && "");
console.log(result5);
//empty

let result6 = ("Hello" && "world");
console.log(result6);
//World

let result7 = (5 && 10);
console.log(result7); //10

//.......LOGICAL OR ||.......//

let result8 = (true || true);
console.log(result8); //true

let result9 = (true || false);
console.log(result9); //true

let result10 = (false || true);
console.log(result10); //true

let result11 = (false || false);
console.log(result11); //false

let result12 = (10 || 0);
console.log(result12); //10

let result13 = (0 || "");
console.log(result13); //empty

let result14 = ("" || 0);
console.log(result14); //0

//.......LOGICAL NOT !.......//

let result15 = (!true);
console.log(result15); //false

let result16 = (!false);
console.log(result16); //true

let result17 = (!0);
console.log(result17); //true

let result18 = (!10);
console.log(result18); //false

let result19 = (!"");
console.log(result19); //true
