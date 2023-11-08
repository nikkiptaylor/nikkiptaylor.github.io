import Layout from "@/components/layout";
import TimelineContent from "@/components/timelineContent";
import Image from "next/image";
import styles from "@/styles/about.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.horizontalContainer}>
        <Image
          src="/bw.jpeg"
          alt="Image of Nikki"
          width={400}
          height={400}
          className={styles.image}
        ></Image>

        <p className={styles.textbox}>
          Hello, I'm Nikki! Welcome to my in progress website. Very much in
          progress.
          <span style={{ color: "red" }}>Please go away if you aren't me.</span>
        </p>
      </div>

      <div className={styles.verticalContainer}>
        <h2 className={styles.subtitle}>About Me</h2>

        <ul>
          <li className={styles.timelineContent}>
            I'm currently a Machine Learning Engineer at Headspace (since
            November 2021). I started out building models for clinical
            applications. Since early 2022, I've been on the ML platform team
            managing infrastructure and workflows for ML Ops.
          </li>

          <div className={styles.horizontalLine}></div>

          <li className={styles.timelineContent}>
            Previously, I was a Graduate Student Researcher in ML for
            pharmacogenmics at the Helix Group at Stanford. We collaborated with
            an in vivo research lab and Merck to identify genes and pathways
            related to Nonalcoholic Steatohepatitis. I worked half time from
            June 2020-June 2021 while completing my Masters in Biomedical
            Informatics."
          </li>

          <div className={styles.horizontalLine}></div>

          <li className={styles.timelineContent}>
            Before that, I was an undergrad researcher in a number of labs,
            which served as a great way to explore different areas of science
            and health to find my interests. This included the Mental Health
            Informatics Lab and Department of Health Policy and Research at
            Weill Cornell Medical College, and the Human Performance Lab, the
            Center for Neuroscience and Pain Lab, and the Systems Neuroscience
            and Pain Lab.
          </li>

          <div className={styles.horizontalLine}></div>

          <li className={styles.timelineContent}>
            I graduated from good old Stanny in 2020. During a worldwide
            pandemic!
          </li>

          <div className={styles.horizontalLine}></div>

          <li className={styles.timelineContent}>
            I enjoy too many physically active hobbies (climbing, surfing,
            gymnastics, running). I'm trying to become a better home hobbyer
            (especially with gaming).
          </li>

          <div className={styles.horizontalLine}></div>

          <li className={styles.timelineContent}>
            I love volunteering and working with people
          </li>
        </ul>
      </div>
    </Layout>
  );
}
