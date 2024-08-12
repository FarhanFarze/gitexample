
function generatefibonacci(n) {
    let fibseries=[];
    let a=0,b=1,nextterm;
    for(let i=0;i<n;i++){
        fibseries.push(a);
    nextterm=a+b;
    a=b;
    b=nextterm;
}
return fibseries;
}let fibonacci
let numberofterms=10;
let fibonacciSeries=generatefibonacci(numberofterms)
console.log('fibonacci series up to ${numberofterms}terms:',fibonacciSeries)
