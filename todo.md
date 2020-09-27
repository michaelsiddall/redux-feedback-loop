Create a feedback componant with 4 views
Create Components:  Feeling, Understanding, Supported, Comment, Review, Confirm
-create a input that takes number 1-5

-“Next” button that allows user to go to next question (Component)
-Must complete field before moving to next screen (set alert)

-Do same for “Understanding” and “Supported”

- Render all answers from each view on the DOM
  -Validate the data (alert if not filled)
  -Write a POST request to create object on the server. 
  -Handle Form
  -Write a POST endpoint/feedback in server
  -Read data from req.body
  -Store data
  Create connection to database via pool
  Write queryString to store data in database.  
  pool.store
  Return the result

- Display success and reset
