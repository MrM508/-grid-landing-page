# Frontend Mentor - Grid landing page solution

This is a solution to the [Grid landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/grid-landing-page).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)





## Overview

### The challenge
- Optimal layout depending on screen size
- Hover and focus states for all interactive elements
- Open and close the navigation menu at any screen size


### Links
- Solution URL: <!-- TODO -->
- Live Site URL: <!-- TODO -->

## My process

### Built with
- Semantic HTML5
- CSS custom properties
- Flexbox & CSS Grid
- Vanilla JavaScript
- Media queries & dvh units

### What I learned
The hardest part was the hamburger menu: the dim overlay blocked every click,
and the panel didn't match the design. I kept trying and used an AI mentor
that gave hints instead of answers, until I found the issues myself: my code
was outside the click listener, and the z-index layers were ordered wrong.

I also used CSS Grid for the first time to build the stats section, and
worked with JavaScript for the first time: addEventListener, classList.toggle,
and making decisions with if/else.

I'm proud of my entire script.js — the first JavaScript I've ever written
from scratch: it opens and closes the menu, swaps the icon, and adds the
dim overlay.

mb.addEventListener('click', () => {
    nav.classList.toggle('open');
    document.body.classList.toggle('menu-open');
    if(nav.classList.contains('open')){
        mb.src = "assets/images/icon-close.svg";
    } else{
        mb.src ="assets/images/icon-menu.svg";
    }    
})

### Continued development
- Add animations (menu sliding in from the edge)
- Improve accessibility across the project

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org) - my go-to reference

### AI Collaboration
I used an AI mentor that explains concepts and gives progressive hints
instead of ready solutions. It helped me debug layer stacking and positioning
issues, and understand JavaScript before writing it. What worked well: I
understood every line before writing it myself.

## Author

name : M

