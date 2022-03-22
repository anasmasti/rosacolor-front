import Head from "next/head";
import { useEffect, useReducer } from "react";
import styles from "../styles/Home.module.scss";

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

  useEffect(() => {
    dispatch({ type: "joke" });
  });

  function sayHello() {
    return (
      <h1 className={styles.title}>
        Welcome to <a href="#">{state.name}.</a>
      </h1>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rosacolor</title>
        <meta name="description" content="Rosacolor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{sayHello()}</main>
    </div>
  );
}
