import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Result.module.css';

export default function Success() {
  return (
    <>
      <Head>
        <title>Payment Successful – Simple Shop</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.icon}>✅</div>
          <h1 className={styles.title}>Payment Successful!</h1>
          <p className={styles.message}>
            Thank you for your purchase. Your order has been confirmed.
          </p>
          <Link href="/" className={styles.button}>
            Back to Shop
          </Link>
        </div>
      </main>
    </>
  );
}
