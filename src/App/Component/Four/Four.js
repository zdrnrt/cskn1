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
    title: "6.6+ млн",
    description: "выручка без маркетинга",
  },
  {
    title: "1.425 млн",
    description: "затраты на контент маркетинг",
  },
  {
    title: "460%",
    description: "ROI рекламной компании",
  },
];

export default function Four() {
  return (
    <section className="four section">
      <div className="container">
        <div className="four-content">
          <Title level={2} className="subtitle four__title">Все гипотезы подтверждены. <br/>Результаты тестирования</Title>
          <div className="four__results">
            {results.map( (el, i) => <Tile type='results' key={i} data={el} /> )}
          </div>
        </div>
      </div>
    </section>
  );
}
