import Layout from "../components/layout/Layout";
import "../styles/globals.scss";
import '../components/home/blogCards/blogCards.css';
import '../components/home/mainslider/Slider.css'
import { Component } from "react";

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
