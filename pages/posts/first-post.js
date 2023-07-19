import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default FirstPost;
