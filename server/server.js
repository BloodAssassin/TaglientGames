const express = require("express");
const nodeMailer = require("nodemailer");
const { email, password } = require("./config");
const app = express();

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

// Listen for calls
app.listen(5000, () => {
  console.log("Server started on port 5000");
});

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>404! Page not found</h1>");
});
