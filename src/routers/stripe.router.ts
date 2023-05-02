import express from 'express';
import { StripeController } from '../controllers/stripe.controller';

const router = express.Router();
const stripeController = new StripeController()

router.post('/create-customer', stripeController.create)

export default router;
