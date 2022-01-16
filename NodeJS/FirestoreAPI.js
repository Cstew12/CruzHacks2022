// REST API built using ExpressJS. Serves as an entry
// point to use the Cloud Firestore for this application.

const express = require("express")
const app = express();
const port = 5000;
const FirestoreDB = require('./FirestoreClient');
const bodyParser = require('body-parser');
const cors = require('cors');

// To handle asynchronous response from network.
async function getHelper(data, res) {
	const result = await FirestoreDB.get('Users', data);
	console.log(result);
	res.send(result);
	return;
}

app.use(cors());

// Body parser middleware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Post endpoint using JSON object.
app.post("/Users", (req, res) => {
	const data = req.body;
	FirestoreDB.add('Users', data);
	res.send("Recieved!");
});

// Get endpoint using JSON object.
app.get("/Users", (req, res) => {
	const urlParams = new URLSearchParams(req.url); // parse URL.
	const data = {identifier: urlParams.get('/Users?identifier')};
	const result = getHelper(data, res);
});

app.delete("/Users", (req, res) => {
	const data = req.body;
	FirestoreDB.delete('Users', data);
	res.send("Recieved!");
})

app.listen(port, () => console.log(`API listening on port ${port}!`));



