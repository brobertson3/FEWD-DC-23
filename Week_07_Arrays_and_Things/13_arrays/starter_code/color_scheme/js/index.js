// $('#grayButton').click(switchGray);
// $('#whiteButton').click(switchWhite);
// $('#blueButton').click(switchBlue);
// $('#yellowButton').click(switchYellow);

$('li').click(switchColorScheme);

function switchColorScheme() {
	
	var colorScheme; // = $(this).attr('data-color');

	console.log($(this).attr('data-color'));

	console.log($(this).val());
	console.log($('#grayButton'));

	if($(this).val() == $('#grayButton').val()) {
		colorScheme = 'gray';
	} else if($(this).val() == $('#whiteButton').val()) {
		colorScheme = 'white';
	} else if($(this).val() == $('#blueButton').val()) {
		colorScheme = 'blue';
	} else {
		colorScheme = 'yellow';
	}

	$('body').attr('class', colorScheme)
}

// function switchGray() {
//   $('body').attr('class', 'gray');
// }

// function switchWhite() {
//   $('body').attr('class', 'white');
// }

// function switchBlue() {
//   $('body').attr('class', 'blue');
// }

// function switchYellow() {
//   $('body').attr('class', 'yellow');
// }