const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const titleRoutes = require("./routes/titleRoutes");

titleRoutes(app);
app.get("*", (req, res) => {
  res.status(404).send("Error 404 : PAGE NOT FOUND");
});

//Server Connection
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
