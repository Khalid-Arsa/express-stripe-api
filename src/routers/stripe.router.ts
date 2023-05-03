import express from 'express';
import { StripeCustomerController } from '../controllers/StripeCustomer.controller';

const router = express.Router();
const stripeCustomerController = new StripeCustomerController()

// Customer
router.post('/create-customer', stripeCustomerController.create)

export default router;
