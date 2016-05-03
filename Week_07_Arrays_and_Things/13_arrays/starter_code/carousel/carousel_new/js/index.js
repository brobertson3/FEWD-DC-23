var foodImages = [
    'images/food1.jpg',
    'images/food2.jpg',
    'images/food3.jpg',
    'images/food4.jpg',
    'images/food5.jpg',
    'images/food6.jpg',
    'images/food7.jpg',
    'images/food8.jpg'
];

var currentIndex = 0;

// Skip button: When you click the button, display the next image in the array.

$('.btn').click(function() {
    var action = $(this).val();

    if (action == "Skip") {
        if ( currentIndex < (foodImages.length - 1) ) {
            // Go to the next image.
            currentIndex = currentIndex + 1;
        } else {
            currentIndex = 0;
        }
    }

    if (action == "Back") {
        // Make sure currentIndex is not on the first image!
        if (currentIndex > 0) {
            // Go to the previous image.
            currentIndex = currentIndex - 1;
        } else {
            currentIndex = foodImages.length - 1;
        }
    }

    $('#image-to-vote-on').attr('src', foodImages[currentIndex]);
});