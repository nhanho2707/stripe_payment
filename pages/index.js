import Head from 'next/head';
import styles from '../styles/Home.module.css';

const PRODUCTS = [
  {
    id: 'basic',
    name: 'Basic Package',
    description: 'Great starter package for individuals',
    price: 10,
    emoji: '🌱',
  },
  {
    id: 'premium',
    name: 'Premium Package',
    description: 'Full-featured package for professionals',
    price: 20,
    emoji: '🚀',
  },
];

export default function Home() {
  async function handleBuy(product) {
    const res = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: product.id }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      const message = data.error || 'Payment initialization failed. Please try again.';
      console.error('Checkout error:', message);
      alert(message);
    }
  }

  return (
    <>
      <Head>
        <title>Simple Shop – Stripe Payment</title>
        <meta name="description" content="Buy our packages with Stripe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>🛒 Simple Shop</h1>
          <p className={styles.subtitle}>Choose a package and pay securely with Stripe</p>
        </header>

        <section className={styles.grid}>
          {PRODUCTS.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.cardEmoji}>{product.emoji}</div>
              <h2 className={styles.cardTitle}>{product.name}</h2>
              <p className={styles.cardDescription}>{product.description}</p>
              <p className={styles.cardPrice}>${product.price}.00</p>
              <button
                className={styles.buyButton}
                onClick={() => handleBuy(product)}
              >
                Buy Now
              </button>
            </div>
          ))}
        </section>

        <footer className={styles.footer}>
          <p>Secure payments powered by <strong>Stripe</strong> 🔒</p>
        </footer>
      </main>
    </>
  );
}
