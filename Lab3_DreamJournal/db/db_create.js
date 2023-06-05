const db = require("./db_connection");

/**** Drop existing tables, if any ****/
const drop_dreams_table_sql = "DROP TABLE IF EXISTS dream;"

db.execute(drop_dreams_table_sql);

const drop_journal_table_sql = "DROP TABLE IF EXISTS journal;"

db.execute(drop_journal_table_sql);

/**** Create tables ****/
const create_journal_table_sql = `
    CREATE TABLE journal (
        journalID INT NOT NULL AUTO_INCREMENT,
        dreamDate DATE NOT NULL,
        dreamName VARCHAR(45) NOT NULL,
        dreamType VARCHAR(45) NOT NULL,
        PRIMARY KEY (journalID));
`
db.execute(create_journal_table_sql);

const create_dreams_table_sql = `
    CREATE TABLE dreams (
        dreamID INT NOT NULL AUTO_INCREMENT,
        journalID INT NOT NULL,
        title VARCHAR(45) NOT NULL,
        type VARCHAR(45) NOT NULL,
        date DATE NOT NULL,
        description VARCHAR(150) NOT NULL,
        interpretation VARCHAR(150) NOT NULL,
        PRIMARY KEY (dreamID),
        INDEX dreamJournal_idx (dreamID ASC),
        CONSTRAINT dreamJournal
            FOREIGN KEY (dreamID)
            REFERENCES dream (dreamID)
            ON DELETE RESTRICT
            ON UPDATE CASCADE);
`

db.execute(create_dreams_table_sql);

db.end();
