const colorName = document.querySelector("#colorName");

const colorButtons =[
    {btn : document.querySelector(".btn1"), color: "red"},
    {btn : document.querySelector(".btn2"), color: "blue"},
    {btn : document.querySelector(".btn3"), color: "green"},
    {btn : document.querySelector(".btn4"), color: "yellow"}
];



colorButtons.forEach(({btn,color}) => {
    btn.addEventListener("click", function(){
        document.body.style.backgroundColor = color;
        colorName.textContent = `current Color: ${color}`;
    });
});