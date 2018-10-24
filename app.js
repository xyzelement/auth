const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

//Middlewhere
app.use(morgan("dev")); //github of morgan hasmore
app.use(bodyParser.json());

//Routes
app.use("/users", require("./routes/users"));

//start
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening on ${port}`); //template literats
