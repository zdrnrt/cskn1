import React, { useEffect } from "react";
import "./Header.scss"
import { Button, ConfigProvider } from 'antd';
import logo from './assets/logo.svg'
import Icons from '../../Icon'

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
        {/* <Button type="link" href="/" className="header__logo">ЦСКН1</Button> */}
        <Button type="link" href="/" className="header__logo">
          <img src={logo} className="header__logo-pic"  />
        </Button>
        <div className="header__controls">
          <Button type="link" size="large" href="https://cskn1.ru/" icon={<img src={Icons.linkArrow} />} iconPosition="end">Перейти на страницу продукта</Button>
          <Button type="link" size="large" href="./files/cskn1-invest-presentation.pdf" icon={<img src={Icons.linkDownload} />} iconPosition="end">Скачать презентацию</Button>
          <Button type="primary" size="large" href="https://wa.me/message/CG4TEM4HZBQQA1" target="_blank">Написать основателю</Button>
        </div>
      </div>
    </header>
  )
}