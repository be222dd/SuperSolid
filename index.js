const express = require('express')
const bodyParser = require('body-parser')
const gameRoutes=require('./routes/gameRoutes')

const app = express()

app.use(express.static(__dirname))
app.use(express.json())

// parse application/json
app.use(bodyParser.json())

//Index Page Route
app.get('/',(req, res) => { res.render('index.html') })

//API Routes
app.use('/api',gameRoutes)

//Catch lost souls
app.all('*', (req, res) => {
	res.status(404).json(
		{ errorMessage:`You are lost my Child! Can't find ${req.originalUrl} on this server!` }
	)
  })

const port = 3000;
app.listen(port, ()=> {
	console.log('Server', process.pid, 'listening on port', port)
})



/*
process.on('exit', function () {
  console.log('About to exit.');
});
*/