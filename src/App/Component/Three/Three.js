import React from "react";
import { Typography, Button } from "antd";
const { Title, Paragraph } = Typography;
import "./Three.scss";
import Tile from "../../Shared/Tile"
import Icons from "../../Icon";

const steps = [
  {
    title: "1. Автоматическая диагностика",
    steps: [
      "AI-анализ финансового состояния.",
      "Оценка кредитной нагрузки.",
      "Выявление первопричин проблем.",
    ],
  },
  {
    title: "2. Персональный план",
    steps: [
      "Разработка стратегии.",
      "Пошаговый алгоритм действий.",
      "Расчет сроков и результатов.",
    ],
  },
  {
    title: "3. Подбор специалистов",
    steps: [
      "Проверенные партнеры.",
      "Оптимальные решения.",
      "Контроль качества услуг.",
    ],
  },
  {
    title: "4. Сопровождение",
    steps: [
      "Мониторинг реализации.",
      "Корректировка плана.",
      "Поддержка 24/7.",
    ],
  },
];

const stack = [
  {
    icon: "brain",
    title: "AI/ML ядро",
    steps: [
      "GPT-агенты для коммуникации",
      "Нейросети для анализа данных",
      "Предиктивная аналитика",
    ],
  },
  {
    icon: "gear",
    title: "Автоматизация",
    steps: [
      "24/7 доступность",
      "Масштабируемость",
      "Минимум человеческого фактора",
    ],
  },
  {
    icon: "shield",
    title: "Безопасность",
    steps: [
      "Шифрование данных",
      "Защита персональной информации",
      "Compliance со всеми требованиями",
    ],
  },
  {
    icon: "dots",
    title: "Интеграции",
    steps: ["CRM-системы", "Платёжные сервисы", "Партнёрский API"],
  },
  {
    icon: "chart",
    title: "Аналитика",
    steps: [
      "Мониторинг метрик",
      "Оптимизация процессов",
      "Data-driven решения",
    ],
  },
  {
    icon: "step",
    title: "Масштабируемость",
    steps: [
      "Cloud-native архитектура",
      "Микросервисы",
      "Балансировка нагрузки",
    ],
  },
];

const unique = [
  {
    icon: "scale",
    title: "Непредвзятость",
    description:
      "Искусственный интеллект анализирует ситуацию  объективно, без эмоций и личной выгоды.",
  },
  {
    icon: "puzzle",
    title: "Системность",
    description:
      "Комплексный подход к решению проблем с учётом  всех факторов и долгосрочных последствий.",
  },
  {
    icon: "segment",
    title: "Масштабируемость",
    description:
      "Неограниченные возможности роста без пропорционального увеличения расходов на персонал.",
  },
];

function Arrow(){
  return (
    <div className="three__arrow">
      <img src={Icons.arrow} alt=""></img>
    </div>
  )
}

export default function Three() {
  const stepsList = [];
  // steps.map( (el, i) => <Tile type="steps" key={i} data={el} />);
  steps.forEach( (el, i) => {
    stepsList.push( <Tile type="steps" key={i} data={el} /> );
    if (i != steps.length - 1){
      stepsList.push( <Arrow key={i + 5} />);
    }
  });
  const stackList = stack.map( (el, i) => <Tile type="steps" key={i} data={el} />);
  const uniqueList = unique.map( (el, i) => <Tile type="steps" key={i} data={el} />);
  return (
    <section className="three section">
      <div className="container">
        <div className="three__content">
          <Title level={2} className="subtitle three__title">
            AI Финансовый Терапевт: революционный подход к решению
          </Title>
          <Title level={3} className="part-title three__part-title">Этапы работы</Title>
          <div className="three__steps">
            {stepsList}
          </div>
          <Title level={3} className="part-title three__part-title">Технологический стек</Title>
          <div className="three__stack">
            {stackList}
          </div>
          <Title level={3} className="part-title three__part-title">Уникальные преимущества</Title>
          <div className="three__stack">
            {uniqueList}
          </div>
          <div className="three__controls">
            <Button type="primary" size="large" href="https://wa.me/message/CG4TEM4HZBQQA1" target="_blank">Задать вопрос</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
