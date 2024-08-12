// //// Example for click event
// let button = document.getElementById('mybutton');
// button.addEventListener('click', function(){
//     alert('Button Clicked');
// });


// let myform = document.getElementById('myForm');

// myform.addEventListener('')


//Example for input events
let input = document.getElementById('username');
input.addEventListener('input',function() {
    console.log(input.value);
});

//Example for change events
let select = document.getElementById('myselect');
select.addEventListener('change',function(){
    console.log(select.value);
})

//Example for Keydown event
document.addEventListener('keydown',function(event){
    console.log('key pressed:',event.key);
})

//Example for addListerner and removeListner
let button1 = document.getElementById('myButton1');
function handleClick(){
    alert('Button Clicked!');
}

button1.addEventListener('click', handleClick);
// button1.removeEventListener('click', handleClick);