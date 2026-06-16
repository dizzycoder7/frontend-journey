const btn = document.querySelector(".btn");
const textInput = document.querySelector("#textInput");
const list = document.querySelector(".list");

btn.addEventListener("click" , function(){
    const text = textInput.value;
    if(!text.trim()) return;

    const li = document.createElement("li");

    li.textContent = text;

    li.addEventListener("click",function(){
        li.classList.toggle("done")
    });
    
    list.appendChild(li);   
    textInput.value= ""; 
});