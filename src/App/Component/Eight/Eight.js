import React from "react";
import { Typography, Button } from "antd";
const { Title } = Typography;

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
      'LTV: 20,000₽',
      'ROI: 460%',
    ]
  },
  {

    title: 'B2B направление:',
    steps: [
      
      'CAC: 1,500₽',
      'Средний чек: 18,000₽',
      'LTV: 180,000₽',
      'ROI: 850%',
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
  return (
    <section className="eight">
      <div className="container eight__content">
        <Title level={2}>Финансовые показатели и ключевые метрики роста</Title>
        <Title level={3}>Финансовые прогнозы</Title>
        <Title level={3}>Unit-экономика</Title>
        <Title level={3}>Ключевые показатели</Title>
        <div><Button>Скачать финдек</Button></div>

      </div>
    </section>
  )
};