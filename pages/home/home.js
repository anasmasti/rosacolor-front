import React from "react";

export default function Home() {
  function throwTrueIfItsJoke(something) {
    if (something == "Joke") return true;
    if (something != "Joke") return false;
  }
  return <div>home page</div>;
}
