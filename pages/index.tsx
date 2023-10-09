import Layout from "../components/layout";
import Boxes from "../components/boxes";
import Image from "next/image";
import styles from "../styles/about.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Image
          src="/bw.jpeg"
          alt="Image of Nikki"
          width={400}
          height={400}
          className={styles.image}
        ></Image>

        <p className={styles.textbox}>
          Hello, I'm Nikki! Welcome to my in progress website. Very much in
          progress. Please go away if you aren't me.
        </p>
        {/* <Boxes textList={["Hello, this is nikki", "hi"]} /> */}
      </div>
    </Layout>
  );
}
