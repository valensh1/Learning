//1. Build a function constructor called Question to describe a question. A question should include: a.) Question itself b.) the answers from which the player can choose the correct one c.) correct answer - use a number for this

(function () {let Question = function (question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    //Question # 4 - Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task)
    this.randomQuestion = function () {
        random();
        console.log(randomQuestion = questionList[randomNum]);
        switch (randomNum){
            case 0:
            for (i=0; i<question1.answers.length; i++){
                console.log([i]+': '+ question1.answers[i]);
            }   
            break; 
            case 1:
            for (i=0; i<question2.answers.length; i++){
                console.log([i]+': '+ question2.answers[i]);
            } 
            break;   
            case 2:
            for (i=0; i<question3.answers.length; i++){
                console.log([i]+': '+ question3.answers[i]);
            }  
            break;  
        }
        return randomNum;
    }  
};




// Question #2 - create a few questions using object function constructor
let question1 = new Question ('How many titles did Kobe Bryant win with the Lakers?',[2, 4, 5, 6], 5);
let question2 = new Question ('How many goals does Ryan Getzlaf have in his career?',[178, 274, 305, 374], 274);
let question3 = new Question ('What team won the Stanley Cup Finals last year?',['St Louis Blues', 'Washington Capitals', 'Penguins', 'Bruins'], 'St Louis Blues');

//Question #3 - store all questions inside an array
questionList = ['How many titles did Kobe Bryant win with the Lakers?','How many goals does Ryan Getzlaf have in his career?','What team won the Stanley Cup Finals last year?'];
question1.randomQuestion();
let userScore = 0;


//Question #5 - Use the prompt function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
userInput = prompt('Select the correct answer');

//Question #6 - Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this)
function answerCheck(userInput) {
    if (randomNum ===0){
        if (question1.answers[userInput] !== question1.correctAnswer){
            console.log('Your answer is incorrect - Try Again!');
        }
        else {
            score();
        }
    };
    if (randomNum ===1){
        if (question2.answers[userInput] !== question2.correctAnswer){
            console.log('Your answer is incorrect - Try Again!');
        }
        else {
            score();
        }
    };
    if (randomNum ===2){
        if (question3.answers[userInput] !== question3.correctAnswer){
            console.log('Your answer is incorrect - Try Again!');
        }
        else {
            score();
        }
    }
};
answerCheck(userInput);


function random () {
    return randomNum = Math.floor(Math.random()*questionList.length+1)-1;
}

//Expert Level portion
//Question #8 - After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
function next () {
    playAgain = (prompt('Type exit if you choose to stop playing')).toLowerCase();
    if (playAgain === 'exit') {
        return;
    }
    else {
        question1.randomQuestion();
        userInput
        answerCheck();
    }
    
};
next();



function score (){
    console.log ('You are CORRECT!');
    return userScore++;
    console.log(`Your score is ${userScore}`)
}
 
//Question #7  - create an IIFE (immediately invoked function expression) - This puts the whole code in a bracket and then immediately calls function. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code.
}) ();


