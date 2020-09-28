class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }

        this.questionIndex++;
    }
    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}
 
 
 
 
 
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}
 
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
var questions = [
    new Question("What is the capital of England?", ["Bristol", "Birmingham","Paris", "London"], "London"),
    new Question("What is the capital of France?", ["Marseille", "Rome", "Paris", "Sisily"], "Paris"),
    new Question("Who is the Prime Minister of the UK?", ["Boris Johnson", "Theresa May", "David Cameron", "Queen Elizabeth"], "Boris Johnson"),
    new Question("Which month has 28 days?", ["March", "April","February", "September"], "February"),
    new Question("What does CSS stand for?", ["Center Style Sheet", "Cascading Style Sheet","Cascading Sheet Syle", "Cascading Style Summer"], "Cascading Style Sheet"),

];
 
var quiz = new Quiz(questions);
 
populate();
