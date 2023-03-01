# SDCTA-Data-Visualization-Website

Starter code: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/

Getting started:

1. Log onto the [Mongo Database](https://cloud.mongodb.com/v2/63cb7a2372c6c2037a621c9a#/clusters).
2. If you are unable to log in, let Victor/James/Nirmal know.
3. Open up "Database Access" in the bar on the left.
4. Create a new user by putting in only a username and password, without changing any other settings. Make sure to save the password if you autogenerate it.
5. Next, go back to the "Database" tab under the left bar and click the "Connect" button on our database.
6. Click "Connect using MongoDB Compass" and you will see a connection string. Copy that to your clipboard.
6. Create a .env file within the server folder with the following: `DATABASE_URL = [your connection string here]`. Make sure to update the username and password within the connection string!
7. You should be all set up! When you run `npm start` on the server, you should receive confirmation that you connected to the database.

