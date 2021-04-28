const fs = require("fs");
let information = JSON.parse(fs.readFileSync("./Develop/db/db.json", "utf8"));


function useApiRoutes(app) {
    
    app.get("/api/notes", (req, res) => {
        res.json(information);
    });

    app.get("/api/notes/:id", (req, res) => {
        res.json(information[Number(req.params.id)]);
    });


    app.post("/api/notes", (req, res) =>  {
        let addedNote = req.body;
        let noteID = (information.length).toString();
        addedNote.id = noteID;
        information.push(addedNote);

        fs.writeFileSync("./Develop/db/db.json", JSON.stringify(information), function (err) {
            if (err) throw (err);
        });
        res.json(notesData);
    });

    app.delete("/api/notes/:id", (req, res) =>  {
        let selectedID = req.params.id;
        let numOfIDs = 0;

        information = information.filter(note => {
            return note.id != selectedID;
        });

        for (note of information) {
            note.id = numOfIDs.toString();
            numOfIDs++;
        }

        fs.writeFileSync("./Develop/db/db.json", JSON.stringify(information));
        res.json(information);
    });

};

module.exports = useApiRoutes;