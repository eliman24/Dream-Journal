const db = require("./db_connection");

/**** Read and print the journal table ****/

const select_journal_sql = "SELECT * FROM journal";

db.execute(select_journal_sql, 
    (error, results) => {
        if (error) 
            throw error;

        console.log("Table 'journal' contents:")
        console.log(results);
    }
);

/**** Read the dreams table, joined with subjects table ****/

const select_dreams_sql = `
SELECT *
FROM dreams
JOIN journal
    ON dreams.journalID = journal.journalID
ORDER BY
    dreams.dreamID;
`;

db.execute(select_dreams_sql, 
    (error, results) => {
        if (error) 
            throw error;

        console.log("Table 'dreams' contents:")
        console.log(results);
    }
);

db.end();