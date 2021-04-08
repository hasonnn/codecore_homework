const express = require("express");
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

const pathToStaticAssets = path.join(__dirname, "public");
app.use(express.static(pathToStaticAssets));

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.urlencoded({ extended:false}));
app.use(cookieParser);





const PORT = '3636'
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening at http://${DOMAIN}:${PORT}.`)
});