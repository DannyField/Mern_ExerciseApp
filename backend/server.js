const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// Creates our express server
const app = express();
const port = process.env.PORT || 5000;

// Cors middleware
app.use(cors());

// Allows it parse json, sending and recieving JSON
app.use(express.json());

// Need to get the URI from the mongoose dash board
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection has been established successfully");
});

// This starts the server and listens to a set port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
