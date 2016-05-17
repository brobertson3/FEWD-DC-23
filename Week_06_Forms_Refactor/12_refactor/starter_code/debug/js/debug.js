// error thrown example
$("body").append("<h1>Hi world!</h1>");

// console.log example, log each of the pies and the index before the switch 

$("#cherry").click(function() {
	$("main").append("<p>Cherry: Meh</p>");
});

$("#rhubarb").click(function() {
	$("main").append("<p>Rhubarb: Yuck!</p>");
});

$("#banana").click(function() {
	$("main").append("<p>Banana: Woohoo!</p>");
});

$("#pumpkin").click(function() {
	$("main").append("<p>Pumpkin: Yum!</p>");
});

// breakpoint example, put inside the function

function doSomething(){
	var myThing = $('#pumpkin');
	$("body").append("<p>Paragraph</p>");
	console.log(myThing);
}

doSomething();