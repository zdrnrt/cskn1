import React from "react";
import "./Header.scss"
import { Button, Typography } from 'antd';
const { Link } = Typography;


export default function Header() {
  return (
    <header className="header">
      <div className="container header__content">
        <div>ЦСКН1</div>
        <div>
          <Link>Скачать презентацию</Link>
          <Button type="primary" href="">Написать основателю</Button>
        </div>
      </div>
    </header>
  )
}