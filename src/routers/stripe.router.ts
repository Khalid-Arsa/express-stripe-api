import express from 'express';
import { StripeCustomerController } from '../controllers/StripeCustomer.controller';
import { StripeCheckoutSessionController } from '../controllers/StripeCheckoutSession.controller';

const router = express.Router();
const stripeCustomerController = new StripeCustomerController()
const stripeCheckoutSessionController = new StripeCheckoutSessionController()

// Customer
router.post('/customer', stripeCustomerController.create)
router.get('/customer/:id', stripeCustomerController.get)
router.get('/customer', stripeCustomerController.getAll)
router.delete('/customer/:id', stripeCustomerController.del)

// Checkout Session
router.post('/create-checkout-session', stripeCheckoutSessionController.create)

export default router;
