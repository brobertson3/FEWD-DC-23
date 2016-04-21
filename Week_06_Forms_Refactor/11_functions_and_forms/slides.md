![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# FEWD 23 Lesson 11

## Functions & Forms

---

## Agenda

* Review
* Table Talk
* More About Functions
* Forms

---

## But first...

Please update class GitHub repo!

---

## HTML tables

* Tables are used for tabular data.
* If content would make sense in Excel, it's OK to put it in a table.

---

## HTML tables

```
<table>
    <tbody>
        <tr> 
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
        </tr>

        <tr> 
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
        </tr>
    </tbody>
</table>
```

---

## HTML tables - Header

```
<table>
    <thead>
        <tr>
            <th>Col 1 header</th>
            <th>Col 2 header</th>
        </tr>
    </thead>

    <tbody>
        <!-- Table body tags go here -->
    </tbody>
</table>
```

---

## HTML tables - Footer

```
<table>
    <thead>
        <!-- Table header tags go here -->
    </thead>

    <tbody>
        <!-- Table body tags go here -->
    </tbody>

    <tfoot>
        <tr>
            <th>Col 1 footer</th>
            <th>Col 2 footer</th>
        </tr>
    </tfoot>
</table>
```

---

## Quick Review on Functions

```
function addThings(val1, val2) {
    var sum = val1 + val2;
    return sum;
}

var newNumber = addThings(1, 2);  // newNumber = 3
```

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
## Cash Register

---

## Anonymous Functions

Functions with no name.

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
## Anonymous Cash Register

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
## Temperature Converter

---

## Forms

How we can get data from users.

![](../../img/unit_2/forms.png)

---

## Forms

* Wrapper for data collection elements 
    * Text fields
    * Drop Downs
    * Radio Buttons 
    * etc

---

## Forms

* Tells the page: 
    * Where to send the data
    * How to send it
    * What is being sent

---

## Form Tag

![](../../img/unit_2/form_tag.png)

Available Attributes

*   Method (Post, Get, Put, Delete)
*   Action
*   URL to send data to

---

## Form Tag

In Action

```
<form action="register.php" method="post">
    <!--Data collection elements go here-->
</form>
```

---

## Inputs

* Place between ```<form> </form>``` tags

---

## Input Attributes

* Type (text, submit, password, email, checkbox, radio, file, etc)
* Name (Used server side)
* Placeholder
* Value

Note:
Complete Spec: <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input>

*  Gotchas
    * The font-family for an input is not inherited!!!
    * This can lead to funny sizing issues on Macs vs. PCs where the default font is not the same

---

## Text

This is the default.

![](../../img/unit_2/text.png)

![](../../img/unit_2/forms.png)

---

## Email

![](../../img/unit_2/email_type.png)

![](../../img/unit_2/email.png)

---

## Password

Hides characters as typed

![](../../img/unit_2/password_type.png)

![](../../img/unit_2/password.png)

---

## Submit

Value is button text.

 ```
 <input type=“submit” value=“Submit”>
 ```

---

## File

Creates a file upload element 

```
<input type=“file”>
```

---

## Select and Option

![](../../img/unit_2/select.png)

---

## Select and Option

![](../../img/unit_2/select_type.png)

---

## Labels

Information about the input field should be put in a ```<label>``` tag.

```
<label>
    Name 
    <input type="text" name="yourName">
</label>
```

Or

```
<label for="yourName">Name</label>
<input type="text" name=“yourName” id=“yourName”>
```

Note:
Usability: Clicking the label text in either case places the focus in the input field (great for radio buttons)

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

## Application Form

Note:
Talk about validation with if/then statements?

