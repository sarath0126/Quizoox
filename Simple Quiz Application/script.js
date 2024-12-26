const questions = [
    {
        question: "Who is considered the father of Artificial Intelligence?",
        answers: [
            { text: "Alan Turing", correct: false },
            { text: "John McCarthy", correct: true },
            { text: "Andrew Ng", correct: false },
            { text: "Geoffrey Hinton", correct: false },
        ]
    },
    {
        question: "What is the primary purpose of a neural network?",
        answers: [
            { text: "Data Encryption", correct: false },
            { text: "Pattern Recognition", correct: true },
            { text: "Operating Systems", correct: false },
            { text: "Database Management", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT a type of Machine Learning?",
        answers: [
            { text: "Supervised Learning", correct: false },
            { text: "Reinforcement Learning", correct: false },
            { text: "Unsupervised Learning", correct: false },
            { text: "Automated Learning", correct: true },
        ]
    },
    {
        question: "Which algorithm is widely used for image recognition tasks?",
        answers: [
            { text: "Convolutional Neural Networks (CNN)", correct: true },
            { text: "Decision Trees", correct: false },
            { text: "Support Vector Machines (SVM)", correct: false },
            { text: "K-Means Clustering", correct: false },
        ]
    },
    {
        question: "What is a Turing Test designed to assess?",
        answers: [
            { text: "The efficiency of an AI model", correct: false },
            { text: "The human-likeness of an AI's behavior", correct: true },
            { text: "The speed of an algorithm", correct: false },
            { text: "The storage requirements of AI", correct: false },
        ]
    },
    {
        question: "Which of the following is an example of a generative AI model?",
        answers: [
            { text: "ChatGPT", correct: true },
            { text: "Linear Regression", correct: false },
            { text: "Random Forest", correct: false },
            { text: "Gradient Boosting", correct: false },
        ]
    },
    {
        question: "What does NLP stand for in AI?",
        answers: [
            { text: "Natural Logic Processing", correct: false },
            { text: "Natural Language Processing", correct: true },
            { text: "Network Latency Protocol", correct: false },
            { text: "Neural Link Prediction", correct: false },
        ]
    },
    {
        question: "Which AI concept involves the exploration of vast data to discover patterns?",
        answers: [
            { text: "Clustering", correct: false },
            { text: "Data Mining", correct: true },
            { text: "Dimensionality Reduction", correct: false },
            { text: "Feature Engineering", correct: false },
        ]
    },
    {
        question: "What is backpropagation primarily used for in neural networks?",
        answers: [
            { text: "Adjusting weights", correct: true },
            { text: "Adding layers", correct: false },
            { text: "Improving model architecture", correct: false },
            { text: "Optimizing activation functions", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT a type of activation function in neural networks?",
        answers: [
            { text: "ReLU", correct: false },
            { text: "Sigmoid", correct: false },
            { text: "Tanh", correct: false },
            { text: "Lasso", correct: true },
        ]
    },
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML = "Next"
    showQuestion();

}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo +". "+currentQuestion.question;


    currentQuestion.answers.forEach((answer)=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn')
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach((button)=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    });
    nextButton.style.display = "block";



}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();

    }
    else{
        showScore();
    }
}




nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();


