$(document).ready(function() {

    // Store initial temperatures
    var fahrenheit = 0;
    var celsius = 0;

    // Whenver my form is submitted, call a function to convert my temperature.
    $('form').submit(convertTemperature);

    function convertTemperature() {
        event.preventDefault();

        var userF = $('#fahrenheit').val();
        var userC = $('#celsius').val();

        if (userF != fahrenheit) {
            // convert F to C
            fahrenheit = userF;
            celsius = (fahrenheit - 32) / 9 * 5;
            celsius = celsius.toFixed(2);
            $('#celsius').val(celsius);
            
        } else if (userC !== celsius) {
            // convert C to F
            celsius = userC;
            fahrenheit = celsius * 9 / 5 + 32;
            fahrenheit = fahrenheit.toFixed(2);
            $('#fahrenheit').val(fahrenheit);
        }
    }

});