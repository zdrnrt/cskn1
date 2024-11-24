import React from "react";
import { Typography, Button } from "antd";
const { Title } = Typography;
import Tile from "../../Shared/Tile";
import Icons from "../../Icon";
import "./Five.scss";

const steps = [
  {
    title: "Привлечение (CAC: 300₽)",
    steps: ["Реалити-шоу", "Органический трафик", "Сарафанное радио"],
  },
  {
    title: "Диагностика (2000₽)",
    steps: ["AI-анализ ситуации", "Разработка плана", "Базовые рекомендации"],
  },
  {
    title: "Консультация",
    steps: ["Детальный разбор плана", "Ответы на вопросы", "Выбор стратегии"],
  },
  {
    title: "Реализация",
    steps: ["Подбор специалистов", "Контроль качества", "Сопровождение"],
  },
];

const model = [
  {
    title: "Модель работы",
    icon: 'gear',
    steps: [
      "Оплата за лид (ср. чек 18.000₽)",
      "Квалификация через AI",
      "Гарантия качества",
      "Контроль конверсии",
    ],
  },
  {
    title: "Типы партнеров",
    icon: 'user',
    steps: [
      "Банки и КПК",
      "Юридические компании",
      "Кредитные брокеры",
      "Финансовые консультанты",
    ],
  },
];

const financials = [
  {
    title: "Год 1",
    steps: ["B2C: 45.9 млн ₽", "B2B: 82.6 млн ₽", "Итого: 128.5 млн ₽"],
  },
  {
    title: "Год 2",
    steps: ["B2C: 268.7 млн ₽", "B2B: 621.9 млн ₽", "Итого: 890.6 млн ₽"],
  },
  {
    title: "Год 3",
    steps: ["B2C: 1.117 млрд ₽", "B2B: 3.017 млрд ₽", "Итого: 4.134 млрд ₽"],
  },
  // {
  //   title: "Рост",
  //   steps: ["Год 1: 2.2% ", "Год 2: 48.5%", "Год 3: 69.8%"],
  // },
  {
    title: "Маржинальность",
    steps: [ "2025: 78,47%", "2026: 88М,81%", "2027: 94,08%"],
  },
  {
    title: "Доля рынка",
    steps: ["Год 1: 0,0097%", "Год 2: 0,067%", "Год 3: 0,311%"],
  },
];


function Arrow(){
  return (
    <div className="five__arrow">
      <img src={Icons.arrow} alt=""></img>
    </div>
  )
}

export default function Five() {
  const stepsList = [];
  steps.forEach( (el, i) => {
    stepsList.push( <Tile type="money" key={i} data={el} /> );
    if (i != steps.length - 1){
      stepsList.push( <Arrow key={i+5} />);
    }
  })
  const modelList = model.map( (el, i) => <Tile type="steps" key={i} data={el} />)
  const financialsList = financials.map( (el, i) => <Tile type="financial" key={i} data={el} />)
  return (
    <section className="five section">
      <div className="container">
      <div className="five__content">
        <Title className="subtitle five__title" level={2}>Двойная монетизация: устойчивая модель роста</Title>
        <div className="five__steps">
          {stepsList}
        </div>
        <Title className="part-title five__part-title" level={3}>Партнерская экосистема</Title>
        <div className="five__model">
          {modelList}
        </div>
        <Title className="part-title five__part-title" level={3}>Финансовые показатели</Title>
        <div className="five__financial">
          {financialsList}
        </div>
        <p className="five__target">Цель за 6 лет занять <span className="five__target--marked">10%</span> доли рынка</p>
        <div className="five__controls">
          <Button type="primary" href="https://wa.me/message/CG4TEM4HZBQQA1" target="_blank" size="large">Написать основателю</Button>
        </div>
      </div>
      </div>
    </section>
  );
}
