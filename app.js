"use strict"

var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('scrumtastic.sqlite3');

var migrate = require('./lib/migrate');
migrate(db, 'migrations', function(err) {
  db.serialize(function() {
    db.run("INSERT INTO projects (name) values (?)", ['title']);
    db.all("SELECT * FROM projects", [], function(err, rows) {
      if(err) return console.error(err);
      console.log("ROWS:", rows);
    });
  });
});
