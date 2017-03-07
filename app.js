"use strict"

var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('scrumtastic.sqlite3');

var migrate = require('./src/migrations');
migrate(db);

db.run("INSERT INTO projects (name) values ('title')");
console.log(db.run("SELECT * FROM projects"));
