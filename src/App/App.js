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
  Marketing,
} from "./Component";
import normalize from "normalize.css";
import "./scss/App.scss";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: '"Inter", serif',
          fontSize: 16,
          fontSizeHeading1: 36,
          fontSizeHeading2: 36,
          fontSizeHeading3: 30,
          colorPrimary: '#1570EF',
          colorLink: '#535862',
          colorTextHeading: '#181d27',
          colorLink: '#535862',
          colorLinkHover: '#a4a7ae',
          colorSuccess: '#099250',
          // colorTextSecondary: '#535862'
          colorTextSecondary: 'red',
          colorTextDescription: 'blue',
          lineHeight: 1.2
        },
        components: {
          Typography: {
            titleMarginTop: 0,
            titleMarginBottom: 24,

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
            paddingBlockLG: 12,
            paddingInlineLG: 16,
          }
        },
      }}
    >
      <Header />
      <main className="app">
        <One />
        {/* <Two /> */}
        {/* <Three /> */}
        {/* <Four /> */}
        {/* <Five /> */}
        {/* <Six /> */}
        {/* <Marketing /> */}
        {/* <Seven /> */}
        {/* <Eight /> */}
        <Nine /> 
        {/* form */}
        {/* <Ten /> */}
      </main>
      <Footer />
    </ConfigProvider>
  );
}
