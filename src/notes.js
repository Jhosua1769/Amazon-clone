// 6:52:54
// and then replace history.push('/path') 
//with navigate('/path')

// Change history.replace('/path') with 
//navigate('/path', { replace: true })

// Want to use state in push/navigate do 
//navigate('/path', { state: { name:'Xyz' }})


const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');
const stripe = require('stripe')('sk_test_51MFElXDBT3r37HufiX2KhOYxumnIa9oltXHPiYPyaQnnSUTaGqz3lNpU5QTrItm7XPZLo8QVGeLJLCT0Dwdz8MsK00GFjjFW9G')

//API

//App config
const app = express();


//Middlewares
app.use(cors({ origin: ture}));
app.use(express.json());


//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

// -Listen command

exports.api= functions.https.onRequest(app)





// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
