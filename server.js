const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

// import api route
const auth = require("./routes/api/auth");
const profile = require("./routes/api/profile");
const users = require("./routes/api/users");

// Configuration of DB
const db = require("./config/keys_dev").mongoURI;

// connect to mongo DB
mongoose
	.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => console.log("Mongo DB is connected ✅..."))
	.catch(err => console.log(err));

// use api routes
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/users", users);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
