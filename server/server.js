const express = require("express");
const nodeMailer = require("nodemailer");
const path = require("path");
const app = express();

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

app.use(
  cors({
    origin: "https://taglient-games-client.vercel.app", // Allow specific origin
  })
);

// Serve the root directory page
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to Taglient Games</h1><p>This is the root directory page.</p>"
  );
});

// Listen for calls
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
