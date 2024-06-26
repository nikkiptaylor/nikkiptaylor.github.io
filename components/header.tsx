import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-col content-center md:flex-wrap md:flex-row md:justify-between mx-10 my-8 text-2xl">
      <div className="text-center ">
        <Link href="/">Nikki Taylor</Link>
      </div>

      <div className="flex gap-x-2 justify-center">
        <Link href="/fun-stuff">fun stuff</Link>
        <Link href="/projects">projects</Link>
        <Link href="./Nikki_Taylor_Resume.pdf">resume</Link>
      </div>
    </div>
  );
}
