const express = require("express");
const nodeMailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
const app = express();

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// Enable CORS for all routes
app.use(cors());
app.options("*", cors()); // Enable preflight for all routes

async function contact(user_name, user_email, user_message) {
  // Create the message
  const message = `
  <h3>Contact Info</h3>
  <b>Name:</b> ${user_name}<br>
  <b>Email:</b> ${user_email}<br>
  <h3>Message</h3>
  <p>${user_message.replace(/\n/g, "<br>")}
`;

  // Create the transporter
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: password,
    },
  });

  // Send the message
  const info = await transporter.sendMail({
    to: email,
    subject: "Taglient Games - Contact Form",
    html: message,
  });

  console.log("Message sent: " + info.messageId);
}

// API Calls
app.use(express.json()); // Middleware to parse JSON bodies

app.post("/api/contact", async (req, res) => {
  const { user_name, user_email, user_message } = req.body;
  try {
    await contact(user_name, user_email, user_message);
    res.status(200).send("Message sent successfully");
  } catch (error) {
    res.status(500).send("Failed to send message");
    console.log(error.message);
  }
});

// Serve the root directory page
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to Taglient Games API</h1><p>This is the api directory page.</p>"
  );
});

// Listen for calls
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
