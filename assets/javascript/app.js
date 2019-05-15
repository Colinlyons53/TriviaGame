$(document).ready(function() {

    $("#startButton").on("click", gameState.startTimer);

});

var gameState = {

    timeRemaining : 60,

    startTimer: function() {
        $("#timer").text("Time remaining: " + gameState.timeRemaining);
        setInterval(gameState.countdown, 1000);
        $("#startPage").hide();
        trivia.displayQuestions();
    },

    countdown: function() {
        gameState.timeRemaining--;
        $("#timer").text("Time remaining: " + gameState.timeRemaining);
        if(gameState.timeRemaining === 0) {
            gameState.stopTimer();
            $("#timer").empty();
        }
    },

    stopTimer: function () {
        clearInterval();
        trivia.checkAnswers();
    },


    showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
        $("#endPage").show();
        $("#questionBox").empty();
        $("#timer").empty();
        $("#timer").hide();
        $("#correctAns").text("You have saved the Seven Kingdoms, you answered " + numCorrect + "questions correct");
        $("#incorrectAns").text("you made " + numIncorrect + "mistakes");
        $("#unAns").text("Missed oppurtunities " + numUnanswered);
    }   
}


var trivia = {


    displayQuestions: function() {
        
        console.log("test")
        var divContainer = $("#questionBox");
        var answerGroup = $(".form-Check");
        divContainer.append('<h2> Answer the following questions:<h2>');

        for (var i = 0; i < questionBank.length; i++) {

            divContainer.append('<div id="question">' + questionBank[i].question +'</div>');

            var answer1 = questionBank[i].answers[0];
            var answer2 = questionBank[i].answers[1];
            var answer3 = questionBank[i].answers[2];

            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
        }

        var doneButton = '<button class="btn btn-primary" id="doneButton" type="submit">Done</button>';
        divContainer.append(doneButton);
        $("#doneButton").on("click", gameState.stopTimer);
    },



        checkAnswers: function () {
            var correctAns;
            var userAns;
            var numCorrect = 0;
            var numIncorrect = 0;
            var numUnanswered = 0;

           
            for (var i = 0; i < questionBank.length; i++) {
            correctAns = questionBank[i].correct;
            userAns = $('input[id=radio'+i+']:checked + label').text();
            console.log(userAns)

            if (userAns === correctAns) {
                numCorrect++;
            } else if (userAns === "") {
                numUnanswered++;
            } else if (userAns !== correctAns) {
                {
                numIncorrect++;
                }
            }
            }

            // show the end page with the score tally
            gameState.showEndPage(numCorrect, numIncorrect, numUnanswered);
        },
    }




var questionBank = 
[
    {
        question: "Who is the 3 Eyed Raven?",
        answers: ["Reek", "Some Bird", "Brandon Stark"],
        correct: "Brandon Stark"
    },

    {
        question: "Where are the Wildlings from?",
        answers: ["Dorn", "North of the Wall", "Mareen"],
        correct: "North of the Wall"
    },

    {
        question: "Whats the name of Aryas Dog?",
        answers: ["Ghost", "Drogon", "Nymeria"],
        correct: "Nymeria"

    },

    {
        question: "What is the name of Jon Snows Dog?",
        answers: ["Ghost", "Drogon", "Lady"],
        answer: "Ghost"
    
    },

    {
        question: "What is Jamie Lannisters nickname?",
        answers: ["Kingslayer", "The Imp", "Hodor"],
        answer: "Kingslayer"

    },

    {
        question: "Whats Tyrions favorite drink",
        answers: ["Wine", "Bud Light", "Water"],
        answer: "Wine"
        
    },

    {
        question: "What is the punishment for abandoning the Nights Watch?",
        answers: ["Death", "Imprisonment", "Fines"],
        answer: "Death"
    },

    {
        question: "What is Aryas fighting style?",
        answers: ["Water Dancing", "Brazillian Jiu Jitsu", "Fencing"],
        answer: "Water Dancing"

    },

    {
        question: "How many Dragons does Daenerys Targaryen have?",
        answers: ["1", "2", "3"],
        answer: "3"
    },

    {
        question: "Whats the worst season of Game of Thrones?",
        answers: ["1", "2", "8"],
        answer: "8"

    },

]



