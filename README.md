## Description

The purpose of this repo is to create a sample project for trying out [React Testing Libary](https://www.objekt.click/2020/02/react-testing-library-learn-by-coding/).

This repository contains a simple "mini jeopardy" game. It calls the `http://www.jservice.io/` API and makes use of their clues api from the year 1996 in the science category. It picks 5 random valid cues from the first set returned via the api and sorts them according to their value.

![Alt text](screenshot.png?raw=true "Title")


### After cloning this repo

In the project directory: 

#### 1. Install dependencies

run `yarn install`

#### 2. Run the app

run `yarn start` first and a browser window should open and load the app
or open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### 3. Run the tests

run `yarn test` and the test suit should run

#### 4. Build the app for production

`yarn build` and it should build the app for production to the `build` folder.


### To Do:
##### Use react hooks or redux to 
- Keep track of score
- Keep track of flipped cards to limit selection to one clue at a time
- Create a game history
