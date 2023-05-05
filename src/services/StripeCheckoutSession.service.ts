import { Request, Response, NextFunction } from "express";
import Stripe from "stripe";
import { config } from "../config";

const stripe = new Stripe(config.secret as string, {
  apiVersion: "2022-11-15",
});

const succ_url = "http://localhost:1338/api/stripe/create-checkout-session/success";
const can_url = "http://localhost:1338/api/stripe/create-checkout-session/cancel";

export async function stripeCreateCheckoutSession(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { product } = req.body;
  const params: Stripe.Checkout.SessionCreateParams = {
    success_url: succ_url,
    cancel_url: can_url, 
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "php",
          product_data: {
            name: product.name,
          },
          unit_amount: product.price * 100,
        },
        quantity: product.quantity,
      },
    ],
    payment_method_types: ["card"]
  }

  const checkout: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);

  return res.status(200).json({
    success: true,
    message: "Successfully create checkout",
    checkoutId: checkout.id
  })
}
