const functions = require('firebase-functions');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "https://us-central1-grid-cloud-6ce8b.cloudfunctions.net/app"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(err => {
        console.log("Cannot connect to database!", err);
        process.exit();
    });

app.get("/", (req, res) => {
    res.json({ message: "200." });
});

require("./app/routes/turorial.routes")(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
exports.app = functions.https.onRequest(app);
module.exports = app;
