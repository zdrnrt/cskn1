import React from "react";
import "./Header.scss"
import { Button, Typography } from 'antd';

export default function Header() {
  return (
    <header className="header">
      <div className="container header__content">
        <Button type="link" href="/" className="header__logo">ЦСКН1</Button>
        <div className="header__controls">
          <Button type="link" size="large" href="./cskn1-invest-presentation.pdf">Скачать презентацию</Button>
          <Button type="primary" size="large" href="https://wa.me/message/CG4TEM4HZBQQA1" target="_blank">Написать основателю</Button>
        </div>
      </div>
    </header>
  )
}