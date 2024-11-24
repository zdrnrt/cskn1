import React from "react";
import { Button, Typography } from "antd";
const { Title, Paragraph } = Typography;
import Tile from "../../Shared/Tile";
import macPic from "../../../img/mac.jpg";
import "./One.scss";

const plusesList = [
  {
    title: '25+ млн',
    description: 'потенциальных клиентов'
  },
  { 
    title: '55%',
    description: 'конверсия в первые продажи'
  },
  { 
    title: '460%',
    description: 'ROI тестовой кампании'
  },
];

export default function One(){
  const pluses = plusesList.map( (el, i) => <Tile key={i} data={el} />)
  return (
    <section className="one section">
      <div className="container">
        <div className="one__content">

        <Title level={1} className="one__title">ЦСКН1 — первый в мире AI-powered финансовый терапевт</Title>
        <Paragraph className="one__description">Создаём новую индустрию на рынке в 14.5 трлн рублей с ежегодным ростом 15%</Paragraph>
        <div className="one__video video">
          <div className="video__content">
            <iframe className="video__iframe" src="https://www.youtube.com/embed/eqlNOi6KDig?si=mFMwDc6-TkFoctkr" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <img src={macPic} alt="mac" className="video__mac"></img>
        </div>
        <div className="one__pluses">{pluses}</div>
        <div className="one__controls">
          <Button size="large" href="./files/cskn1-invest-presentation.pdf">Скачать презентацию</Button>
          <Button type="primary" size="large" href="https://wa.me/message/CG4TEM4HZBQQA1" target="_blank">Написать основателю</Button>
        </div>
        </div>
      </div>
    </section>
  )
}