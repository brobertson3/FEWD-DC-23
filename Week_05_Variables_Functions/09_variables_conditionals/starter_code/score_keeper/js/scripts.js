$(document).ready( function() {
	var number = 0;

	$(document).click(calculate);

	// $('#add5').click(addFive);

	function addFive () {
		number += 5;
		$('#result').html(number);
	}

	function calculate () {
		//calculate for each button
		var clickedButton = $(event.target);
		if (clickedButton.is($('#zero'))) {
			number = 0;
			$('#result').html(number);
		} else if (clickedButton.is($('#add5'))) {
			number += 5;
			$('#result').html(number);
		}
		else if (clickedButton.is($('#add10'))) {
			number += 10;
			$('#result').html(number);
		} else if (clickedButton.is($('#sub1'))) {
			number -= 1;
			$('#result').html(number);
		}
	}
});