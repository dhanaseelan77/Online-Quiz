
let category = localStorage.getItem("category");
let quizQuestions = questions[category];

let answers = JSON.parse(localStorage.getItem("answers"));
let score = localStorage.getItem("score");

document.getElementById("score").innerHTML =
"Your Score: " + score + " / " + quizQuestions.length;

let output = "";

quizQuestions.forEach((q, index) => {

    output += "<div class='question'>";
    output += "<h3>" + (index + 1) + ". " + q.question + "</h3>";

    if (answers[index] === q.answer) {

        output += "<p class='correct'>✔ Your Answer: " + answers[index] + "</p>";

    } else {

        output += "<p class='wrong'>✘ Your Answer: " +
        (answers[index] || "Not Answered") + "</p>";

        output += "<p class='correct'>✔ Correct Answer: " +
        q.answer + "</p>";

    }

    output += "</div>";

});

document.getElementById("result").innerHTML = output;
