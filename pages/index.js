import Head from "next/head";
import React, { useEffect, useReducer, useState } from "react";
import styles from "../styles/Home.module.scss";
import { fetchFakePostes } from "../services/fake-posts/fetchFakePostes";
import useSWR from "swr";
import { fetcher } from "../services/helper/fetcher";

function reducer(state, { type }) {
  switch (type) {
    case "joke":
      return {
        ...state,
        name: "Ghoza",
      };
    case "not a joke":
      return {
        ...state,
        name: "Rozacolor",
      };
    default:
      return {
        ...state,
        name: "",
      };
  }
}

export default function Home() {
  let initState = {
    name: "",
  };
  const [state, dispatch] = useReducer(reducer, initState);
  const [loanding, setLoading] = useState(true);
  const { data } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      dispatch({ type: "joke" });
    }, 2000);
    // fetchFakePostes();
  }, []);

  function sayHello() {
    return (
      <h1 className={styles.title}>
        Welcome to <a href="#">{state.name}.</a>
      </h1>
    );
  }

  if (loanding)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );

  return (
    <div className={styles.container}>
      <Head>
        <title>Rosacolor</title>
        <meta name="description" content="Rosacolor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {sayHello()}
        <div>
          {data.map((post, index) => {
            return <h3 key={index}>{post.title}</h3>;
          })}
        </div>
      </main>
    </div>
  );
}
