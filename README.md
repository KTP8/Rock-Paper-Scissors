# Rock, Paper, Scissors, Lizard, Spock!
### An Interactive Game with varied levels of difficulty

![Screenshot 2024-09-06 at 00 40 05](https://github.com/user-attachments/assets/696f3d54-f299-42e6-9bf3-612b5405c438)

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Testing](#testing)
5. [Deployment](#deployment)
6. [Credits](#credits)
   
## Introduction

The game "Rock, Paper, Scissors, Lizard, Spock" is an expanded -slightly more complex- version of the classic Rock, Paper, Scissors game. For many people the game was made famous by 'Sheldon Cooper' in the TV show 'The Big Bang Theory'. The introduction of the gestures "Lizard" and "Spock" creates a slightly more comples and engaging gameplay. Of the gestures that players can pick, each beats two others whilst being defeated by the remaining two, adding a strategic layer to this seemingly simple game: 
- Scissors cuts Paper
- Paper covers Rock
- Rock crushes Lizard
- Lizard poisons Spock
- Spock smashes Scissors
- Scissors decapitates Lizard
- Lizard eats Paper
- Paper disproves Spock
- Spock vaporises Rock
- Rock crushes Scissors

The game features multiple difficulty levels to cater to a broader choice of audience. The "easy" level allows the computer to make random choices; offering a relaxed and often unpredictable experience suitable for casual players of all ages. 

Meanwhile, the "medium" and "hard" difficulty levels introduce a level of predictabiity and strategy to the computer's selections. On the medium level, the computer randomly selects its 'hand' 80% of the time but makes a strategic selection based on the user's previous go 20% of the time. Furthermore, on the harder level, the strategy component increases from 20% to 40%, with the computer only making random selections 60% of the time. 

This structured approach ensures that the game remains accessible yet challenging; providing an enjoyable experience for beginners and seasoned players alike. 

## Technologies Used 
- HTML5
- CSS3
- JavaScript
- Hosted on GitHub Pages
  
## Features 

The game contains many different features, attributing to its useability and interactive interface. As mentioned previously, depending on difficulty selected. This game can be played by beginners or experts of the game and is designed to be used by children and adults alike. 

### Exisiting Features 
- **The Page Logo, Navigation and Heading**
  - Featured at the top of the page on all devices and made easy for the user to read. Upon viewing the page the user will be able to see the name of the game as well as a logo which displays an icon representing the game.
  - At the top of both pages and visible across all devices for easy navigation between the game and the rules to remind users of the added complexity to a classic game.

![Screenshot 2024-09-06 at 02 44 48](https://github.com/user-attachments/assets/b2fedf5f-4bca-4206-8ec9-7b9ec66bc3c5)

- **Rules Page**
  - The Rules Page provides users with a breakdown of the game rules, how to play/win, and also when listing winning moves uses the same colours as the selection icons to aid accessibility.
 
![Screenshot 2024-09-06 at 02 49 01](https://github.com/user-attachments/assets/4d79b924-8c0f-4e43-bd92-2e69cd022b56)

- **Difficulty Selector**
  - A dropdown menu allowing users to select their preferred difficulty for either the whole game or for each individual attempt to beat the computer.
    
 ![Screenshot 2024-09-06 at 02 50 09](https://github.com/user-attachments/assets/60f5e4c6-cf0a-4e67-b6ea-bd2be10145e5)

- **Game Area (Player Selection)**
  - 5 click-on icons for the user to select which hand they wish to play, with the description of each beneath to ensure accessibility and clarity for all users.
    
 ![Screenshot 2024-09-06 at 02 50 54](https://github.com/user-attachments/assets/974fe298-c7bc-45d5-b92b-a930eac628ed)

- **Game Area (Computer Choice & Scoreboard)**
  - Image display of the computer's choice of 'hand' which is displayed simultaneously with the user's click on their selection. This has a "placeholder image" until the user makes their first selection.
  - A live scoreboard which updates with the score between the user and the computer; making it easy to track progress and compare individual success rate against the different levels of difficulty.
    
![Screenshot 2024-09-06 at 02 54 28](https://github.com/user-attachments/assets/e330eab4-020f-4385-af86-2a03cd95ada9)
![Screenshot 2024-09-06 at 02 54 50](https://github.com/user-attachments/assets/13498e4e-3642-4804-a5a0-3a9fd96c2d54)

- **Game Area (Attempts Remaining)**
  - Attempt countdown; allowing for a maximum of 10 rounds to be played between user vs computer before the game is over. This updates live with each user selection.
    
 ![Screenshot 2024-09-06 at 02 53 12](https://github.com/user-attachments/assets/a45d2787-25b9-4ec6-a448-be2175884f65)

### Features left to Implement 
- For further iterations of the game, a feature which allows users to submit a username and select a single difficulty for the entirety of their game before beginning their go and then be listed on a "highscores" page which lists the difficulty they played at, their name, and the score they recieved vs the computer. 

## Testing 
- The game has been tested to ensure that it works on the following browsers: Chrome, Safari, Firefox.
- I can confirm that the project is responsive and functions well whilst maintaining aesthetics on all standard screen sizes using lighthouse on the devtools device toolbar.
- I have confirmed that the navigation, the game itself, and rules page are all easy to understand and readable.

### Validator Testing 
- HTML
  - No errors were returned when passing through the official W3c validator for both html files.
- CSS
  - No errors were returned when passing through the official Jigsaw validator.
- Javascript
  - No relevant warnings were returned when passing through the Jshint validator.
    The following metrics were returned:
    - There are 7 functions in this file.
    - Function with the largest signature take 2 arguments, while the median is 1.
    - Largest function has 20 statements in it, while the median is 4.
    - The most complex function has a cyclomatic complexity value of 6 while the median is 2.
   
### Responsiveness 
- The game has been tested for both desktop and mobile on both pages using lighthouse to assess its responsiveness and useability:
  
![Screenshot 2024-09-06 at 03 01 52](https://github.com/user-attachments/assets/7ea4d515-24d9-4642-ac9a-103b8f43978e)

### Bugs 
- During the writing of the code for this game, several issues appeared and had to be de-bugged. The main issues experienced were within the Javascript code. Although some styling issues also arose prior to using @media queries for adaptive styling. The main issue found within the Javascript that was fixed, were the attempts to have the game introduce a form of strategy or logic into its selection of 'hand' on the medium and hard levels.

These issues were tackled by deciding on an adaptive strategy which relied on use of the site user's previous selection to implement a machine learning technique from University of Stirling and ARS Technica. These techniques were developed into the Javascript using leanred techniques from Code forums and adapting them to write the following code as part of the .js file: 
```
   function getComputerChoice(difficulty) {
       let index = Math.floor(Math.random() * choices.length); 
       if (difficulty === "easy") {
           return choices[index];
       } else if (difficulty === "medium") { // For medium and hard computer has a set chance of using game logic to predict next move
           return Math.random() < 0.8 ? choices[index] : getCounterChoice(lastPlayerChoice); // Computer has an 80% chance of making a random choice
       } else if (difficulty === "hard") {
           return Math.random() < 0.6 ? choices[index] : getCounterChoice(lastPlayerChoice); // Computer has a 60% chance of making a random choice 
       }
   }
```
```
function getCounterChoice(playerChoice) { // listed winning hands 
    const winMap = {
        "Rock": "Paper",
        "Paper": "Scissors",
        "Scissors": "Rock",
        "Lizard": "Rock",
        "Spock": "Lizard"
    };
    return playerChoice ? winMap[playerChoice] : choices[Math.floor(Math.random() * choices.length)]; // Provides computer with logic to play best hand 
}
```
```
function updateScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("playerScoreBottom").textContent = playerScore;
    document.getElementById("computerScoreBottom").textContent = computerScore;
}
```
```
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    }
    const winConditions = {
        "Rock": ["Scissors", "Lizard"],
        "Paper": ["Rock", "Spock"],
        "Scissors": ["Paper", "Lizard"],
        "Lizard": ["Spock", "Paper"],
        "Spock": ["Scissors", "Rock"]
    };
    return winConditions[playerChoice].includes(computerChoice) ? "player" : "computer";
}
```

### Unfixed Bugs 
- On some runs of the game, the attempts remaining function does not work adequatley and remains fixed at 10/10. This is due to an error in loading javascript function into the html file at the correct time.

## Deployment 
- The site was deployed to GitHub pages. The steps used to deploy are:
  - In the GitHub repository, navigate to the Settings tab.
  - From the source section drop-down menu, select the Master Branch.
  - Once the Master Branch has been selected the page will automatically refresh with a detailed ribbon display to indicate successful deployment.
 
**The live link can be found here:** https://ktp8.github.io/Rock-Paper-Scissors/ 

## Credits 
This section lists the sources used as aid in creating this game as seen.

### Content 
- Coursera: HTML and CSS Coding 
- Udemy: Javascript course 
- Google AI: Used to explore methods in optimising game logic
- ChatGPT: Used to inspect code and optimise layout by asking for suggestions on where to remove / shorten code
- Imgur: Used to generate image URLS
- Fireship (Youtube): Javascript tips/new concepts
- Programming with Mosh (Youtube): Javascript tips/new concepts
- Univeristy of Stirling
- TheFreeCodeCamp Forum
- ARS Technica

### Media 
- GeoGebra: Steve Phelps 
- VectorStock