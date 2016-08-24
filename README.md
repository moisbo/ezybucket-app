# A Bucket List App

This app lets you create a bucket list with registering your progress, adding comments and a picture to each comment

For example:

- I have an item to eat all sorts of sushi there are.
- I could add a progress like "01/08/2016 - Scheduled to visit an awesome Japanese restaurant that serves eel sushi"
- Later on, I could add a comment on how was the experience: "Eel sushi rocks! <picture of an eel sushi>"

### Installation

#### Prerequisites: Node version 6

To install:

- Edit your `src/config.js` to point to your REST API's url (default is `http://localhost:3000`)
- Install dependencies with `npm install`
- Then run `npm start` to test in `http://localhost:8080`
- Run in `npm run prod` to generate `dist/` app

### Architecture

- A react app built with material-ui, react-router
- Components Centered in `Box.js` as in Almost all Components re-use box.js as a template

### TODOS

- Add polyfills (find //TODOS in code)
- Improve readability of code
- Design to be more flexible
- Improve transition animations
- Handle Errors
- Handle Users