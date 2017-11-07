//Donald Trump (verb) every (day of the week) when he is feeling (adjective)

var questions  = 3;
	'[3 questions left]'

var verb = prompt("Type a plural verb " + questionsLeft);
var day = prompt("Type a day of the week");
var adjective = prompt("Type an adjective");
var message = `Donald Trump ${verb} every ${day} when he is feeling ${adjective}.`
document.write('<h2>' + message + '</h2>');
console.log("Program Finished");
