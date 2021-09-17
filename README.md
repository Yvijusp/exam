# Administration Panel

This project is made using Express.js, MongoDB and React.js.

# Available Scripts

## In frontend directory, you can run:

### `yarn start` | `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view in the browser.

### `yarn build` | `npm run build`

Builds app fro production to `build` folder.

## In backend directory, you can run:

### `npm start`

Runs the node server. Used in deployment.

### `npm run dev`

Runs development server using nodemon.
Open [http://localhost:5000](http://localhost:5000) to view in browser

# Project Functions

## Backend

### GET routes

### `/`

Tells that the server is running

### `/users`

Fetch's every user that is registered in database.

### POST route

### `/users/register`

Register a new user using
{ name: String, age: Number, email: String, password: String }
Schema

### PUT route

### `/users/update/:id`

Update user using their ID.

### DELETE route

### `/users/delete/:id`

Delete user using their ID

## FrontEnd

Simple Frontend made using react to show how the routes work.
