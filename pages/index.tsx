import Head from "next/head";
import Image from "next/image";
import { Button } from "../src/components/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js + Storybook + Percy</h1>

        <div className={styles.grid}>
          <Button type="primary" size="medium" label="MyButton" />
        </div>
      </main>
    </div>
  );
}
