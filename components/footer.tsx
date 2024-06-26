import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex gap-x-4 justify-center m-6">
      <div>
        <Link href="mailto:nikkiptaylor2@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </Link>
      </div>
      <div>
        <Link href="https://www.linkedin.com/in/nikki-taylor-319358121/">
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </Link>
      </div>
      <div>
        <Link href="https://github.com/nikkiptaylor">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </Link>
      </div>
    </div>
  );
}
