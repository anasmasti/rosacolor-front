import Head from "next/head";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../services/helper/fetcher";
import Home from "./home/home.jsx";

export default function index() {
  const [loanding, setLoading] = useState(true);
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loanding)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );

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
