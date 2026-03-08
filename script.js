const introSection=document.getElementById('intro-section')
const startQuizBtn=document.getElementById('start-quiz-btn')
const quizSection=document.getElementById('quiz-section')
const messageSection=document.getElementById('message-section')
const nextBtn=document.getElementById('next-btn')
const restartBtn=document.getElementById('restart-btn')
const quizContainer=document.getElementById('quiz-container')
const finalMessageP=document.getElementById('final-message')
const progressBar=document.getElementById('progress-bar')
const finalSlide=document.getElementById('final-slide')
const finalNextBtn=document.getElementById('final-next-btn')

const rosesPage=document.getElementById("rosesPage")
const roseGrid=document.getElementById("roseGrid")
const continueBtn=document.getElementById("continueBtn")

let currentQuestionIndex=0
let score=0
let openedRoses=0

function hideAllPages(){
introSection.classList.add("hidden")
quizSection.classList.add("hidden")
finalSlide.classList.add("hidden")
rosesPage.classList.add("hidden")
messageSection.classList.add("hidden")
}

const quizQuestions=[

{
question:"Sumant, are you ready for this rollercoaster life forever with me? 🎢",
options:["Yes","yes sounds wayyy better"],
answer:"yes sounds wayyy better"
},

{
question:"Who is the official chouth chelhi Diva here?",
options:["Sumant","Nysa"],
answer:"Sumant"
},

{
question:"Who makes you feel special like no one else?",
options:["Naansa","Family","Sunaina"],
answer:"Naansa"
}

]

function updateProgress(){
const percent=(currentQuestionIndex/quizQuestions.length)*100
progressBar.style.width=`${percent}%`
}

function showQuestion(index){

updateProgress()
nextBtn.disabled=true
quizContainer.innerHTML=""

const q=quizQuestions[index]

const questionElem=document.createElement("h3")
questionElem.textContent=q.question
quizContainer.appendChild(questionElem)

q.options.forEach(opt=>{

const optionDiv=document.createElement("div")
optionDiv.classList.add("option")
optionDiv.textContent=opt

optionDiv.onclick=()=>{

  selectOption(optionDiv,q.answer)
}
quizContainer.appendChild(optionDiv)

})

}

function selectOption(selected,correctAnswer){

const options=quizContainer.querySelectorAll(".option")

options.forEach(opt=>{

opt.onclick=null

if(opt.textContent.trim().toLowerCase() === correctAnswer.trim().toLowerCase()){
opt.classList.add("correct")
}else{
opt.classList.add("wrong")
}

})

if(selected.textContent.trim().toLowerCase() === correctAnswer.trim().toLowerCase()){
score++
}

nextBtn.disabled=false

}

nextBtn.onclick=()=>{


currentQuestionIndex++

if(currentQuestionIndex<quizQuestions.length){
showQuestion(currentQuestionIndex)
}
else{
endQuiz()
}

}

startQuizBtn.onclick=()=>{


hideAllPages()
quizSection.classList.remove("hidden")

currentQuestionIndex=0
score=0

showQuestion(currentQuestionIndex)

}

function endQuiz(){

hideAllPages()
finalSlide.classList.remove("hidden")
}



finalNextBtn.onclick=()=>{


hideAllPages()
rosesPage.classList.remove("hidden")

loadRoses()

}

const roseMessages=[

"🌹 You are the best surprise life gave me.",
"🌹 I still laugh remembering our stupid fights.",
"🌹 please let's meet soon.",
"🌹 I feel safest when i'm with you.",
"🌹 Thanks for always choosing me.",
"🌹 Even long distance couldn't mess us up.",
"🌹 I bully you but you're my favourite hooman.",
"🌹 aap toh meri Bihari baddie ho yawrr Sunaina.",
"🌹 Weak maths but strong heart LITERALLY YOU.",
"🌹 imisshiyo24/7.",
"🌹 You're my comfort place muahhhhh.",
"🌹 I never get bored with you.",
"🌹 You're my favourite notification.",
"🌹 Life with you feels like adventure.",
"🌹 Thanks for forgiving me always.",
"🌹 I hope we make thousands more memories.",
"🌹 my most precious person.",
"🌹 And yes… I'm grateful you're in my life."

]

function loadRoses(){

roseGrid.innerHTML=""
openedRoses=0
continueBtn.style.display="none"

roseMessages.forEach(msg=>{

const rose=document.createElement("div")
rose.innerHTML="🌹"
rose.classList.add("rose")

rose.onclick=()=>{

showPopup(msg)

if(!rose.classList.contains("opened")){
rose.classList.add("opened")
openedRoses++
}

if(openedRoses===18){
continueBtn.style.display="block"
}

}

roseGrid.appendChild(rose)

})

}

function showPopup(message){

const popup=document.createElement("div")
popup.classList.add("popup")

popup.innerHTML=`
<p>${message}</p>
<button onclick="this.parentElement.remove()">Close</button>
`

document.body.appendChild(popup)

}

continueBtn.onclick=()=>{

hideAllPages()

finalMessageP.textContent="Happy 18th month anniversary Sumant 💜"

messageSection.classList.remove("hidden")

}

restartBtn.onclick=()=>{

hideAllPages()
introSection.classList.remove("hidden")
progressBar.style.width="0%"

}
document.querySelectorAll("button").forEach(btn=>{
btn.addEventListener("click",playClick)
})

