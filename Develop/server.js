const express = require("express");
const path = require("path");
const htmlRoutes = require("./htmlRoutes.js");
const apiRoutes = require("./apiRoutes.js");

const app = express();
const PORT = process.env.PORT || 3333;


app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT)