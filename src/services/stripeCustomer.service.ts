import Stripe from "stripe";

const stripe = new Stripe(
  'sk_test_51N1mlOC8dPvRUIH159PGixF39AEuGX74MWaGOhQHdq1trCSC8vBHdJe9trI04lX1paI8EtQC3tykEvXKk7RxRpdX00XVLFc4q2', 
  { apiVersion: '2022-11-15' }
  );

export async function createCustomer() {
  const params: Stripe.CustomerCreateParams = {
    email: 'khalid2@test.com',
  };

  const customer: Stripe.Customer = await stripe.customers.create(params);

  return {
    message: "Successfully create customer"
  }
}