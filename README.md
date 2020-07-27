# This was created during my time as a student at Code Chrysalis



### This API simulates a fake user database for a fan website.



#### The data for Users collected is as follows:
- first_name -String - Required
- last_name - String - Required
- email - String - Nullable
- gender - String - Nullable
- favoriteanimal - String - Nullable
- motto -String - Nullable
- networth - String - Nullable
- carmake - String - Nullable
- favmoviegenre - String - Nullable



#### The endpoints designed for this API are as follows:


##### Get
"/:id" - brings up the user data with the specified ID

"/allUsers" - brings up all user data.


##### Post
"/" - takes an object and creates a new User entity and adds it to the database.


##### Delete
"/" - Takes an object with at least ID of the user and deletes the user from the database.


##### Patch
"/" - Takes a partial user object and updates the user in the database.

## To get started and use this repo:

1. install necessary dependences with "yarn install" or your preferred package manager option
2. create a database in postgres, and configure the ormconfig.json file and the connection in src/index.ts
3. run "yarn migrate" and "yarn seed" to create the user table and populate it with seed info
4. run "yarn start" and navigate to the server URL
5. enjoy! 