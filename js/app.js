$(document).ready(function(){

var text;
var spaces = " \n";

function generator(e){
	//tests if enter key has been pressed
	if (e.type == 'keydown' && e.keyCode !== 13) {
		return;
	}
	
	var number = $('#user-input').val();
	//convert string into number
	var x = +(number);

	e.preventDefault();

	//**not working** uses test for decimal value when string is input instead NaN test
	if(typeof x == NaN){
		alert("You must input a number");
	}
	//tests if the input is a decimal value
	else if(typeof x == 'number' && x % 1 !== 0){
		alert("you must input an integer");
	}

	//check to see if the number is divisible by 15, 5, or 3
	for ( var i = 1; i <= x; i++ ) {
		if ( i % 15 == 0 ){
			text = "fizzbuzz";
		}
		else if ( i % 3 == 0 ){
			text = "fizz";
		}
		else if ( i % 5 == 0 ){
			text = "buzz";
		}
		else {
			text = i;
		}

		text = text + spaces;
		$('.count').append(text);

		clearInput();
	}
	//empty input field after enter
	function clearInput() {
		$('#user-input').val('');
	}
}
//*******Event Handlers******/
 	$('#user-input').keydown(generator);
});