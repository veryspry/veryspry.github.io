/* The message that the user will help to create:
	--- Donald Trump (verb) every (day of the week) when he is feeling (adjective) ---
*/

//Hide Reset buttonuntil we are ready for it later
//It is before the document.ready statement so that user can't see it
$('#reset').hide();

$(document).ready( function() {
	
//When user clicks submit button this block runs:
$('#input-submit').on('click', function() {

	//Empty string used later to hold user input and concatenate a madlib
	var message = '';
	//Holds user input for madlib
	var $verb = $('#input-verb').val();
	var $day = $('#input-day').val();
	var $adjective = $('#input-adjective').val();

	//Concatenate message with user input
	message += 'Donald Trump ' + $verb + ' every ' + $day + ' when he is feeling ' + $adjective + '.';

	//Uncomment to test to make sure message concatenates correctly
	console.log(message);

	//Hides HTML form used to collect user input
	$('#user-input').hide();
	//Appends the message to the page and adds a reset button
	$('#message').append( '<h1>Check out your Mad Gab!</h1><br>' + '<h2>' + message + '</h2>' );
	//Show Reset button
	$('#reset').show();
});

	//Reset the form when the Reset button is clicked
	$(document).on( 'click', '#reset', function() {
		//Redefine variables as empty strings and clear HTML form of previous user answers
		var $verb = $('#input-verb').val('');
		var $day = $('#input-day').val('');
		var $adjective = $('#input-adjective').val('');
	//Clears message div
	$('#message').empty();
	//Hides reset button again so that it doesn't show while the HTML form is showing
	$('#reset').hide();
	//Unhides the user input div and accompanying HTML form
	$('#user-input').show();
});

});
















