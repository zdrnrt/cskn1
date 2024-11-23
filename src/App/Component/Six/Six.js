import React from "react";
import { Typography, Button } from "antd";
const { Title } = Typography;
import Tile from "../../Shared/Tile";
import "./Six.scss";

const reality = [
  {
    icon: "camera",
    title: "Описание концепции шоу",
    steps: [
      "Реальные истории людей",
      "Процесс трансформации",
      "Драматургия и обучение",
      "Вирусное распространение",
    ],
  },
  {
    icon: "vector",
    title: "Каналы дистрибуции",
    steps: [
      "YouTube, RuTube, VK Video",
      "Федеральные телеканалы",
      "Стриминговые сервисы",
      "Социальные сети",
    ],
  },
  {
    icon: "target",
    title: "Прогноз охватов",
    steps: [
      "Год 1: 5+ млн просмотров",
      "Год 2: 25+ млн просмотров",
      "Год 3: 100+ млн просмотров",
    ],
  },
];

const digital = [
  {
    title: "Awareness",
    steps: ["Контент-маркетинг", "PR и медиа", "Influencer marketing"],
  },
  {
    title: "Interest",
    steps: ["Экспертный контент", "Case studies", "Социальные доказательства"],
  },
  {
    title: "Consideration",
    steps: ["Персонализированный контент", "Ретаргетинг", "CRM-маркетинг"],
  },
  {
    title: "Action",
    steps: [
      "Триггерные коммуникации",
      "Автоматизированные продажи",
      "Программы лояльности",
    ],
  },
];

const strategy = [
  {
    icon: 'book',
    title: 'Образовательный',
    steps: [
      'Разборы клиентских кейсов',
      'Гайды по личным финансам',
      'Чек-листы и инструкции'
    ]
  },
  {
    icon: 'play',
    title: 'Развлекательный',
    steps: [
      'Истории успеха',
      'Behind the scenes',
      'Интервью с экспертами'
    ]
  },
  {
    icon: 'up',
    title: 'Вовлекающий',
    steps: [
      'Опросы и тесты',
      'Челленджи',
      'UGC-кампании'
    ]
  }
];

const tech = [
  {
    icon: 'toolbox',
    title: 'Инструменты',
    steps: [
      'AI-генерация креативов',
      'Предиктивная аналитика',
      'Персонализация контента',
      'Автоматическая оптимизация'
    ]
  },
  {
    icon: 'check',
    title: 'Ключевые метрики',
    steps: [
      'CAC: 300₽',
      'LTV: 20,000₽',
      'ROI: 460%',
      'Retention: 70%'
    ]
  }
];


export default function Six() {
  const realityList = reality.map( (el, i) => <Tile type="steps" key={i} data={el} />);
  const digitalList = digital.map( (el, i) => <Tile type="digital" key={i} data={el} /> )
  const strategyList = strategy.map( (el, i) => <Tile type="steps" key={i} data={el} /> )
  const techList = tech.map( (el, i) => <Tile type="steps" key={i} data={el} /> )
  return (
    <section className="six section">
      <div className="container">
        <div className="six__content">
        <Title className="subtitle six__title" level={2}> Маркетинговая стратегия: антихрупкая машина лидогенерации </Title>
        <Title className="part-title six__part-title" level={3}>Реалити-шоу «Жизнь в кредит»</Title>
        <div className="six__reality">
          {realityList}
        </div>
        <Title className="part-title six__part-title" level={3}>Digital-стратегия (воронка привлечения)</Title>
        <div className="six__digital">
          {digitalList}
        </div>
        <Title className="part-title six__part-title" level={3}>Контент-стратегия (типы контента)</Title>
        <div className="six__strategy">
          {strategyList}
        </div>
        <Title className="part-title six__part-title" level={3}>Технологии продвижения (AI-powered маркетинг)</Title>
        <div className="six__reality">
          {techList}
        </div>
        <div className="six__controls">
          <Button type="primary" size="large" href="./cskn1-invest-presentation.pdf">Скачать презентацию</Button>
        </div>
        </div>
      </div>
    </section>
  );
}
