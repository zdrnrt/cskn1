import React from "react";
import { Typography, Button } from "antd";
const { Title } = Typography;
import Tile from "../../Shared/Tile";
import "./Eight.scss";

const financials = [
  {
    title: 'Выручка (по годам)',
    steps: [
      '2025: 128.5 млн ₽',
      '2026: 890.6 млн ₽',
      '2027: 4.134 млрд ₽'
    ]
  },
  {

    title: 'Чистая прибыль (по годам)',
    steps: [
      '2025: 2.8 млн ₽',
      '2026: 431.8 млн ₽',
      '2027: 2.884 млрд ₽'
    ]
  },
  {

    title: 'Рентабельность',
    steps: [
      '2025: 2.2%',
      '2026: 48.5%',
      '2027: 69.8%'
    ]
  }
];

const unit = [
  {

    title: 'B2C направление:',
    steps: [
      'CAC: 300₽',
      'Средний чек: 2,000₽',
      'LTV первичных продаж: 880₽',
      'ROI: 293%',
    ]
  },
  {

    title: 'B2B направление:',
    steps: [
      'CAC: 360₽',
      'Средний чек (квал. лид): 18,000₽',
      'LTV первичных продаж: 4,140₽',
      'ROI: 1150%',
    ]
  }
];

const key = [
  {
    title: 'Операционные показатели',
    steps: [
      'Конверсия в диагностику: 48-70%',
      'Конверсия в B2B: 20-30%',
      'Время обработки заявки: 30 мин',
      'Удовлетворённость клиентов: 95%'
    ]
  },
  {
    title: 'Технологические показатели',
    steps: [
      'Точность AI-диагностики: 95%',
      'Uptime системы: 99.9%',
      'Скорость обработки запроса: <1 сек',
      'Успешность внедрения планов: 50%'
    ]
  }
];


export default function Eight() {
  const financialsList = financials.map( (el, i) => <Tile type="digital" key={i} data={el}/>)
  const unitsList = unit.map( (el, i) => <Tile type="digital" key={i} data={el}/>)
  const keyList = key.map( (el, i) => <Tile type="digital" key={i} data={el}/>)
  return (
    <section className="eight section">
      <div className="container">
      <div className="eight__content">
        <Title level={2} className="subtitle eight__title">Финансовые показатели и ключевые метрики роста</Title>
        <Title level={3} className="part-title eight__part-title">Финансовые прогнозы</Title>
        <div className="eight__list">
          {financialsList}
        </div>
        <Title level={3} className="part-title eight__part-title">Unit-экономика</Title>
        <div className="eight__list">
          {unitsList}
        </div>
        <Title level={3} className="part-title eight__part-title">Ключевые показатели</Title>
        <div className="eight__list">
          {keyList}
        </div>
        <div className="eight__controls">
          <Button type="primary" size="large" href="./files/cskn1-findek.pdf">Скачать финдек</Button></div>

      </div>
      </div>
    </section>
  )
};