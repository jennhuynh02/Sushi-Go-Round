# Question Aura
[Link to live webpage:](https://jennhuynh02.github.io/Sushi-Go-Round/)

## Demo

![demo](demo.gif) 

## Motivations, Thoughts, and Consideration Behind This Project
Inspired by the Nintendo 64 Pokemon Stadium minigames, I attempted to recreate the Sushi-Go-Round lickitung game with a minesweeper spin.


## Features Overview and Technologies Involved
* Ruby on Rails
  - A server-side web application framework, built with the Ruby programming language, which was used for our backend development.  The rails framework holds a model, view, controller architecture that allows for communication with the database, handling of requests/changes, and rendering of templates/information to be presented to the user.  Rails included: (1) Active Record for the models portion, which creates objects and persists them to the database for storage, (2) Active Controller for backend actions such as the creation, reading/indexing, updating, and deletion of objects, (3) as well as the use of a domain specific language, known as Jbuilder to render JSON objects for our views portion.  
* HTML5
  - Canvas, game design, animation.
* Javascript
  - Game logic - point complexity and level difficulty (time intervals).

Altogether, these technologies were incorporated to:
(1) Created game animations and player movement using HTML5 canvas.
(2) Increased level of difficulty and using setintervals and document event listeners.
(3) Developed game logic, point system, and level system using custom made algorithms and Object-Oriented Programming in Javascript.


## Configuration and Deployment Instructions:
1. Download the zip from github 
2. Open terminal
3. Run "npm start" to run webpack
4. Open index.html file :)


Code Snippet of Conveyor Belt Items:
  - To avoid deleting the conveyor belt tiles when popping items off (sushi monster eating): I deep duplicated the original array of the possible positions, which was then called the new array 'orderedPositions'.  I used this array to scrambled the possible positions by grabbing a random index, splicing the position from it, and pushing it into the 'scrambledPositions'.  This allowed me to remove the glitch that was deleting the tiles with the items that were being eaten.
```   addItemsOntoConveyorBelt() {
    const orderedPositions = [];
    const scrambledPositions = [];
    const { allConveyorBeltItems } = this;
    this.possiblePos.forEach((arr) => {
      const mini = [];
      mini.push(arr[0]);
      mini.push(arr[1]);
      orderedPositions.push(mini);
    });
    while (orderedPositions.length !== 0) {
      const random = Math.floor(Math.random() * Math.floor(orderedPositions.length));
      scrambledPositions.push(orderedPositions[random]);
      orderedPositions.splice(random, 1);
    }

    for (let i = 0; i < 6; i += 1) {
      allConveyorBeltItems.push(new Sushi(scrambledPositions[i]));
    }
    for (let i = 6; i < 12; i += 1) {
      allConveyorBeltItems.push(new SushiOne(scrambledPositions[i]));
    }
    for (let i = 12; i < 18; i += 1) {
      allConveyorBeltItems.push(new SushiTwo(scrambledPositions[i]));
    }
    for (let i = 18; i < 23; i += 1) {
      allConveyorBeltItems.push(new Chili(scrambledPositions[i]));
    }
    for (let i = 23; i < 28; i += 1) {
      allConveyorBeltItems.push(new Fish(scrambledPositions[i]));
    }
  }

  drawConveyorBeltItems(context) {
    const { allConveyorBeltItems } = this;
    allConveyorBeltItems.forEach((item) => (
      item.draw(context)
    ));
  }
```