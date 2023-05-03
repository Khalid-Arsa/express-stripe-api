import { Request, Response, NextFunction } from 'express';
import Stripe from "stripe";
import { config } from "../config";

const stripe = new Stripe(config.secret as string, {
  apiVersion: "2022-11-15",
});

export async function createCustomer(req: Request, res: Response, next: NextFunction) {
  const params: Stripe.CustomerCreateParams = {
    email: "khalid2@test.com",
  };

  const customer: Stripe.Customer = await stripe.customers.create(params);

  return res.status(200).json({
    message: "Successfully created customer",
    customer
  })
}
