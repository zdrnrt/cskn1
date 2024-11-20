import React from "react";
import { Typography, Button } from "antd";
const { Title } = Typography;
import Tile from "../../Shared/Tile"

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
    title: "6.6+ м,лн ₽ ",
    description: "выручка без маркетинга",
  },
  {
    title: "1,425 ,млн ₽ ",
    description: "затраты на контент маркетинг",
  },
  {
    title: "460%",
    description: "ROI рекламной компании",
  },
];

export default function Four() {
  const resultsList = results.map( (el, i) => <Tile key={i} props={el} /> )
  return (
    <div className="four">
      <div className="container four-content">
        <Title level={2}>Результаты тестирования: гипотезы подтверждены</Title>
        {resultsList}
      </div>
    </div>
  );
}
