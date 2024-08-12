function exampleFunction() 
{
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x);
    }
    console.log(x);

}
exampleFunction();
// console.log("outside function")