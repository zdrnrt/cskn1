import React, { useEffect } from "react";
import "./Header.scss"
import { Button, Typography } from 'antd';

export default function Header() {
  useEffect(function () {
    const header = document.querySelector('.header');
    const headerHeight = header.getBoundingClientRect().height;
    function headerFixing(e) {
      if (window.scrollY > headerHeight){
        document.body.style.paddingTop = `${headerHeight}px`;
        header.classList.add('header--fixed');
      } else {
        document.body.style.paddingTop = 0;
        header.classList.remove('header--fixed');
      }
    }

    document.addEventListener('scroll', headerFixing);
    return () => document.removeEventListener('scroll', headerFixing);
  }, [])
  return (
    <header className="header">
      <div className="container header__content">
        <Button type="link" href="/" className="header__logo">ЦСКН1</Button>
        <div className="header__controls">
          <Button type="link" size="large" href="https://cskn1.ru/">Страница продукта</Button>
          <Button type="link" size="large" href="./files/cskn1-invest-presentation.pdf">Скачать презентацию</Button>
          <Button type="primary" size="large" href="https://wa.me/message/CG4TEM4HZBQQA1" target="_blank">Написать основателю</Button>
        </div>
      </div>
    </header>
  )
}