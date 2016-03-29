![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# FEWD 23 Lesson 6

## Brief Intro to Responsive Development

---

## Agenda

* Review
* Responsive Development
* Our last pure HTML/CSS lab (for a while)

Note:
Learning Objectives
- Style a page for different screen sizes using media queries.
- Practice web development by transforming a design comp into an HTML and CSS web page.

---

## Review

Note:
Review sizes.

---

## Responsive Development

__Responsive development__ is creating a web site that looks good on all screen sizes.

Note:
Show some real world examples.

---

## Media Queries

A __media query__ is a part of your CSS that is only applied when a certain aspect of your web browser is true.  For example:

* My browser is at least 480px wide.
* My browser is no bigger than 600px wide.
* My browser is at least 300px tall.
* My browser is really a print out.

---

## Media Queries

```
@media only screen and (max-width: 600px) {
    /* This CSS will only be used for screens 
       that are 600px wide or smaller. */

    section {
        float: none;
    }

    p {
        font-size: 1.2em;
    }
}
```

Note:
http://www.w3schools.com/cssref/css3_pr_mediaquery.asp

---

## Viewport meta tag

Controls how the page looks on mobile browsers.

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Note:
To dos
- Parse this out for them.
- Do an example.

---

## Lab coming up...

.. but first, a couple new HTML tags

* ```<del>```
* ```<ins>```

---

![GeneralAssemb.ly](../../img/icons/code_along.png)

## Code Along!

Let's see media queries in action.

Note:
Go to the new example folder

---

## Opacity

You can tell CSS how transparent or opaque you want an element to be.

```
<style>
    div {
        background: red;
        opacity: 0.5;
    }
</style>

<div>
    <p>It's the fifth of July- feelin independent</p>
</div>
```

---

## Opacity consequences

The opacity of the parent element is inherited by its children.

So... how do we get a transparent background?

---

## RGBA!

`rgba` is another way to talk about color
The "a" stands for "alpha" and defines the transparency of a color.

```
<style>
    div {
        background: rgba(255,0,0,0.5); /* This is transparent red! */
    }
</style>

<div>
    <p>It's the fifth of July- feelin independent</p>
</div>
```

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

## Lab time!

Note:
Code for this lesson is located in this lesson's [starter code folder](starter_code)
