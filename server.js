const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the same directory
app.use(express.static(__dirname));

// Connect to MongoDB (replace 'your_database_url' with your actual MongoDB connection string)
mongoose.connect(
  "mongodb+srv://vishal:AA3gY1ymj0IZiLBd@cluster0.mcm7hby.mongodb.net/My-Profile-Contact-form",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Create a schema for the contact form data
const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  profession: String,
  message: String,
  agreeTerms: Boolean,
});

const Contact = mongoose.model("Contact", contactSchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile("https://vishal-creator-profile.netlify.app", { root: __dirname });
  });
  
  app.get("https://vishal-creator-profile.netlify.app/contact", (req, res) => {
    res.sendFile("https://vishal-creator-profile.netlify.app/contact", { root: __dirname });
  });
  

// Handle form submission
app.post("https://vishal-creator-profile.netlify.app/contact", (req, res) => {
  const { fullName, email, profession, message, agreeTerms } = req.body;

  // Create a new contact instance
  const newContact = new Contact({
    fullName,
    email,
    profession,
    message,
    agreeTerms: agreeTerms === "on", // Checkbox value is 'on' if checked
  });

  // Save the contact instance to the database using a promise
  newContact.save()
    .then(() => {
      console.log("Form data saved successfully.");
      // Redirect to the thank-you.html page
      res.redirect('https://vishal-creator-profile.netlify.app/thank-you.html');
    })
    .catch((err) => {
      console.error("Error saving to database:", err);
      res.sendStatus(500);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
