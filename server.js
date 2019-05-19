const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const titleRoutes = require("./routes/titleRoutes");

titleRoutes(app);

//Server Connection
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));