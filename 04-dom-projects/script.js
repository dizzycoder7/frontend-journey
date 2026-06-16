const textInput = document.querySelector("#textInput");
const counterPara = document.querySelector("#counter");

textInput.addEventListener("input" , function() {
    const length = textInput.value.length;
    counterPara.textContent =`${length} /150 Character`;
    
    if(length > 140){
        counterPara.style.color ="red";
    }else if(length >100 ){
         counterPara.style.color = "orange";
    }else{
         counterPara.style.color = "green";
    }
});



