![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# FEWD 23 Lesson 5

## Talking More About Layout

---

## Agenda

* Review
* Lab time!
* Talk about sizes

Note:
Learning Objectives
- Apply floats and clearing techniques to effectively create a two column layout.
- Apply rem and em sizes to a layout

---

## Review

Let's talk about last week's homework.. questions?

Note:
Do a GitHub review; update the GitHub class repo!

---

## What was up with that starter CSS?

---

## Box Model Hack

* Fixes the box model to be less annoying.
* Width = element width + padding + border

```
* {
     box-sizing: border-box;
}
```

Note:
Talk about vendor prefixes here too.  Vendor prefixes are in old code (like last week's homework), but are largely not needed anymore.  See http://caniuse.com.

---

## :after Pseudo-selector

* Pseudo-selectors are selectors you can use with a tag, class, or ID to select a different aspect of an element.
* For example, `:after` adds an imaginary "element" after the selected element.

```
.myClass:after {
    content: 'hello world';
    color: blue;
}
```

Note:
To Dos:
- Example code to play around with :after, :before, :hover.
- Go into the starter CSS and take a look at what was there.

---

## Review: Float and Clear

Note:
Draw a layout on the board and walk through how to code it.

---

## Last (but not least!)... comments

* You can write notes to yourself in your HTML and CSS code that the browser will not care about.
* These notes are just for you.

---

## HTML Comments

```
<!-- 
    This is an HTML comment.
    I can write as much as I want inside of this comment tag.
-->
```

---

## CSS Comments

```
/*
    This is a CSS comment.
    I can write as much as I want inside here too!
*/
```

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

## Layout Lab

Note:
To Dos
- Code for this lesson is located in the Week 3 [Assignment directory](../Assignment)
- Half-way through, demo Chrome's dev tools

---

## Sizes

There are many ways to define sizes in CSS.

---

## PX

Pixels are the dots that make up your computer screen.  Your screen is a grid of pixels.  1 dot = 1 pixel.

* font-size: 24px;
* width: 300px;

---

## Percentage

You can define sizes based on a percentage of their __outer__ container.

* width: 50%;
* margin: 2%;

Note:
Draw an example for this one.  Also, remind them about the box model.

---

## REM

REMs are based on the page's base font size.  Default is 16px.

```
<style>
    p {
        font-size: 1.5rem;
        width: 2rem;
    }
</style>

<p>How much wood can a woodchuck chuck?</p>
```

---

## EM

EMs are based on the parent element's font size.

```
<style>
    div { 
        font-size: 20px; 
    }

    p {
        font-size: 1.5em;
        width: 2em;
    }
</style>

<div>
    <p>How much wood can a woodchuck chuck?</p>
</div>
```

Note:
Demonstrate difference between zoom and increase text size using Chrome settings.
