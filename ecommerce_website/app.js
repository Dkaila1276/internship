const express = require('express');
const config = require('./config/config.env');
const routes = require('./routes');
const db = require('./config/db')

const app = express();

app.get('/', (req, res) => {
	res.status(200);
	res.send("Welcome to root URL of Server");
});

app.use(express.json());
app.use('/app', routes);

app.listen(config.PORT, (error) => {
	if (!error)
		console.log(`Server is Successfully Running, 
					and App is listening on port `+ config.PORT)
	else
		console.log("Error occurred, server can't start", error);
}
); 