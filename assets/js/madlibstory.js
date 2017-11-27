/*
	===============================================================
	Created by VERYSPRY

	Create a Mad Lib with this:
		'Donald Trump (verb) every (day of the week) when he is feeling (adjective)'

	1. Give user modal to open that contains form to get input
	2. Put input into sentence
	3. Write the sentence to the page 
	4. Give user the chance to reset the form and start over
	===============================================================
*/



 
/*
	===============================================================
	JS to make the Modal work
	===============================================================
*/
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("startBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

/*
	===============================================================
	JS to run the MAD LIB PROGRAM
	===============================================================
*/

//Hide the reset button
$('#reset').hide(); 

$(document).ready( function() {

		//Create variable to hold final message
		var message = '';

	$('#input-submit').on('click', function() {
		//Create variables to hold user input and grab user actions using jquery
		var $verb = $('#verb').val();
		var $day = $('#day').val();
		var $adjective = $('#adjective').val();

		//Uncomment to test if variables are pulling correctly
		//console.log($verb);
		//console.log($day);
		//console.log($adjective);

		//Concatenate strings along with user input to make message
		message += '<h2>Donald Trump ' + $verb + ' every ' + $day + ' when he is feeling ' + $adjective + '.</h2>';
		//Close the modal window
		modal.style.display = "none";
		console.log(message);
		//Append message to the message div
		$('#message').append(message);
		//Hide the Start button
		$('#startBtn').hide();
		//Show the reset button
		$('#reset').show();

	});


	//Reset the form when the Reset button is clicked
	$(document).on( 'click', '#reset', function() {
		
		//Redefine variables as empty strings and clear HTML form of previous user answers
        var $verb = $('#verb').val('');
		var $day = $('#day').val('');
		var $adjective = $('#adjective').val('');
		//Clears score and result divs
		$('#message').empty();
		//Clears message variable so that it's ready to hold a new message
		message = '';
		//Redisplay cleared modal
		modal.style.display = "block";
	});


});


