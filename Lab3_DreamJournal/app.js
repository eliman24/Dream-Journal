const DEBUG = true;

//set up the server
const db = require('./db/db_connection');
const express = require( "express" );
const logger = require("morgan");
const app = express();
const port = 7070;

// Configure Express to use EJS
app.set( "views",  __dirname + "/views");
app.set( "view engine", "ejs" );

// define middleware that logs all incoming requests
app.use(logger("dev"));

// define middleware that serves static resources in the public directory
app.use(express.static(__dirname + '/public'));

// define a route for the default home page
app.get( "/", ( req, res ) => {
    res.render('index');
});

// define a route for the journal page
const read_journal_all_sql = `
    SELECT 
    journalID, dreamName, dreamType,
        DATE_FORMAT(dreamDate, "%m/%d/%Y (%W)") AS dreamDateFormatted
    ORDER BY journalID DESC
`
app.get( "/journal", ( req, res ) => {
    db.execute(read_journal_all_sql, (error, results) => {
        if (DEBUG)
            console.log(error ? error : results);
        if (error)
            res.status(500).send(error); //Internal Server Error
        else if (results.length == 0)
            res.status(404).send(`No assignment found with id = "${req.params.id}"` ); // NOT FOUND
        else
            res.send(results[0]); // results is still an array
    });
});

// define a route for the dream detail page
const read_dreams_detail_sql = `
    SELECT
        title, type, date, description, interpretation, dreams.journalID as journalID
        DATE_FORMAT(date, "%W, %M %D %Y") AS dueFormatted
    FROM journal
    JOIN dreams
        ON dreams.journalID = journal.journalID
    WHERE assignmentId = ?
`
app.get( "/journal/:id", ( req, res ) => {
    db.execute(read_dreams_sql, [1], (error, results) => {
        if (DEBUG)
            console.log(error ? error : results);
        if (error)
            res.status(500).send(error); //Internal Server Error
        else if (results.length == 0)
            res.status(404).send(`No assignment found with id = "${req.params.id}"` ); // NOT FOUND
        else
            res.send(results[0]); // results is still an array
    });
});


// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );