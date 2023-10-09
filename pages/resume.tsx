import Layout from "../components/layout";
import styles from "../styles/resume.module.css";
import Image from "next/image";

export default function Resume() {
  return (
    <Layout>
      <div className={styles.resumeDownload}>
        <a href="./nikki_resume_09_11_2023_eng.pdf" className={styles.resume}>
          Download resume here!
        </a>
      </div>

      <div className={styles.tldr}>
        <h1> Tldr;</h1>

        <ul>
          <li>
            <span className={styles.italic}>Currently</span>, Machine Learning
            Engineer at Headspace (since November 2021). Started out building
            models for clinical applications, then focused on ML Platform and
            Ops.
          </li>
          <li>
            <span className={styles.italic}>Previously</span>, Graduate Student
            Researcher in ML for pharmacogenmics. Collab with in vivo research
            lab and Merck to identify genes and pathways related to Nonalcoholic
            Steatohepatitis. Worked half time from June 2020-June 2021 while
            doing my Masters in Biomedical Informatics.
          </li>
          <li>
            <span className={styles.italic}>Previously previously</span>,
            undergrad researcher in a number of labs - served as a great way to
            explore different areas of science and health to find my interests.
            Including - Mental health informatics lab and department of health
            policy and research at weill cornell, human performance lab, center
            for neuroscience and pain lab, systems neuroscience and pain lab.
          </li>
          <li>Graduated from Stanny in 2020</li>
          <li>
            Enjoys too many physically active hobbies (climbing, surfing,
            gymnastics, running). Trying to become a better home hobbyer. Loves
            gaming.
          </li>
          <li>Loves volunteering and working with people</li>
        </ul>
      </div>

      <div className={styles.gifContainer}>
        <p>
          Congrats if you made it this far. Here is a homemade gif, just for
          you.
        </p>
        <Image
          src="/surf-cropped.gif"
          alt="Pixel gif of surfer crashing"
          width={400}
          height={300}
          className={styles.gif}
        />
      </div>
    </Layout>
  );
}
