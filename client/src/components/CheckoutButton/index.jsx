import React from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutButton = () => {
  const cart = useSelector((state) => state.cart.items);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      console.error("Stripe.js failed to load.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API}/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cart }),
        }
      );

      const { id } = await response.json();

      const { error } = await stripe.redirectToCheckout({
        sessionId: id,
      });

      if (error) {
        console.error("Stripe Checkout Error:", error.message);
      }
    } catch (error) {
      console.error("Checkout failed:", error.message);
    }
  };

  return (
    <button onClick={handleCheckout} className="stripe-checkout-button">
      Checkout
    </button>
  );
};

export default CheckoutButton;
