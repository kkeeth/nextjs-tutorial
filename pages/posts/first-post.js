import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <div>
        <Image
          src="/images/yumemi_kuwahara.jpg"
          alt="Yumemi Kuwahara"
          width={400}
          height={600}
        />
      </div>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
};

export default FirstPost;
