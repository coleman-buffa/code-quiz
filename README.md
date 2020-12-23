# Quiz Game

This project is a browser based quiz game that will ask the user a series of Earth Science based questions. Selecting any answer will advance to the next question. If the user selects an incorrect answer they will lose 10 points which are tracked as a timer that starts at the beginning of the game. Upon completion of the game the user will have their score shown to them and can enter their name into the scoreboard. 

## Table of Contents

| |||
| :------------------------------ | :-------------------------| :-----------------------------------|
| [Project Introduction](#password-generator) | [Table of Contents](#table-of-contents) | [Goals and Methods](#goals-and-methods) | 
| [Technologies](#technologies)   | [Deployed Link](#deployed-link) | [Authors](#authors) |
| [Acknowledgments](#acknowledgments) | [License](#license) |
---

## Goals and Methods

The overall goal of this project was practice in DOM navigation and manipulation without using JQuery. Each time the user clicks on a button the page is painted with a different set of elements. This change was accomplished by hiding all elements and subsequently bringing desired elements out of hiding. This was accomplished by adding and removing a CSS class that had the style display: none. See code Snippet 1 for an example: 
```javascript
 quizArea.classList.add("hide");
 ```
 and
 ```javascript
 quizArea.classList.remove("hide");
```
Each button that had an event listener attached acted as a driver to the next or acted as user input. 

## Technologies 

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com/)

## Deployed Link

* [See Live Site](https://coleman-buffa.github.io/quiz-game/)

## Authors

Coleman Buffa

- [Link to Git Hub](https://github.com/coleman-buffa/)
- [Link to LinkedIn](https://www.linkedin.com/in/coleman-buffa-0a12a5201/)

## Acknowledgments

* Many thanks to UCB Bootcamp Instructional and Support Staff

## License

* Bootstrap is released under the MIT license and is copyright 2020 Twitter

### [Back to Table of Contents](#table-of-contents)