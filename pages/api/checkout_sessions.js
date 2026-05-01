import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-04-10',
});

const PRODUCTS = {
  basic: {
    name: 'Basic Package',
    description: 'Great starter package for individuals',
    amount: 1000, // $10.00 in cents
    currency: 'usd',
  },
  premium: {
    name: 'Premium Package',
    description: 'Full-featured package for professionals',
    amount: 2000, // $20.00 in cents
    currency: 'usd',
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { productId } = req.body;
  const product = PRODUCTS[productId];

  if (!product) {
    return res.status(400).json({ error: 'Invalid product' });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `https://${req.headers.host}`;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: product.currency,
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message });
  }
}
