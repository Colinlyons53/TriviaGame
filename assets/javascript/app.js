$(document).ready(function() {

    $("#startButton").on("click", gameStart.startTimer);

});

var gameState = {

    timeRemaining : 60,

    startTimer: function() {
        $("#timer").text("Time remaining: " + gameState.timeRemaining);
        setInterval(gameState.countdown, 1000);
        $("#startPage").hide();
        trivia.displayQuestions();
    },

    countdown: function(){
        gameState.timeRemaining--;
        $("#timer").text("Time remaining: " + gameState.timeRemaining);
        if(gameState.timeRemaining === 0) {
            gameState.stopTimer();
            $("#timer").hide();
            $("#endPage").show();
            $("#correctAns").show();
            $("#incorrectAns").show();
            $("#unAns").show();


        }

    },

    stopTimer: function () {
        clearInterval();
        trivia.checkAnswers();
    },

    showEndPage: function (numCorrect, numIncorrect, numUnanswered) {
        $("#endPage").show();
        $("#questionsBox").empty();
        $("#timer").empty();
        $("#timer").hide();
        $("#correctAns".text)

    },

    showEndPage: function(numcorrect, numIncorrect, numUnanswered) {
        $("#end-page").show();
        $("#questionBox").empty();
        $("#timer").empty();
        $("#timer").hide();
        $("#correctAns").text("You have saved the Seven Kingdoms, you answered " + numCorrect + "questions correct");
        $("incorrectAns").text("you made " + numIncorrect + "mistakes");
        $("#unanswered").text("Missed oppurtunities " + numUnanswered);
    }   
}

var trivia = {
    displayQuestions: functions() {
        var divContainer = $("#questionsBox");
        var answerGroup = $(".formCheck");
        divContainer.append('<h2> Answer the following questions:<h2>');

        for (var i = o; i < questionbank.length; i++) {
            divContainer.append('<div id="question>' + questionBank[i].question +'</div>');

            var ans1 = 
            
            ;

        }
    }
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
        answers: ["Dorn", "North of the Wall", "Mareen"]
        correct: "North of the Wall"
    },

    {
        question: "Whats the name of Aryas Dog?",
        answers: ["Ghost", "Drogon", "Nymeria"]
        correct: "Nymeria"

    }

    {
        question: "What is the name of Jon Snows Dog?"
        answers: ["Ghost", "Drogon", "Lady"]
        answer: "Ghost"
    
    }

    {
        question: "What is Jamie Lannisters nickname?"
        answers: ["Kingslayer", "The Imp", "Hodor"]
        answer: "Kingslayer"

    }

    {
        question: "Whats Tyrions favorite drink"
        answers: ["Wine", "Bud Light", "Water"]
        answer: "Wine"
        
    }

    {
        question: "What is the punishment for abandoning the Nights Watch?"
        answers: ["Death", "Imprisonment", "Fines"]
        answer: "Death"
    }

    {
        question: "What is Aryas fighting style?"
        answers: ["Water Dancing", "Brazillian Jiu Jitsu", "Fencing"]
        answer: "Water Dancing"

    }

    {
        question: "How many Dragons does Daenerys Targaryen have?"
        answers: ["1", "2", "3"]
        answer: "3"
    }

    {
        question: "Whats the worst season of Game of Thrones?"
        answers: ["1", "2", "8"]
        answer: "8"

    }

],



