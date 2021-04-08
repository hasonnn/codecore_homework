const express = require("express");
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const app = express();

const pathToStaticAssets = path.join(__dirname, "public");
app.use(express.static(pathToStaticAssets));

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.urlencoded({ extended:false}));
app.use(cookieParser);

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

const PORT = '3636'
const DOMAIN = 'localhost'
app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening at http://${DOMAIN}:${PORT}.`)
});

