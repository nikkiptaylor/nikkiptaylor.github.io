import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";

export default function FunStuff() {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-5">
        <div>
          <Link href="https://monkeymob.com">
            My first website (circa 2008)
          </Link>
        </div>

        <div className="flex flex-col content-center items-center bg-blue-100">
          <div>a gif I made, it's me</div>
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
