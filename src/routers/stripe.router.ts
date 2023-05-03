import express from 'express';
import { StripeCustomerController } from '../controllers/StripeCustomer.controller';
import { StripeCheckoutSessionController } from '../controllers/StripeCheckoutSession.controller';

const router = express.Router();
const stripeCustomerController = new StripeCustomerController()
const stripeCheckoutSessionController = new StripeCheckoutSessionController()

// Customer
router.post('/create-customer', stripeCustomerController.create)

// Checkout Session
router.post('/create-checkout-session', stripeCheckoutSessionController.create)

export default router;
