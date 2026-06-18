

const questions = [
    {
        question: "What does DOM stand for?",
        option:["Dcument Object Model", "Data Object Method" , "Document Oriented Markup", "None of the above"],
        correct:0
    },
    {
        question: "what is Closure?",
        option: ["It is a function which remebers variable of its parent function", "It is method which stores the function" ,"It is variable"],
        correct:0
    },
    {
        question: "Is Promise and async/await do the same work?",
        option:["yes", "no", "both","none"],
        correct: 3
    }
];



const questionBox = document.querySelector(".question-box");
const questionStatus = document.querySelector("#questionStatus");
const options =  document.querySelector(".options");
const nextBtn = document.querySelector("#nextBtn");
const score = document.querySelector("#score");
const restartbtn = document.querySelector(".restartBtn");
const questionE1 = document.querySelector("#questionE1");





  let currIdx = 0;
  let marks = 0;

//display current question
function displayQuestion(){
    const current = questions[currIdx];

    questionE1.textContent = current.question;
    questionStatus.textContent = `Question ${currIdx+1} of ${questions.length}`;

    //clear and rebuild options fresh
    options.innerHTML = "";
    current.option.forEach((optionText, index) =>{
        const li = document.createElement("li");
        li.textContent = optionText;
        li.addEventListener("click" ,() => checkAns(index));
        options.appendChild(li);
    });
}

function checkAns(selectedAns){
    const correct = questions[currIdx].correct;
    const allOptions = options.querySelectorAll("li");

    //disable all option after  the right click
    allOptions.forEach(li => li.style.pointerEvents = "none");

    if(selectedAns === correct){
        allOptions[selectedAns].style.backgroundColor ="lightgreen";
        marks++; 
    }else{
        allOptions[selectedAns].style.backgroundColor = "red";
        allOptions[correct].style.backgroundColor ="green"
    }
    score.textContent = `Score ${marks} / ${questions.length}`;
}

nextBtn.addEventListener("click" , function(){
    currIdx++;
    if(currIdx < questions.length){
       displayQuestion();
    }else{
        questionE1.textContent = `your final Score: ${marks} out of ${questions.length}`;
        options.innerHTML = "";
        nextBtn.style.display = "none";
    }
    
});

restartbtn.addEventListener("click",function(){
    currIdx = 0;
    marks = 0;
    nextBtn.style.display = "block";

    displayQuestion();
});
displayQuestion();


