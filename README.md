# User Authentication - Full Stack - React

This is a simple log in application which uses a React client and connects to a sequelize api included in the repository. The api can post and get user information which which the client uses for authentication. The app is focused more on the technologies used to build the app then the app its self.

## Running the Application

You will need to run both servers at the same time as the client and api use local host to work the app.

1. client: port 3000
1. api: port 5000

Simply cd into each directory in separate terminals and run

```
    npm install
    npm start
```

You will then be able to use localhose:3000 to view the client

## Layout

1. **client:** front end
   - Set up with _**Express**_
   - Built with _**React**_
   - Uses _**React-Router v6**_
   - Applies _**Context**_ for readability
   - Maintains log in status using _**Cookies**_
   - Uses _**Hooks**_ to maintain state and context
1. **api:** back end
   - Set up with _**Express**_
   - Uses a _**Sequelize**_ db to maintain user data
   - Uses _**Basic Authentication**_
   - _**Encrypts**_ user password

## Database & API

Sets up a server on localhost:5000 to maitain user data.

As it stands, the database is set up to store:

```javascript
{
  name: required;
  username: required;
  password: required;
}
```

The API routes:

- GET _localhost:5000/api/users_ using username and password fields for Basic Authentication
- POST _localhose:5000/api/users_ which accepts a JSON object containing the new user information

## Client

The client itself is not meant to be impresive as much as it is focused on functionality and usablity. Maintains context for the application within client/src/Context.js to prevent propdrilling and aid readability. Additionally utilizes react and react-router-dom hook to access and maintain state, actions, and context.

The app's available routes:

- **localhost:3000/** : welcome page
- **localhost:3000/signup** : sign up form
  - POST new user to the db
  - redirects to /authenticated once successfully signed up
  - sets a cookie with the authenticated user's information which expires in 1 day
- **localhost:3000/login** : log in form
  - utilizes Basic Authentication for loging in
  - redirects to /authenticated when successfully logged in
  - sets a cookie with the authenticated user's information which expires in 1 day
- **localhost:3000/logout** : loggs out the current user
  - redirects to localhost:3000/
  - deletes the user's cookie
- **localhost:3000/authenticated** : PrivateRoute and default message when successfully logged in
  - redirects to /login if un-authenticated user tries to access route.
- **localhost:3000/profile** : additional PrivateRoute displaying the user's information
  - redirects to /login if un-authenticated user attempts to access route. Once successfully logged in, the user will be redirected back to /profile as it was the originally intended route to visit
