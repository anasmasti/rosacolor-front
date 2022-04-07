import Layout from "../components/layout/Layout";
import "../styles/globals.scss";
import '../components/home/blogCards/blogCards.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
