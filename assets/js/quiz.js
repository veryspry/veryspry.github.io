/*
This program is a quiz that asks several questions about veryspry.
User input is stored into variables and at the end, the user is ranked depending on their number of correct
answers.
*/

/*
1. Build loop to iterate through array of questions and store user input
2. Stored user input should increase var counter if correct
3. Create a report that tells user how many questions they got right and which were right and which were wrong
4. Add code that formats report's grammar based on quesitons answered correctly
5. Debug function that capitalizes first letter of string
*/



var correct = 0;  
var userAnswer;
var correctUserAnswers = '';
var incorrectUserAnswers = ''
var results ='';
var correctAnswers = [];
var incorrectAnswers = [];
var questions = [
   {
	   question: 'What is verspry\'s favorite season?',
	   answer1: 'Fall',
	   answer2: 'Autumn'
	},
	{
		question: 'Who is verspry\'s favorite person?',
		answer1: 'Kat',
		answer2: 'Katherine',
		answer3: 'Katie'
	},
	{
		question: 'What is the name of veryspry\'s organization with Bromando Alpha?',
		answer1: 'Bromandos',
		answer2: 'The Bromandos'
	},
	{
		question: 'Please answer \'yes\' or \'no\' to the following. Is it wise to double-cross veryspry?',
		answer1: 'No'

	},
	{
		question: 'At what age was veryspry introduced to cohort, Bromando Alpha?',
		answer1: '7',
		answer2: 'Seven'
	}

]; 

//This is the print function used to print results to the page.
function print(x) {
  var div = document.getElementById('output');
  div.innerHTML = x;
}

//This function formats a given string to have a capital first character followed by all lowercase characters
function capitolFirstLetter(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
//Uppercase first letter test - uncomment this to test capitalFirstLetter function
//console.log(capitolFirstLetter('good times.'));

// alert to preface and instruct users
alert('How well do you know veryspry? Answer the following questions to find out!')

// Iterates through quesion array, prompting a user response and then storing results in a separate arrays depending 
// if the user input was correct or incorrect
for ( i = 0; i < questions.length; i += 1 ) {
	userAnswer = prompt(questions[i].question);
	userAnswer = capitolFirstLetter( userAnswer );	
	if ( userAnswer === questions[i].answer1 || userAnswer === questions[i].answer2 || userAnswer === questions[i].answer3 ) {
		correct += 1;
		correctAnswers.push( {question: questions[i].question, answer: userAnswer} );
	} else {
		incorrectAnswers.push( {question: questions[i].question, answer: userAnswer} );
	}
};

console.log( correct );
console.log( correctAnswers );
console.log( incorrectAnswers );


for ( i = 0; i < correctAnswers.length; i += 1 ) {	
	correctUserAnswers += '<h3>Question : </h3>' + '<p>' + correctAnswers[i].question + ' </h3>';
	correctUserAnswers += '<h3>Your Answer : </h3>' + '<p>' + correctAnswers[i].answer + ' </h3>';
 }

for ( i = 0; i < incorrectAnswers.length; i += 1 ) {
	
	incorrectUserAnswers += '<h3>Question : </h3>' + '<p>' + incorrectAnswers[i].question + ' </p>';
	incorrectUserAnswers += '<h3>Your Answer : </h3>' + '<p>' + incorrectAnswers[i].answer + ' </p>';
 }

console.log(correctUserAnswers);
console.log(incorrectUserAnswers);

// Builds up string of correct and incorrect questions along with user response and stores it in var response
if ( correctUserAnswers != '' ) {
	results += '<h2> Congratulations! Here is what you got right : </h2>' + correctUserAnswers ;
}
if ( incorrectUserAnswers != '' ) {
	results += '<h2> WRONG UN\'S : </h2>' + incorrectUserAnswers;
}

// Prints the results to the browser
print(results);





/*


// Question #1
var question1 = prompt ("What is verspry's favorite season?");
console.log(question1);

console.log(correct);


if ( question1 === 'Autumn' || question1 === 'Fall' ) {
	correct = correct + 1 ;
} else {
	correct = correct;
}



// Question #2
var question2 = prompt ("Who is verspry's favorite person?");

upperCaseFirstLetter(question2);

console.log(question2);

if ( question2 === 'Kat' || question2 === 'Katherine' || question2 === 'Katie' || question2 === 'Kt' ) {
	correct = correct + 1 ;
} else {
	correct = correct;
}
console.log(correct);


// Question #3
var question3 = prompt ("What is the name of veryspry's organization with Bromando Alpha?");

upperCaseFirstLetter(question3);
console.log(question3);

if ( question3 === 'Bromandos' || question3 === 'The Bromandos' || question3 === 'Bromando' ) {
	correct = correct + 1 ;
} else {
	correct = correct;
}
console.log(correct);


// Question #4
var question4 = prompt ("Please answer 'yes' or 'no' to the following. Is it wise to double-cross veryspry?");

upperCaseFirstLetter(question4);
console.log(question4);

if ( question4 === 'No' ) {
	correct = correct + 1 ;
} else {
	correct = correct;
}
console.log(correct);


// Question #5
var question5 = prompt ("At what age was veryspry introduced to cohort, Bromando Alpha?");

upperCaseFirstLetter(question5);
console.log(question5);

if ( question5 === '7' || question5 === 'Seven' ) {
	correct = correct + 1 ;
} else {
	correct = correct;
}
console.log(correct);

// formats results alert to have proper grammar depending on user's number of correct answers
if (correct === 1) {
	alert('You correctly answered ' + correct +' question.');
} else {
	alert('You correctly answered ' + correct +' questions.');
}

// alert box that ranks user depending on number of correct answers
if (correct === 5) {
	alert('You must know veryspry. You have been awarded a golden crown.');
} else if (correct === 4) {
	alert("It looks like you probably know veryspry. Why don't you take this silver crown?");
} else if (correct === 3) {
	alert ("Looks like veryspry isn't more than an aquaintance. Here is a bronze crown.");
} else if (correct <= 2) {
	alert("It looks like you don't even know veryspry. Here is a complimentary tin crown for trying.");
}

*/
































