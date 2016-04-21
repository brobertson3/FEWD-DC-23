<<<<<<< HEAD
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
=======
$(document).ready(function() {

    var a;
    var b;

    // Defining my function
    function whatIsMyName(name) {
        console.log(name);
    }


    // Using my function
    whatIsMyName('Jane');
    console.log(name);



    $('#submit').click(compareNumbers);

    function compareNumbers() {
        a = $('#a').val();
        a = parseInt(a);
        b = $('#b').val();
        b = parseInt(b);
        console.log(a);
        console.log(b);

        if (a>b) {
            $('#comparison').html('>');
            $('body').removeClass();
            $('body').addClass('pinkBackground');
        } else if (a<b) {
            $('#comparison').html('<');
            $('body').removeClass();
            $('body').addClass('greenBackground');
        } else if (a == b) {
            $('#comparison').html('=');
        }
    }
>>>>>>> ga-students/master

});