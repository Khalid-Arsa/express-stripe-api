import { Request, Response, NextFunction } from "express";
import { stripeCreateCheckoutSession } from "../services/StripeCheckoutSession.service";

export class StripeCheckoutSessionController {
  create(req: Request, res: Response, next: NextFunction) {
    return stripeCreateCheckoutSession(req, res, next);
  }
}