import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <Link href="mailto:nikkiptaylor2@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
      <Link href="https://www.linkedin.com/in/nikki-taylor-319358121/">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link href="https://github.com/nikkiptaylor">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </div>
  );
}
