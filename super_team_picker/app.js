const express = require("express");
const logger = require("morgan");
const path = require("path");
//const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views")

app.use(logger("dev"));

const pathToStaticAssets = path.join(__dirname, "public");
app.use(express.static(pathToStaticAssets));
app.use(express.urlencoded({ extended:true}));

// app.use(cookieParser);

app.use(
    methodOverride((req, res) => {
        if (req.body && req.body._method) {
            const method = req.body._method;
            return method;
        }
    })
);

const homeRouter = require("./routes/home");
app.use("/", homeRouter);
const cohortsRouter = require("./routes/cohorts");
app.use("/cohorts", cohortsRouter);

const PORT = '3000'
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening at http://${DOMAIN}:${PORT}.`)
});

