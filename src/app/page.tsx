import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image src="/peepo.jpg" alt="Peepo" width={500} height={400} priority />
        <h1 className={styles.title}>Under construction</h1>
      </main>
    </div>
  );
}
