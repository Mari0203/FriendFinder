# FriendFinder App with Node.js & Express Servers
Web app that finds you a friend based on compatibility score.

## App Overview

FriendFinder is a full-stack web application build with Node.js and Express server.  The app matches a friend based on the compatibility score caculated according to user's survey answers, and display the name and the picture of the match with best score.

The user is  brought to a landing page and then asked to begin a survey.  Each survey is comprised of 10 questions, meant to guage the user's personality and interests. Answers are scored between 1 to 5 based on how much the user agrees or disagrees with a question.  The app compare the user's answers with those from other users, and will then display the name and picture of the user with the best overall match.

## How App is Organized
The app uses Express with Node.js to handle the server routes for API call requests.  The live app is hosted on Heroku.

## Live App
![FriendFinder](...)

## App Functionality

1. User takes a survey from the home page. Each survey is comprised of 10 questions in the area of user's temperament, interests and hobbies.  Answers in the form of numerical values for agree or disagreeable-ness to each question are then scored The user arrives at a landing page.  Click the button to go to survey.
2. The app compares the answer scores against all other users in the database for the best compatibility match.
3. The app displays the best match friend with his/her name and the picture.
4. All users data are avaialble for review in JSON format via link `Friends List API` like below:

        ```json
        {
        "name":"Gustav",
        "photo":"http://www.studiotreasure.com/artists/k/Klimt-images/Gustav-Klimt.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
            ]
        }
        ```

NOTE: Notice that the url says `/survey` when you go to the survey page.  This is Express handling the different html routes.

## Technology Used

* HTML, CSS, Bootstrap
* JavaScript, Node.js, 
* npm packages: `express`, `path`
* Express
* Heroku

---

By Mari &copy; 2019
with :v:  &  :green_heart: