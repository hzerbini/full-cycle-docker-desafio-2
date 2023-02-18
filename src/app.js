const express = require('express');
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: "db",
    user: "root",
    database: "app"
});

const app = express();

function insertPerson() {
    pool.execute('INSERT INTO people (name) VALUES (?)', ['Full Cycle']);
}

async function getPeople() {
    const [people, _] = await pool.execute('SELECT * FROM people');
    return people;
}

app.get('/', async (_, res) => {
    insertPerson();
    const people = await getPeople();
    res.send("<h1>Full Cycle Rocks!!</h1>" + people.map(person => "-" + person.name).join('<br>'));
});

app.listen(3000);
