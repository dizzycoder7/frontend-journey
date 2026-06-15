// //3 ways to select elements in javascript

// //1. by id - return single element 
// const title = document.getElementById("title");
// console.log(title);

// //2. by class - return a list

// const texts = document.getElementsByClassName("text");
// console.log(texts);

// //3. query selector -morden way - use this

// const title2 = document.querySelector("#title");
// const text2 = document.querySelector(".text"); //by class
// const btn = document.querySelector("#btn");  //by id
// const h1 = document.querySelector("h1");  //by tag

// console.log(title2 , text2,btn, h1);


//part 3  changing content & style
// const title = document.querySelector("#title");
// const btn = document.querySelector("#btn");

// // change the content
// title.textContent = "DOM is amazing!"

// // change the html inside element
// title.innerHTML = " <span>DOM iS <strong>amazing!</strong></span>"

// //change css style
// title.style.color = "coral";
// title.style.fontSize = "3rem";
// title.style.backgroundColor = "lightyellow"

// //
// title.classList.add("highlight");

// title.classList.toggle("rohit");
// title.classList.remove("highlight");

// console.log(title);


//part 4 EVENTS

// const title = document.querySelector("#title");
// const btn = document.querySelector("#btn");
// const body = document.querySelector("body");

// btn.addEventListener("click",  function(){
//     title.style.color = "green";
//     title.style.fontSize = "5rem";
//     title.textContent = "You will be succesful Very Soon Because U Take risk";
//     body.style.backgroundColor = "lightyellow";
// })

// btn.addEventListener("mouseover", function(){
//     btn.style.backgroundColor = "lightblue";
//     title.textContent = "Please Don't click here ! its a warnig"
// })

// btn.addEventListener("mouseout" , function(){
//     btn.style.backgroundColor = "";
    
// })
cons
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const body = document.querySelector("body");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

btn1.addEventListener("click", function(){
    body.style.backgroundColor = "red";
    red.textContent = "Red";
    
});

btn2.addEventListener("click", function(){
    body.style.backgroundColor = "blue";
    blue.textContent = "Blue";
}) ;

btn3.addEventListener("click", function(){
    body.style.backgroundColor = "green";
    green.textContent = "Green";
});

btn4.addEventListener("click", function(){
    body.style.backgroundColor = "yellow";
    yellow.textContent = "Yellow";
});



