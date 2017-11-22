//Hide Reset buttonuntil we are ready for it later
//It is before the document.ready statement so that user can't see it
$('#reset').hide();

$(document).ready( function() {

//This function formats a given string to have a capital first character followed by all lowercase characters
function capitolFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
 
//when the "submit" button in the form is clicked
$('#input-submit').on('click', function() {
         //Store the form submissions entry in variables 
         var $season = capitolFirstLetter( $('#input-season').val() );
         var $person = capitolFirstLetter( $('#input-person').val() );
         var $organization = capitolFirstLetter( $('#input-organization').val() );
         var $doublecross = capitolFirstLetter( $('#input-doublecross').val() );
         var $age = capitolFirstLetter( $('#input-age').val() );
         //set up our 'correct' variable:
         var correct = 0;
         //set variable that will output the result
		 var result = "";
		 //Holds score of the quiz
		 var quizscore = '';

         //uncomment this alert to test that the variables are being pulled correctly. When we click submit it should output the variables to the alert box. The  + ' ' +  is just so there's a space between the words.
         //console.log($season + $person + $organization  +  $doublecross  + $age);
      
        // start comparing these variables with the correct answers so we can prepare the total score
        if ( $season === 'Autumn' || $season === 'Fall' ) {
			correct = correct + 1 ;
		}
		if ( $person === 'Kat' || $person === 'Kathrine' || $person === 'Katie' || $person === 'Kt' ) {
			correct = correct + 1 ;
		}
        if ( $organization === 'Bromandos' || $organization === 'The Bromandos' || $organization === 'Bromando' ) {
			correct = correct + 1 ;
		}
        if ( $doublecross === 'No' ) {
			correct = correct + 1 ;
		}
        if ( $age === '7' || $age === 'Seven' ) {
			correct = correct + 1 ;
		}

		//uncomment this function to test that the 'if' statements are working correctly.
		//console.log(correct);

		// formats results alert to have proper grammar depending on user's number of correct answers
		if (correct === 1) {
			quizscore = 'You correctly answered 1 question.';
		} else {
			quizscore = 'You correctly answered ' + correct +' questions.';
		}

		// change the 'result' variable so that it ranks user depending on number of correct answers
		if (correct === 5) {
			result = "You must know veryspry. You have been awarded a golden crown.";
		} else if (correct === 4) {
			result = "It looks like you probably know veryspry. Why don't you take this silver crown?";
		} else if (correct === 3) {
			result = "Looks like veryspry isn't more than an aquaintance. Here is a bronze crown.";
		} else if (correct <= 2) {
			result = "It looks like you don't even know veryspry. Here is a complimentary tin crown for trying.";
		}

		//Uncomment to test that 'quizscore' and 'result' are working correctly
		//console.log(quizscore);
		//.log(result);

		//Hides the HTML form that holds all of the questions
        $( "#questions-form" ).hide();
		// this function shows the two variables 'quizscore' and 'result' that was set above
		$("#quiz-score").append(
			'<h2>' + quizscore + 
		    '</h2> <br> <p> ' + result + 
		    '<br> <button id="results" name="button">Show Correct Answers</button>'
		 );
		
		// Used for more troubleshooting
		//alert (quizscore + correct);
});   

//This shows the correct answers.
$(document).on('click', '#results', function(){

	//Redefines user input variables locally so that they can be used to show final results
         var $season = capitolFirstLetter( $('#input-season').val() );
         var $person = capitolFirstLetter( $('#input-person').val() );
         var $organization = capitolFirstLetter( $('#input-organization').val() );
         var $doublecross = capitolFirstLetter( $('#input-doublecross').val() );
         var $age = capitolFirstLetter( $('#input-age').val() );
	//Hide quiz-score div
	$( "#quiz-score" ).empty();
	//Append user the users answers compared to correct answers onto the page
	$("#quiz-results").append(
		'<div id="correctanswers"> <h2>Your Answers --  Correct Answers</h2> <br> <p> Question one - your answer = ' + 
		$season + ' - correct answer = Autumn <br> Question two - your answer = ' + 
		$person + ' - correct answer = Kat <br> Question three - your answer = ' + 
		$organization + ' - correct answer = The Bromandos <br> Question four - your answer = ' + 
		$doublecross + ' - correct answer = No <br> Question five - your answer = ' + 
		$age + ' - correct answer = Seven <br> </p> </div>');
	$('#reset').show();
});

	//Reset the form when the Reset button is clicked
	$(document).on( 'click', '#reset', function() {
		//Redefine variables as empty strings and clear HTML form of previous user answers
         var $season = $('#input-season').val('');
         var $person = $('#input-person').val('');
         var $organization = $('#input-organization').val('');
         var $doublecross = $('#input-doublecross').val('');
         var $age = $('#input-age').val('');
	//Clears score and result divs
	$('#quiz-results').empty();
	//Hides reset button again so that it doesn't show while the HTML form is showing
	$('#reset').hide();
	//Unhides the user input div and accompanying HTML form
	$('#questions-form').show();
});
		
});
