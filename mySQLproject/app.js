const express = require('express');
const db = require('./config/db');
const routes = require('./routes');




const app = express();



app.get('/', (req, res) => {
	res.status(200);
	res.send("Welcome to root URL of Server");
});

app.use(express.json());

app.use('/app', routes);


app.listen(3000, (error) => {
	if (!error)
		console.log(`Server is Successfully Running, 
					and App is listening on port `+ 3000)
	else
		console.log("Error occurred, server can't start", error);
}
);