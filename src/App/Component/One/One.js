import React from "react";
import { Button, Typography } from "antd";
const { Title, Paragraph, Text } = Typography;
import Tile from "../../Shared/Tile";
import macPic from "../../../img/mac.png";
import "./One.scss";

const plusesList = [
  {
    title: '25+',
    description: 'млн потенциальных клиентов'
  },
  { 
    title: '15%',
    description: 'ежегодный рост рынка'
  }
];

export default function One(){
  const pluses = plusesList.map( (el, i) => <Tile key={i} data={el} type='results' />)
  return (
    <section className="one section">
      <div className="container">
        <Title level={1} className="one__title">AI-powered «Финансовый Терапевт» — первая в мире система диагностики и лечения проблем с кредитами и долгами</Title>
        <div className="one__content">

        <div className="one__video">
          <div className="video">
            <div className="video__content">
              {/* <iframe className="video__iframe" src="https://www.youtube.com/embed/eqlNOi6KDig?si=mFMwDc6-TkFoctkr" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
              <iframe className="video__iframe" src="https://rutube.ru/play/embed/07e5f61d853ba24fd5cedd136a5ed7e9/" frameBorder="0" allow="clipboard-write; autoplay" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
            </div>
            <img src={macPic} alt="mac" className="video__mac"></img>
          </div>
        </div>
        <div className="one__description">
          <Paragraph type='secondary' className="one__text">Создаём индустрию антикризисного <br/>консалтинга для физлиц на рынке объемом<br/> 14.5 трлн рублей</Paragraph>
          <div className="one__pluses">{pluses}</div>
          </div>
        </div>
        <div className="one__controls">
          <Button size="large" href="./files/cskn1-invest-presentation.pdf">Скачать презентацию</Button>
          <Button type="primary" size="large" href="https://wa.me/message/CG4TEM4HZBQQA1" target="_blank">Написать основателю</Button>
        </div>
      </div>
    </section>
  )
}