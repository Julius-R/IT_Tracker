# IT Tracker

Link to finished version: currently not avaialble

> Funny story. I started this as a way to practice using [Redux Toolkit](https://redux-toolkit.js.org/).
> Now it's evolved into a fullstack application complete with an express backend and a database connection.

## Installation

```bash
npm install & cd client npm install
```

This should install all the packages you need. I would like to note that I am using nodemon for the node server, you can download it [here](https://nodemon.io/) or alternatively just replace the following in the main package.json

```json
--  "start": "nodemon server/index.js"
++  "start": "node server/index.js"
```

Also, the databas in use is postgres. I'm using [node-postgres](https://node-postgres.com/). You can completely omit that if you want to use this project with MongoDB.

To run, simply do the following in two terminals.
Terminal 1:

```bash
npm start
```

Terminal 2:

```bash
npm start
```
