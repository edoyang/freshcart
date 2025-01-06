const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Your Stripe Secret Key

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  const { cart } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cart.map((item) => ({
        price_data: {
          currency: "usd", // Adjust currency as needed
          product_data: {
            name: item.name,
            images: [`${process.env.CLIENT_URL}${item.image}`], // Add your base URL
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/#/success`,
      cancel_url: `${process.env.CLIENT_URL}/#`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Error creating Stripe Checkout Session:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
