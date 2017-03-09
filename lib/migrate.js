"use strict";

module.exports = function(db) {

  db.run("CREATE TABLE projects (id INTEGER PRIMARY KEY, name TEXT, version TEXT, repository TEXT, license TEXT)");
  db.run("CREATE TABLE cards (id INTEGER PRIMARY KEY, project_id INTEGER, message TEXT, data TEXT, FOREIGN KEY (project_id) REFERENCES (project_id) )");
}
