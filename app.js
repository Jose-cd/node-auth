const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Routes = require("./routes/routes");
const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//CORS
app.use(cors());
// prefix
app.use("/api", Routes);

app.listen(5000, () => {
  console.log("server running in port 5000");
});

module.exports = app;
