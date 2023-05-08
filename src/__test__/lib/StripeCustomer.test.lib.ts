import Stripe from "stripe";

export const createStripeCustomerInput: Stripe.CustomerCreateParams = {
  name: "Khalid Sanggoyod",
  email: "khalid@test.com"
}