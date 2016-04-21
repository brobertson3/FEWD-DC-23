$(document).ready(function() {

	var totalValue = 0;
	$('#entry').submit(enterPrice);

	function enterPrice () {
		event.preventDefault();
		//get value from form entry
		var newValue = $('#newEntry').val();

		$('#entries').html('<td>' + newValue + '</td>');

		newValue = parseInt(newValue);
		totalValue += newValue;
		console.log(totalValue);

		$('#total').html(total);
	}

});