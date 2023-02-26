const admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
});

function authenticate(req, res, next) {
    getAuth().verifyIdToken(idToken).then((decodedToken) => {
        const uid = decodedToken.uid;
    // ...
    }).catch((error) => {
    // Handle error
    });
    console.log(req.headers.Authentication);
    next();
}

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCC2YJXsNli1CzIbR3hwK5OUAQbazlGUsE",
    authDomain: "sdcta-visualization-auth.firebaseapp.com",
    projectId: "sdcta-visualization-auth",
    storageBucket: "sdcta-visualization-auth.appspot.com",
    messagingSenderId: "670464076427",
    appId: "1:670464076427:web:84f845d72220158af7c28e",
    measurementId: "G-ZNSQ7WTCM0"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
