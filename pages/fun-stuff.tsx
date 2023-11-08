import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/about.module.css";

export default function FunStuff() {
  return (
    <Layout>
      <div className={styles.verticalContainer}>
        <p>
          <Link href="https://monkeymob.com" className={styles.button}>
            My first website (circa 2008)
          </Link>
        </p>

        <div className={styles.horizontalLine}></div>

        <div className={styles.gifContainer}>
          <p>a gif I made, it's me</p>
          <Image
            src="/surf-cropped.gif"
            alt="Pixel gif of surfer crashing"
            width={400}
            height={300}
            className={styles.gif}
          />
        </div>
      </div>
    </Layout>
  );
}
