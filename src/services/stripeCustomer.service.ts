import Stripe from "stripe";
import { config } from "../config";

const stripe = new Stripe(config.secret as string, {
  apiVersion: "2022-11-15",
  typescript: true,
});

export async function createCustomer() {
  const params: Stripe.CustomerCreateParams = {
    email: "khalid5@test.com",
  };

  const customer: Stripe.Customer = await stripe.customers.create(params);

  return {
    message: "Successfully create customer",
  };
}
