//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function() {

	$('#stopButton').click(colorStopLight);
	$('#slowButton').click(colorSlowLight);
	$('#goButton').click(colorGoLight);

	function colorStopLight () {
		clearLights();
		$('#stopLight').css("backgroundColor", "red");
		$('#stopButton').css("color", "red");
		// $('#stopLight').text("Stop");
		$('#stopLight').css('textAlign', 'center');
		// $('#stopLight').html("<p class=\"stopText\">Stop</p>");
		$('.stopText').css("paddingTop", "60px");
		// $('.stopText').hide();s
		$('#stopLight').animate({left:'1000px'});
		

		// $('.stopText').fadeIn(1000);
		// $('#stopButton').css("textAlign", "center");
		// $('#stopButton').css("marginTop", "40px");
	}

	function colorSlowLight () {
		clearLights();
		clearButtons();
		$('#slowLight').css("backgroundColor", "yellow");
		$('#slowButton').css("color", "yellow");
		$('#slowLight').text("Slow");
	}

	function colorGoLight () {
		clearLights();
		clearButtons();
		$('#goLight').css("backgroundColor", "green");
		$('#goButton').css("color", "green");
		$('#goLight').text("GO");
	}

	function clearLights () {
		$('#stopLight, #slowLight, #goLight').css("backgroundColor", "#000");
	}

	function clearButtons () {
		$('#stopButton, #slowButton, #goButton').css("color", "#fff");
	}

});