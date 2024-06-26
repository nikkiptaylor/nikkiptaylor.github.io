import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";

export default function FunStuff() {
  return (
    <Layout>
      <div>
        <p>
          <Link href="https://monkeymob.com">
            My first website (circa 2008)
          </Link>
        </p>

        <div></div>

        <div>
          <p>a gif I made, it's me</p>
          <Image
            src="/surf-cropped.gif"
            alt="Pixel gif of surfer crashing"
            width={400}
            height={300}
          />
        </div>
      </div>
    </Layout>
  );
}
