import express from 'express';
import { StripeCustomerController } from '../controllers/StripeCustomer.controller';
import { StripeCheckoutSessionController } from '../controllers/StripeCheckoutSession.controller';

const router = express.Router();
const stripeCustomerController = new StripeCustomerController()
const stripeCheckoutSessionController = new StripeCheckoutSessionController()

// Customer
router.post('/create-customer', stripeCustomerController.create)
router.get('/retrieve-customer/:id', stripeCustomerController.get)
router.get('/retrieve-customers', stripeCustomerController.getAll)

// Checkout Session
router.post('/create-checkout-session', stripeCheckoutSessionController.create)

export default router;
