import express from 'express';
import stripeRoute from './stripe.router';

const router = express.Router();

router.use('/api/stripe', stripeRoute);

export default router;
