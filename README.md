# FrankenStyle

![app preview](./public/assets/images/frankenstyle-preview.JPG)

### View the app online 

Open the live app in your browser with this link: https://deanssmart.github.io/frankenstyle/

## Intro

Interactive four player Pictionary style game where players take it in turns to draw and guess randomized words.

### Technologies

- JavaScript
- React
- Redux
- JSX
- HTML/CSS
- Git (version managed)
- Laravel (Backend)

### Functionality and Features

- User input player names
- Drawing canvas with mouse or touch input
- backend database of played games (future feature to have a history table)
- Fun for all the family 👍

### How to Play

- Enter player names and click 'Start'
- Player 1 is given a word, and an image for reference
- When they are ready they click the 'Ready' button
- On the sketch pad they attempt to draw the word they were given and when they are finished they click 'Submit'
- Player 2 then guesses what the drawing that player 1 just drew, represents, by typing in the input form and clicking 'Submit'.
- Player 3 then tries to draw the word that player 2 just guessed.
- Finally player 4 has to guess what player 3 has just drawn
- After player 4 submits their guess the original word, image and all the player drawings and guesses are presented for everyone to see.

## Setup on your machine

1. Create a local directory on your machine 
2. Run the following code in your command line to navigate into that directory:   

```shell 
$ cd ~/your-directory-name-here
```
3. Copy the SSH key from this GitHub repository `git@github.com:deanssmart/frankenstyle.git`

4. Run the following code in your command line to clone the repo to your machine (you can change the app-name to what you desire):  

```shell 
git clone git@github.com:deanssmart/frankenstyle.git <app-name>
```
5. Navigate to your new app directory (the app name you just picked):

```shell 
$ cd app-name
```
6. Install the dependencies:

```shell 
npm i
```
7. Run the following command to launch the app in your default browser at http://localhost:3000/:

```shell 
npm start
```
8. Enjoy

## Credits

### Backend

- Marta Kobylinska https://github.com/mmkobylin

### CSS 
- Oliver Ballon https://github.com/OlBal