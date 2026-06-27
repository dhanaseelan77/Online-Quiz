
let category = localStorage.getItem("category");
let quizQuestions = questions[category];

document.getElementById("categoryTitle").innerHTML = category.toUpperCase() + " Quiz";

let questionHTML = "";

quizQuestions.forEach((q, index) => {

    questionHTML += `
        <div class="question">
            <h3>${index + 1}. ${q.question}</h3>
    `;

    q.options.forEach(option => {

        questionHTML += `
            <label class="option">
                <input type="radio" name="q${index}" value="${option}">
                ${option}
            </label>
        `;

    });

    questionHTML += "</div>";

});

document.getElementById("questions").innerHTML = questionHTML;

let time = 60;

let timer = setInterval(function(){

    document.getElementById("timer").innerHTML = "Time Left: " + time + "s";

    time--;

    if(time < 0){

        clearInterval(timer);

        submitQuiz();

    }

},1000);

function submitQuiz(){

    clearInterval(timer);

    let score = 0;
    let answers = [];

    quizQuestions.forEach((q,index)=>{

        let selected = document.querySelector('input[name="q'+index+'"]:checked');

        let userAnswer = selected ? selected.value : "";

        if(userAnswer === q.answer){
            score++;
        }

        answers.push(userAnswer);

    });

    localStorage.setItem("score",score);
    localStorage.setItem("answers",JSON.stringify(answers));

    window.location.href="result.html";

}
