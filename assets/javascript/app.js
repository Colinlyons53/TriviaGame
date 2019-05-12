$(document).ready(function() {

    $("#startButton").on("click", gameStart.startTimer);

});

var gameState = {

    timeRemaining : 60,

    startTimer: function() {
        $("#timer").text("Time remaining: " + gameState.timeRemaining);
        setInterval(gameState.countdown, 1000);
        $("#startPage").hide();
        trivia.displayQuestions():
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

    showEndPage: function () {
        $
    },

    showEndPage: function(numcorrect, numIncorrect, numUnanswered) {
        $("#end-page").show();
        $("#questionBox").empty():
        $("#timer").empty();
        $("#timer").hide();
        $("#correctAns").text("You have saCD !ved the Seven Kingdoms, you answered " + numCorrect + "questions correct");
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
            divContainer.append('<div id="question>' + questionBank[i}])
        }
    }
}


}