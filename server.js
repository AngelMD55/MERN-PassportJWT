require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport")

//passport config
require("./config/passport")(passport)

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});



//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mern-auth", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log("server listening on http://localhost:" + PORT);
});