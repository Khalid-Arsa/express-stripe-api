import { Request, Response, NextFunction } from "express";
import { createCustomer } from "../services/StripeCustomer.service";

export class StripeCustomerController {
  create(req: Request, res: Response, next: NextFunction) {
    return createCustomer(req, res, next);
  }
}
