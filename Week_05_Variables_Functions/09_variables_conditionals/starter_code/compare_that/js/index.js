$(document).ready(function () {
	$('#submit').click(compareNumbers);


	function compareNumbers () {
		//.val() gets the value in the input field
		var a = parseFloat($('#a').val());
		var b = parseFloat($('#b').val());
		console.log(a);
		console.log(b);

		if($.isNumeric(a)) {
			console.log("A is a number");
			console.log(a.toString());
		}
		if($.isNumeric(b)) {
			console.log("B is a number");
			console.log(b.toString());
		}

		$('#comparison').html("");
		//If the p tag after the button is visible, then remove it
		if($('.addedText').length != 0) {
			$('.addedText').remove();
		}

		if (!$.isNumeric(a) || !$.isNumeric(b)) {
			$('#submit').after("<p class=\"addedText\">enter in two numbers por favor</p>");
		} else if (a < b) {
			$('#comparison').html("&lt;");
		} else if (a > b){
			$('#comparison').html("&gt;");
		} else if (a === b) { //They're equal
			$('#comparison').html("=");
		} 
	}

});