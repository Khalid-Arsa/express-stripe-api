import { createCustomer } from "../services/stripeCustomer.service";

export class StripeController {
  create() {
    return createCustomer();
  }
}
