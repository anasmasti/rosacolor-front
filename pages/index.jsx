import Head from "next/head";
import Home from "../components/home";

export default function index() {
  return (
    <div>
      <Head>
        <title>Rosacolor</title>
        <meta name="description" content="Rosacolor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
