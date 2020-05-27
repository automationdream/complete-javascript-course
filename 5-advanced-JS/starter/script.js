
/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
*/

var Question = function (question,answers,correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}
/*

a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
*/
var question1 = new Question(
    'What is my name?',
    ['Bartek', 'Janusz', 'Piotr', 'Zenek'],
    0
)


var question2 = new Question(
    'What you would like to eat tommorow?',
    ['Pho', 'Kofta', 'Sausages', 'Pizza'],
    1
)

var question3 = new Question(
    'What is your favourite song?',
    ['Sex on fire', 'Mama', 'Czerwone i bure', 'Moja Honda'],
    3
)

var question4 = new Question(
    'What is your favourite programming language?',
    ['Sex on fire', 'Mama', 'Czerwone i bure', 'Moja Honda'],
    3
)
/*
2. Create a couple of questions using the constructor

*/
// 3. Store them all inside an array

var questions = [question1, question2, question3, question4]

// 4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
shuffle(questions)

// 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

for (let i = 0; i < questions.length; i++) {
    var q = questions[i]
    console.log(q.question)
    var answers = questions[i].answers
    
    console.log('------')
    for (let a = 0; a < answers.length; a++) {
        console.log(a+1+'.'+ answers[a])
    }
    console.log('------')

    var userAnswer = prompt(q.question);


}

// 6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

evaluateAnswer(userAnswer, q)

// 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).



function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
    function evaluateAnswer(userAnswer,question) {
        if (userAnswer - 1 == question.correctAnswer){
            alert('Great')
        }
        else {
            alert('Wrong answer')
        }
    }