$(document).ready(function () {
	var total = 0;
	var count = 1;

	$('form').submit(addValueToTotal);

	function addValueToTotal (event) {
		event.preventDefault();
		var currentValue = parseFloat($('#newEntry').val());

		if($.isNumeric(currentValue)) {
		
			console.log("value" + currentValue);

			total += currentValue; //add to total

			// Makes it a price format
			$('#total').text("$" + total.toFixed(2));

			// reset the form
			$('form')[0].reset();

			$('#entries').append('<tr><td class="receipt_item">Item ' + count++ + '</td><td class="receipt_value">' + currentValue.toFixed(2) + '</td></tr>');
		} else {
			// reset the form
			$('form')[0].reset();
		}
	}
});