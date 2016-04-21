$(document).ready(function() {
<<<<<<< HEAD

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
=======
    // This is the total of my register when I load page.
    var total = 0;

    $('#entry').submit(useRegister);

    function useRegister(event) {
        event.preventDefault();

        // Get what the users entered.
        var newEntry = $('#newEntry').val();
        $('#entries').html('<td>' + newEntry + '</td>');

        newEntry = parseInt(newEntry);
        total = total + newEntry;
        console.log(total);

        $('#total').html(total);
    }
>>>>>>> ga-students/master

});