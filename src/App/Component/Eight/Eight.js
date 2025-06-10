import React from "react";
import { Typography } from "antd";
import Icons from "../../Icon";
const { Title } = Typography;
import "./Eight.scss";

const unit = [
  {

    title: 'B2C направление:',
    steps: [
      'CAC: 1,017 ₽',
      'Blended CAC: 678 ₽ (с учетом рекомендаций)',
      'Средний чек: 2,200 ',
      'LTV: 7,069 ₽',
    ]
  },
 {
   title: 'B2B направление:',
   steps: [
      'B2B направление:',
      'Средний чек (прямая продажа): 11,000 ₽',
      'Рекомендации: 0,5 × 7,069 = 3,535 ₽',
      'LTV: 14,535 ₽',
      'CAC: 0 ₽ (прямых затрат нет, это конверсия из B2C)',
    ]
  }
];

export default function Eight() {
  return (
    <section className="eight section">
      <div className="container">
        <div className="eight__content">
          <Title level={2} className="subtitle eight__title">Unit-экономика</Title>
          <div className="eight__list">
            {unit.map( (el, i) => (
              <div key={i} className="eight-unit">
                <div className="eight-unit__title">{el.title}</div>
                <ul className="eight-unit__list">
                  {el.steps.map((el, i) => <li key={i}>{el}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="eight__results">
            <h5 className="eight__subtitle">Ключевые выводы:</h5>
            <p className="eight-result">
              <img src={Icons.check2} className="eight-result__icon" />
              B2C работает как мощный lead-магнит для высокомаржинального B2B</p>
            <p className="eight-result">
              <img src={Icons.check2} className="eight-result__icon" />
              Реферальная программа кратно улучшает экономику</p>
            <p className="eight-result">
              <img src={Icons.check2} className="eight-result__icon" />
              Blended CAC снижается благодаря рекомендациям</p>
            <p className="eight-result">
            <img src={Icons.check2} className="eight-result__icon" />
            Настоящая ценность B2C - в конверсии в B2B (47% от LTV)</p>
          </div>
          

        </div>
      </div>
    </section>
  )
};