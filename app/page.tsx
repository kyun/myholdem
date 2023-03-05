import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Card from "~/src/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={styles.section}>
        <Card />
        <Card />
      </div>
      <div className={styles.bottom}>
        <span>
          <b>Win Rate:</b>
        </span>
      </div>
    </main>
  );
}
