const fs = require("fs");
const path = require('path');


let database = require("../db/db.json");
//let information = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));


function useApiRoutes(app) {
    
    app.get("/api/notes", (req, res) => {
        res.json(database);
    });

    app.post("/api/notes", (req, res) =>  {
        let addedNote = req.body;
        addedNote.id = noteID;
        database.push(addedNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(database), function (err) {
            if (err) throw (err);
        });
        res.json(database);
    });

    app.delete("/api/notes/:id", (req, res) =>  {
        let selectedID = req.params.id;
        let numOfIDs = 0;

        database = database.filter(note => {
            return note.id != selectedID;
        });

        for (note of database) {
            note.id = numOfIDs.toString();
            numOfIDs++;
        }

        fs.writeFileSync("./db/db.json", JSON.stringify(database));
        res.json(database);
    });

};

module.exports = useApiRoutes;