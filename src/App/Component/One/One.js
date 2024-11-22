import React from "react";
import { Button, Typography } from "antd";
const { Title, Paragraph } = Typography;
import Tile from "../../Shared/Tile"
import macPic from "../../../img/mac.jpg"

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
  const pluses = plusesList.map( (el, i) => <Tile key={i} props={el} />)
  console.log(pluses);
  return (
    <div className="one">
      <div className="container one__content">
        <Title className="one__title">ЦСКН1 — первый в мире AI-powered финансовый терапевт</Title>
        <Paragraph>Создаём новую индустрию на рынке в 14.5 трлн рублей с ежегодным ростом 15%</Paragraph>
        <div>{pluses}</div>
        <div className="one__video video">
          <iframe class="video__iframe"></iframe>
          <img src={macPic} alt="mac"></img>
        </div>
        <div>
          <Button>Скачать презентацию</Button>
          <Button>Написать основателю</Button>
        </div>
      </div>
    </div>
  )
}