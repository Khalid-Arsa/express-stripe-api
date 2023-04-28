import { getStripe } from "../services/stripe.service";

export class StripeController {
  get() {
    return getStripe();
  }
}