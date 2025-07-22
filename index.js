
// index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();
const db = admin.firestore();

// Email configuration (example: using Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "yourpassword"
  }
});

exports.paymentWebhook = functions.https.onRequest(async (req, res) => {
  const { phone, amount, product } = req.body;

  try {
    await db.collection("payments").add({ phone, amount, product, paid: true });

    await transporter.sendMail({
      from: "youremail@gmail.com",
      to: "satyam2025kumarjha@gmail.com",
      subject: "New Payment Received",
      text: `Phone: ${phone}
Amount: $${amount}
Product: ${product}`
    });

    res.status(200).send("Payment recorded and email sent.");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Something went wrong.");
  }
});
