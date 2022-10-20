# Memories

## Description

**Memories** is an app to post photos and captions of our memories. It's a Fullstack MERN App.
- The API on `/server` directory is a Node [Express](https://expressjs.com) app using [MongoDB](https://www.mongodb.com) as database.
- The client app on `/client` directory is a [ReactJS](https://reactjs.org) app (set up with [Vite](https://vitejs.dev)) with [Redux](https://redux.js.org) for state management and [TailwindCSS](https://tailwindcss.com) + [Material Design Icons](https://github.com/google/material-design-icons) for styling.

## Prerequisites
All the dependencies of both apps (Express & React) are listed in the `package.json` file in their root directory (`/server/package.json` & `/client/package.json`)

## Installation
- First installing the Express app:
		1. Go to the `/server` directory: `cd server` 
		2. Run the command `npm install`  to install all the required dependecies locally.
		3. Create a file named `.env` on root directory (`/server`) and fill it as the .`env.example` file with your own environment variables (here your MongoDB connection string)
		4. Run the command `npm run dev`  (in development) or `npm start` (in production) to launch the server.
		
- Then install the React app:
		1. Go to the `/client` directory: `cd client`
		2. Run the command `npm install`  to install all the required dependecies locally.
		3. Paste your running server root path (e.g. `http://localhost:5000`) to the "proxy" property in the `package.json` file
		4. Paste `<your_server_root_path>/posts` into the `/src/api/index.js` file at `line:3` in place of the default path (don't mind about changing it if it's already the same). At this step your package.json file should look like this:
		
		"author":  "dRect911",
		"private":  true,
		"version":  "0.0.1",
		"proxy":  "https://memories-backend.onrender.com",
	
	and your `/src/api/index.js` should look like this:

		import  axios  from  'axios';
		const  url  =  'https://memories-backend.onrender.com/posts';
		
5. Run the command `npm run dev`  (in development) or `npm run build` (in production) to launch the app.

At this point you might be done and able to check the app on the react output link t perform different actions such as create or edit a post.

## Contributing

Issue Tracker: https://github.com/dRect911/mern-stack-memories/issues
