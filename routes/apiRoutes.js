const fs = require("fs");
const path = require('path');


let database = require("../db/db.json");


function useApiRoutes(app) {
    
    app.get("/api/notes", (req, res) => {
        res.json(database);
    });

    app.post("/api/notes", (req, res) =>  {
        let addedNote = req.body;
        addedNote.id = Math.random();
        database.push(addedNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(database), function (err) {
            if (err) throw (err);
        });

        res.json(database);
    });

    app.delete("/api/notes/:id", (req, res) =>  {
        let selectedID = req.params.id;
        database = database.filter(note => note.id != selectedID);

        fs.writeFileSync("./db/db.json", JSON.stringify(database));
        res.json(database);
    });

};

module.exports = useApiRoutes;