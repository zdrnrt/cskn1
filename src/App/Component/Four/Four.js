import React from "react";
import { Typography, Button } from "antd";
const { Title } = Typography;
import Tile from "../../Shared/Tile";
import "./Four.scss";

const results = [
  {
    title: "1500+",
    description: "заявок за 2 месяца",
  },
  {
    title: "55%",
    description: "конверсия в оплату диагностики",
  },
  {
    title: "35%",
    description: "конверсия в B2B продажи",
  },
  {
    title: "6.6+ млн ₽",
    description: "выручка без маркетинга",
  },
  {
    title: "1,425 млн ₽",
    description: "затраты на контент маркетинг",
  },
  {
    title: "460%",
    description: "ROI рекламной компании",
  },
];

export default function Four() {
  const resultsList = results.map( (el, i) => <Tile key={i} data={el} /> )
  return (
    <section className="four section">
      <div className="container">
        <div className="four-content">
          <Title level={2} className="subtitle four__title">Результаты тестирования: гипотезы подтверждены</Title>
          <div className="four__results">
            {resultsList}
        </div>
        <div className="four__controls">
          <Button type="primary" size="large" href="./files/cskn1-short-teaser.pdf">Скачать краткий тизер</Button>
        </div>
        </div>
      </div>
    </section>
  );
}
