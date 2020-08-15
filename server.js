const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const router = require('./routers/router');

// Middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes
app.get('/', (req,res) => {
  res.json("Hey, your server is working!")
})

app.use(router);

// Every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
