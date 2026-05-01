import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Result.module.css';

export default function Cancel() {
  return (
    <>
      <Head>
        <title>Payment Cancelled – Simple Shop</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.icon}>❌</div>
          <h1 className={styles.title}>Payment Cancelled</h1>
          <p className={styles.message}>
            Your payment was cancelled. No charges have been made.
          </p>
          <Link href="/" className={styles.button}>
            Back to Shop
          </Link>
        </div>
      </main>
    </>
  );
}
