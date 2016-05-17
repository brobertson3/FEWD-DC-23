$(document).ready( function () {
	var foodImages = [
		'food1.jpg',
		'food2.jpg',
		'food3.jpg',
		'food4.jpg',
		'food5.jpg',
		'food6.jpg',
		'food7.jpg',
		'food8.jpg'
	];

	var currentIndex = 0;

	$('.btn').click( function () {
		var action = $(this).val();

		if (action == "Skip" && currentIndex < foodImages.length - 1) {
			//Go to the next image
			$('#image-to-vote-on').attr('src', 'images/' + foodImages[++currentIndex]);
			
		} else if (action == "Back" && currentIndex > 0) {
			//Go to the previous image
			$('#image-to-vote-on').attr('src', 'images/' + foodImages[--currentIndex]);
		}
	});


});