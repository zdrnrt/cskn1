import React from "react";
import ReactDom from "react-dom";
import { ConfigProvider } from "antd";
import {
  Header,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Footer,
} from "./Component";
import normalize from "normalize.css";
import "./scss/App.scss";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: '"Inter", serif',
        },
        components: {
          Typography: {
            titleMarginTop: 0,
          },
          Switch: {
            colorPrimary: "#ff4c2b",
            colorPrimaryHover: "#ff785f",
            colorTextQuaternary: "#1677ff",
            colorTextTertiary: "#4096ff",
          },
        },
      }}
    >
      <Header />
      <main className="app">
        <One />
        <Two />
        <Three />
        {/* 
        <Four />
        <Five />
        <Six />
        <Seven />
        <Eight />
        <Nine /> 
        <Ten />
        */}
      </main>
      {/* <Footer /> */}
    </ConfigProvider>
  );
}
