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
          colorPrimary: '#1570EF',
          colorLink: '#535862'
        },
        components: {
          Typography: {
            titleMarginTop: 0,
            titleMarginBottom: 24
          },
          Form: {
            verticalLabelPadding: 6,
            itemMarginBottom: 8,
            // labelFontSize: 16,
            fontSize: 16,
            labelColor: '#434343'
          },
          TextArea: {
            itemMarginBottom: 24,
          },
          Button: {
            paddingBlockLG: 8,
            paddingInlineLG: 16,
          }
        },
      }}
    >
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
      <Footer />
    </ConfigProvider>
  );
}
