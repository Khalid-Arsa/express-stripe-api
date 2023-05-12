import { Request, Response, NextFunction } from "express";
import { createCustomer, findAllCustomer, findCustomer } from "../services/stripeCustomer.service";

export class StripeCustomerController {
  create(req: Request, res: Response, next: NextFunction) {
    return createCustomer(req, res, next);
  }

  get(req: Request, res: Response, next: NextFunction) {
    return findCustomer(req, res, next)
  }

  getAll(req: Request, res: Response, next: NextFunction) {
    return findAllCustomer(req, res, next)
  }
}
