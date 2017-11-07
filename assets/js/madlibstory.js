//Donald Trump (verb) every (day of the week) when he is feeling (adjective)

var questions  = 3;
var questionsLeft = '[' + questions + ' questions left]';
var verb = prompt("Type a plural verb " + questionsLeft);

questions -= 1;
questionsLeft = '[' + questions + ' questions left]';
var day = prompt("Type a day of the week " + questionsLeft);

questions -= 1;
questionsLeft = '[' + questions + ' questions left]';
var adjective = prompt("Type an adjective " + questionsLeft);

var message = "Donald Trump " + verb;
message += " every " + day;
message += " when he is feeling " + adjective + "."
document.write('<h2>' + message + '</h2>');
console.log("Program Finished");

