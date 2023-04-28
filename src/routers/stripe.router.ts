import express from 'express';
import { StripeController } from '../controllers/stripe.controller';

const router = express.Router();
const stripeController = new StripeController()

router.get('/data', stripeController.get)

export default router;
