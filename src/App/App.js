import React from "react";
import ReactDom from "react-dom";
import {Header, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten} from "./Component";
import normalize from "normalize.css"
import "./scss/app.scss"
// let {Header} = Component;
// console.log(Header);
export default function App() {
  return (
    <>
      <Header />
      <main className="app">
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
        <Seven />
        <Eight />
        <Nine />
        <Ten />
      </main>
    </>
  )
}