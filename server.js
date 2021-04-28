const express = require("express");
const path = require("path");
const htmlRoutes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use("/assets", express.static("./assets"));
//app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/public")));

htmlRoutes(app);
apiRoutes(app);
//app.use(apiRoutes);
//app.use(htmlRoutes);

app.listen(PORT, function () {
    console.log(`APP Listening on ${PORT}`);
})