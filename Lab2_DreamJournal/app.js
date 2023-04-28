//set up the server
const express = require( "express" );
const logger = require("morgan");
const app = express();
const port = 7070;

// define middleware that logs all incoming requests
app.use(logger("dev"));

// define middleware that serves static resources in the public directory
app.use(express.static(__dirname + '/public'));

// define a route for the default home page
app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/views/index.html" );
} );

// define a route for the assignment list page
app.get( "/assignments", ( req, res ) => {
    res.sendFile( __dirname + "/views/journal.html" );
} );

// define a route for the assignment detail page
app.get( "/assignments/detail", ( req, res ) => {
    res.sendFile( __dirname + "/views/dreams.html" );
} );

// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );