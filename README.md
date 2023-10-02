# Frontend Mentor - Connect Four game solution

This is a solution to the [Connect Four game challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/connect-four-game-6G8QVH923s). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the game rules
- Play a game of Connect Four against another human player (alternating turns on the same computer)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the discs animate into their position when a move is made
- **Bonus**: Play against the computer

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://dazzling-conkies-026a37.netlify.app](https://dazzling-conkies-026a37.netlify.app)

## My process

- Create App Component, Reset CSS, Font, Menu, Starter (4hr)

This App is come up with:

1. Starter
2. Rule
3. MainGame: Main(Control game play), PlayerCounter(show how many games player won), footer(show timer and result)

- Main Game(3 Days)

Game state would be control by `Timer.js` and `Main.js`

`Main.js` should be able to:

1. Know who win the game
2. reset gameBoard conditionally
3. change player if no one win

`Time.js` deal with time related game rule, and should be able to:

1. start counting time by 5s if first player start to play.
2. if timer is 0s, nowPlayer should lost the game.
3. if someone show menu, the timer should pause and restart if close.

- User Info (4hr)

### Built with

- Semantic HTML5 markup
- SASS -- to manage CSS setting
- React

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

1. It's my first time to handle complex project, everything is great at the begining, and my code get into a mess while design game and time related algorithm. Next time, it's better to draw a greater flow chart before design.

2. first time to learn how to design timer and change state in different component.

3. it seems somwhat redundent while need to use stetes in child component, I need to code such `stateXXX` and `setState` again and again. Wondering if there's better way to manage useState.

4. It's troublesome while items in same position but with different z-index, sometimes `position: relative / absolute` or `display: flex` would be trouble, I sould be get deeper understand with css.

5. It's good to re-think about how to build the rule about game and timer. I fill like to bounce back and forth between `timer.js`, `footer.js`, and some else component.

### Continued development

1. Since it take me lots of time while design method, I didn't desgin RWD for laptop and phone view.
2. While player win, board should show oordinates. I've tried to display this by `renderGameRecord` in `Main.js`, not sure why this didn't work.
3. Sometimes it didn't show wiiner while timer comes to 0s.
4. while palyer draw, it should present draw result and clear board.
5. console keep shows warning about useEffect

### Useful resources

- [How to use setTimeout vs setInterval (Chinese)](https://kuro.tw/posts/2019/02/23/談談-JavaScript-的-setTimeout-與-setInterval/?fbclid=IwAR3RzmCJUNVubYmdkbtjPSdlTtztPLARJuy88bJe9I8utoR7Q0jgQu-jOtY)

## Author

- Github - [Chious](https://github.com/Chious)
- Frontend Mentor - [@Chious](https://www.frontendmentor.io/profile/Chious)
