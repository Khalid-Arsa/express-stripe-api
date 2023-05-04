import Stripe from "stripe";

export const createStripeCustomerInput: Stripe.CustomerCreateParams = {
  email: "khalid@test.com"
}