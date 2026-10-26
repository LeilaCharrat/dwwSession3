console.log("hello world");

//we target the html button element

//html elements related to the text
let button = document.querySelector("#button-name");
let inputName = document.querySelector("#input-name");
//html eleme,ts related to the color
let buttonColor = document.querySelector("#button-color");
let inputColor = document.querySelector("#input-color");
//html element related to the target
let target= document.querySelector("#target");

console.log(button);

button.addEventListener("click",function(){
    //and then we do stuff//
    console.log(inputName.value);
    //we replace the content of the target
    //with the one from the input
    target.innerHTML = inputName.value;
})

buttonColor.addEventListener("click",function(){
    //we get the color value
    //we update the title color

    target.style.color = inputColor.value;
})


/*
   #############################

            TO DO LIST

  ###############################    
*/

let buttonToDo = document.querySelector("#toDoButton");
let inputToDo = document.querySelector("#toDoInput");
let listToDo = document.querySelector("#toDo");

//2-listen to the click on the button
buttonToDo.addEventListener("click", function() {
    //3 - we get the input value
    let currentToDO = inputToDo.value;
    //4 - we create a list element
    //we  use the backticks (`) to create a litteral template
    //within a litteral template we can mix html and js 
    let newLiElement = `<li>${currentToDO}</li>`;

    //5 - we add it inside the ul element
    toDo.innerHTML += newLiElement;
    
 
})