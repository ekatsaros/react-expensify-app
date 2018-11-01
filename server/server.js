const path = require('path');
const express = require('express');
const app = express(); // express app
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;


//customize express servers - use to register some middleware
app.use(express.static(publicPath));

//function to run on get request
app.get('*', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

//start server
app.listen(port, () => {
	console.log('server is up!');
});