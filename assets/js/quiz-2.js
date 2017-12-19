//Question constructor
function Question(text, answer) {
	this.text = text;
	this.answer = answer;
	this.guess = '';
} 
//Quiz constructor 
function Quiz() {
	this.questions = [];
	this.nowShowingIndex = 0;
}
//Add an 'add' method to the quiz constructor
Quiz.prototype.add = function(question) {
	this.questions.push(question);
};

/*
	=================================
	ADD NEW QUESTION SECTION

	1) create new variable to hold question
	2) quiz.add( 'your new question variable name here' )
	=================================
*/
//Create new quiz instance and store in variables
var quiz = new Quiz();
//Create question instances and store in variables then add instances to var quiz
var question0 = new Question('What is verspry\'s favorite season?', ['fall', 'autumn']);
var question1 = new Question('Who is verspry\'s favorite person?', ['kat', ' katherine']);
var question2 = new Question('What is the name of veryspry\'s main man?', ['bromando alpha'])
var question3 = new Question('Is it wise to double-cross veryspry?', ['no'])
var question4 = new Question('At what age was veryspry introduced to cohort, Bromando Alpha?', ['seven', '7']);

quiz.add(question0);
quiz.add(question1);
quiz.add(question2);
quiz.add(question3);
quiz.add(question4);


/*
	=================================
	VARIABLE SECTION
	=================================
*/

//Hold score of correct answers
var score = 0;
//Get question element and input element
var currentQuestionText = document.getElementById('currentQuestionText');
var currentQuestionInput = document.getElementById('currentQuestionInput');
//Get buttons
var nextButton = document.getElementById('nextButton');
var backButton = document.getElementById('backButton');
var submitButton = document.getElementById('submitButton');
var retryButton = document.getElementById('retryButton');
//Get progress report element
var progress = document.getElementById('progress');
//Create variable to hold now showing index for quiz questions
var nowShowingIndex = quiz.nowShowingIndex;

var totalNumberOfQuestions = quiz.questions.length;
//Hold user input
var input = document.getElementById('currentQuestionInput').innerHTML;
var results = document.getElementById('results');
var finalMessage = '';



/*
	=================================
	FUNCTION SECTION
	=================================
*/

//Populate page with current question
function currentQuestion() {
	currentQuestionText.innerHTML = quiz.questions[nowShowingIndex].text;
	currentQuestionInput.placeholder = quiz.questions[nowShowingIndex].text;
	console.log(currentQuestionText);
	console.log(currentQuestionInput);
}
//Clear questions question and prepare for next question
function clearQuestion() {
	currentQuestionText = '';
	currentQuestionInput = '';
	console.log(currentQuestionText);
	console.log(currentQuestionInput);
}
function clearInput() {
	currentQuestionInput.value = '';
}
//Hide question div and input div
function hide() {
	currentQuestionText.classList.add('hidden');
	currentQuestionInput.classList.add('hidden');
}
function show() {
	currentQuestionText.classList.remove('hidden');
	currentQuestionInput.classList.remove('hidden');
}
//Write the current question and the total number of questions to the page
function progressReport() {
	progress.innerHTML = 'Question ' + (nowShowingIndex + 1) + ' of ' + quiz.questions.length;
	if ( (nowShowingIndex + 1) > quiz.questions.length ) {
		progress.innerHTML = 'Quiz Finished!';
	}
}

/*
	=================================
	BUTTON SHOW HIDE FUNCTIONS
	=================================
*/

function nextButtonDisplay(show) {
  if (show) {
  	nextButton.classList.remove('hidden');
  } else {
    nextButton.classList.add('hidden');
  }
}
function backButtonDisplay(show) {
  if (show) {
  	backButton.classList.remove('hidden');
  } else {
    backButton.classList.add('hidden');
  }
}
function submitButtonDisplay(show) {
  if (show) {
  	submitButton.classList.remove('hidden'); 
  } else {
    submitButton.classList.add('hidden');
  }
}
function retryButtonDisplay(show) {
  if (show) {
  	retryButton.classList.remove('hidden'); 
  } else {
    retryButton.classList.add('hidden');
  }
}


retryButtonDisplay();
backButtonDisplay();
submitButtonDisplay();
currentQuestion();
progressReport();


/*
	==================================================
	EVENT HANDLER / USER FUNCTIONALITY
	==================================================
*/


nextButton.onclick = function() {
		//Hold user input
		var input = document.getElementById('currentQuestionInput').value;
		//store input in question instance
		quiz.questions[nowShowingIndex].guess = input;
		//clear user input
		clearInput();
		nowShowingIndex += 1;
		if ((nowShowingIndex + 1) === totalNumberOfQuestions) {
			//Hide next button and input fields
			nextButtonDisplay();
			//Show submit button
			submitButtonDisplay('show');
			currentQuestion();
			progressReport();
		} else {
			console.log(nowShowingIndex);
			currentQuestion();
			backButtonDisplay('show');
			submitButtonDisplay();
			progressReport();
		}	
}

backButton.onclick = function() {
	nowShowingIndex -= 1;
	if (nowShowingIndex <= 0 ) {
		backButtonDisplay();
		currentQuestion();
		progressReport();
		nextButtonDisplay('show');
		submitButtonDisplay();
	} else {
		//Hold user input
		var input = document.getElementById('currentQuestionInput').value;
		//store input in question instance
		quiz.questions[nowShowingIndex].guess = input;
		clearInput();
		currentQuestion();
		progressReport();
		nextButtonDisplay('show');
		submitButtonDisplay();
	}
}

submitButton.onclick = function() {
	//Hold user input
	var input = document.getElementById('currentQuestionInput').value;
	//store input in question instance
	quiz.questions[nowShowingIndex].guess = input;
	submitButtonDisplay();
	hide();
	backButtonDisplay();
	nowShowingIndex = 0;
	for (i=0; i<totalNumberOfQuestions; i++) {
		var guess = quiz.questions[i].guess
		var answer = quiz.questions[i].answer
		if (guess === answer[0] || guess === answer[1] || guess === answer[2] ) {
			score += 1;
			finalMessage += 'Your guess: ' + guess + '<br>';
			finalMessage += 'Correct answers: ' + answer + '<br>';
		} else {
			finalMessage += 'Your guess: ' + guess + '<br>';
			finalMessage += 'Correct answer: ' + answer + '<br>';
		}
	}
	results.innerHTML = '<h2>' + 'correct: ' + score + '<br>' + '</h2>';
	results.innerHTML += finalMessage;	
	retryButtonDisplay('show');
}

retryButton.onclick = function() {
	nowShowingIndex = 0;
	results.innerHTML = ''; 
	finalMessage = '';
	score = 0;
	clearInput();
	retryButtonDisplay();
	show();
	currentQuestion();
	progressReport();
	nextButtonDisplay('show');
}













































