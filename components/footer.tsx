import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import styles from "@/styles/footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <Link href="mailto:nikkiptaylor2@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </Link>
        <Link href="https://www.linkedin.com/in/nikki-taylor-319358121/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Link>
        <Link href="https://github.com/nikkiptaylor">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
      </div>
    </footer>
  );
}
