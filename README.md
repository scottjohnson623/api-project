# This was created during my time as a student at Code Chrysalis



### This API simulates a Fake user database for a fan website.



##### The data for Users collected is as follows:
-first_name -String - Required
-last_name - String - Required
-email - String - Nullable
-gender - String - Nullable
-favoriteanimal - String - Nullable
-motto -String - Nullable
-networth - String - Nullable
-carmake - String - Nullable
-favmoviegenre - String - Nullable



##### The endpoints designed for this API are as follows:


###### Get
"/:id" - brings up the user data with the specified ID


###### Post
"/" - takes an object and creates a new User entity and adds it to the database.


###### Delete
"/" - Takes an object with at least ID of the user and deletes the user from the database.


###### Patch
"/" - Takes a partial user object and updates the user in the database.