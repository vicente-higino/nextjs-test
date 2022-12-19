import Head from 'next/head';

import styles from '@/styles/Home.module.css';
import { GetServerSideProps } from 'next';

export default function Home({ id }: { id: number }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`${id}`}</title>
        <meta name="description" content={`the id number is ${id}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{id}</h1>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );
  return {
    props: { id: Math.floor(Math.random() * 1000) }, // will be passed to the page component as props
  };
};
