import { Request, Response, NextFunction } from "express";
import Stripe from "stripe";
import { config } from "../config";

const stripe = new Stripe(config.secret as string, {
  apiVersion: "2022-11-15",
});

export async function createCustomer(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, name } = req.body;
  const params: Stripe.CustomerCreateParams = {
    name: name,
    email: email,
  };

  const customer: Stripe.Customer = await stripe.customers.create(params);

  return res.status(200).json({
    success: true,
    message: "Successfully created customer",
    customerId: customer.id,
  });
}

export async function retrieveCustomer(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  const customer: Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer> =
    await stripe.customers.retrieve(id);

  return res.status(200).json({
    success: true,
    message: "Successfully retrieve customer",
    customer
  });
}
