import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <div>
        <Link href="/">Nikki Taylor</Link>
        <ul>
          <li>
            <Link href="/fun-stuff">fun stuff</Link>
          </li>
          <li>
            <Link href="/projects">projects</Link>
          </li>
          <li>
            <Link href="./Nikki_Taylor_Resume.pdf">resume</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
