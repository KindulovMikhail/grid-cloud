const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
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
  console.log(`Server is running`);
});

// export default app;
module.exports = app;
// exports.appForTest = app;
