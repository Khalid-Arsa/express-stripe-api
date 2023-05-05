import Stripe from "stripe";

const succ_url = "http://localhost:1338/api/stripe/create-checkout-session/success";
const can_url = "http://localhost:1338/api/stripe/create-checkout-session/cancel";

export const createStripeCheckoutSessionInput: Stripe.Checkout.SessionCreateParams = {
  success_url: succ_url,
  cancel_url: can_url, 
  mode: "payment",
  line_items: [
    {
      price_data: {
        currency: "php",
        product_data: {
          name: "Bag Classic Uno",
        },
        unit_amount: 9000 * 100,
      },
      quantity: 1,
    },
  ],
  payment_method_types: ["card"]
}
