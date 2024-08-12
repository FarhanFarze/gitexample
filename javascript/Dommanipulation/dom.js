// getElementById
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightblue";
// console.log(myTitle.innerText);

// getElementsByclassName
let desserts = document.getElementsByClassName("desserts");
desserts[2].style.backgroundColor = "green";
 
// // getElementsBytagName
// let vegetables = document.getElementsByTagName("li");
// vegetables[0].style.backgroundColor = "yellow";


// // getElementsByName
// let fruits = document.getElementsByName("fruits");
// for (let i = 0; i < fruits.length; i++){
//    if(fruits[i].checked){
//        console.log(fruits[i].value);
//     }
// }

//QuerySelector
let sel = document.querySelector("#id2");
sel.style.backgroundColor = "violet";
////or
let sele = document.querySelector(".myClass");
sele.style.backgroundColor = "pink";

////QuerySelectorALL
let elements = document.querySelectorAll("li")
elements.forEach(function(element) {
  element.style.backgroundColor = "lightgreen";
})
////// or
// let elements = document.querySelectorAll("li")
// elements.forEach(element => {
//   element.style.backgroundColor = "lightgreen";
// })



