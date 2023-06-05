/**** Create some sample subjects and assignments ****/

const insert_journal_sql = `
    INSERT INTO journal 
        (journalID, dreamName, dreamType) 
    VALUES 
        (?, ?, ?);
`

db.execute(insert_journal_sql, [1, 2023-04-01, 'Driving off Cliff', 'Normal Dream']);

db.execute(insert_journal_sql, [2, 2023-04-02, 'Flying Over Ocean','Lucid Dream']);

db.execute(insert_journal_sql, [3, 2023-04-03, 'Naked at School', 'Nightmare']);


const insert_dreams_sql = `
    INSERT INTO dreams 
        (journalID, title, type, date, description, interpretation) 
    VALUES 
        (?, ?, ?, ?, ?, ?);
`

//journalID: 1 => 'Driving Off Cliff'
db.execute(insert_dreams_sql, [1, 'Driving Off Cliff', 'Normal Dream', 2023-04-01, 
    'It was pretty nice out. Ashley was driving me, Joy, and  grandma on the highway. All of a sudden, she drove off the side of the cliff we were on. I immediately screamed I was that we were all gonna die, but somehow we were coasting on top of the water below the cliff. I was absolutely terrified. So glad it was just a dream.',
    'Im scared of driving with my friend.']);

db.end();