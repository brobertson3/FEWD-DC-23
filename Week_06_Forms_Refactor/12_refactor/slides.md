![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# FEWD 23 Lesson 12

## Forms Part 2 and Debugging

---

## Agenda

* Forms, part 2
* Form Validation
* Debugging Techniques

---

## Forms review

All forms go inside a form tag

```
<form>
    <!-- Your input fields go here -->
</form>
```

---

## Forms review

You can use the ```<input>``` tag to have users enter all sorts of information:

* Text
* Number
* Email
* Password
* Checkboxes & Radio buttons

---

## Labels

Use the ```<label>``` tag to add a label to your input fields.

```
<label for="firstName">First Name</label>
<input type="text" name="firstName">
```

Or

```
<label for="animals">
    Pick an animal:
    <input type="radio" name="animals" value="cats"> Cats
    <input type="radio" name="animals" value="dogs"> Dogs
</label>
```

---

## Select and Option

![](../../img/unit_2/select.png)

---

## Select and Option

![](../../img/unit_2/select_type.png)

---

## Submit

Value is button text.

 ```
 <input type=“submit” value=“Submit”>
 ```

---

## Form validation 

We can use Javascript to validate data in form fields.

---

## Form validation: Why?

* Sanity check user input.
* Make sure bad data is not being sent to our backend.
* Gives feedback to user right away about errors.

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
## Application Form

Note:
Have students do part of the validation on their own.

---

### Anonymous Functions

```
$('#myButton').click(function() {
   // Stuff goes here. 
});
```

---

### Anonymous Functions

```
$('#myButton').click(function(event) {
   event.preventDefault();

   $('#myText').show();
   // Any other commands go here!
});
```

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
## Anonymous Application Form

---

## Debugging

Why isn't this working?

---

## Debugging

Always start be defining the problem. 

* “The image is not moving”
* “None of my code works”

---

## Debugging

This will tell you where to start your hunt

* Image not moving
	* Find the code that makes the image move

* None of my code works
	* Syntax error, check console

---

## Debugging: Level 1

* Check for errors (red text, aligned right) in console

* To access debugging console	
	* PC: CTRL+SHIFT+J
	* Mac: COMMAND+OPTION+J

* Click the error

---

## Debugging: Level 2
	
So no red errors but not getting the right answer?  Try console.log!

```
function addStuff(num1, num2) {
	var sum = num1 + num2;
	console.log(sum);
	return sum;
}

addStuff(42, 76);
```

---

## Debugging: Level 3

* Use the debugger in Chrome
* Set a breakpoint
* Run the code
* Step through the code until you get to the error
* Variable values display on the right
* You can switch to the console to run code or check value of variable

---

## Debugging: Level 4

Get help!

1. Try “Your preferred search engine” search
2. Be ready to clearly articulate the problem. (Write out what your problem is.)
3. If nothing, ask instructor

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
## Debug

---

## Refactor

Make code more efficient without changing functionality.

---

## Refactor

* To reduce or eliminate redundancy
* Make code easier to read
* Make code more maintainable

---

## CSS Refactor

* Remove inline styling
* Replace repeated styles with classes
* Rename classes/ids for readability
* Organize CSS
* Group by section
* Create classes for large CSS changes in JS
* Remove unnecessary css

---

## JS Refactor

* Use functions
* Use variables
* Combine jQuery selectors
* Chain jQuery function calls

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
## Refactor 
