const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questioncontainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
} )

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questioncontainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion() {
    resetState() 
    showQuestion( shuffledQuestions[currentQuestionIndex])                               
}
function showQuestion(question){
    questionElement.innerText = question.question  
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText =answer.text
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct =answer.correct 
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button);
    })              
} 
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{
        startButton.innerText ='Restart'
        startButton.classList.remove('hide')
    }
}
    

function setStatusClass(element, correct){
    clearStatusClass(element)               
    if(correct){
    element.classList.add('correct')
}else{
    element.classList.add('wrong')
}
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions=[    
    {
question:'which is best graphic design tool',
answers: [
   {text: 'Figma' , correct: true },
   {text:'Adobe XD', correct: false },
   {text: 'Corel draw' , correct: false },
   {text:'Adobe photoshop', correct: false },
        ]   
    },

    {
    question:'stack work on some algo',
answers: [
    {text: 'LIFO' , correct: true },
    {text:'FILO', correct: false },
    {text: 'FiFO' , correct: false },
    {text:'none of above', correct: false },
        ]   
    },

    {
        question:'HTTP full form',
        answers: [
            {text: 'hyper text markup language' , correct: false },
            {text:'uniform resorce locator', correct: false },
            {text: 'wireless fidility' , correct: false },
            {text:'hyper text transfer protocal', correct: true },
            ]   
        },

        {
            question:'which is best future scope language',
        answers: [
            {text: 'java' , correct: false},
            {text:'javascript', correct: true },
            {text: 'pyhton' , correct: false },
            {text:'C#', correct: false },
                ]   
            },

            {
                question:'which is most useful code editor',
            answers: [
                {text: 'notepad++' , correct:false },
                {text:'NOTEPAD', correct: false },
                {text: 'SUBLIME' , correct: false },
                {text:'VS CODE', correct: true},
                    ]   
                },

                {
                    question:'which is most useful database',
                answers: [
                    {text: 'oracle' , correct:false },
                    {text:'my sql', correct: false },
                    {text: 'mongo DB' , correct: true },
                    {text:'haddop', correct: false },
                        ]   
                    },
]