import Link from "next/link";
import Image from "next/image";
import Head from "next/image";

export default function primerPost() {
  return (
    <div>
      <Head></Head>
      <h1>Mi Primer Post</h1>
      <Image
        src="/img/1.jpg"
        width={600}
        height={600}
        alt="Mi imagen conimage"
      ></Image>
      <Link href="/">Volver al Inicio</Link>
    </div>
  );
}
