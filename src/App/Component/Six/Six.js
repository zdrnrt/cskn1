import React from "react";
import { Typography, Button } from "antd";
const { Title } = Typography;

const reality = [
  {
    title: "Описание концепции шоу",
    steps: [
      "Реальные истории людей",
      "Процесс трансформации",
      "Драматургия и обучение",
      "Вирусное распространение",
    ],
  },
  {
    title: "Каналы дистрибуции",
    steps: [
      "YouTube, RuTube, VK Video",
      "Федеральные телеканалы",
      "Стриминговые сервисы",
      "Социальные сети",
    ],
  },
  {
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
    title: 'Образовательный',
    steps: [
      'Разборы клиентских кейсов',
      'Гайды по личным финансам',
      'Чек-листы и инструкции'
    ]
  },
  {
    title: 'Развлекательный',
    steps: [
      'Истории успеха',
      'Behind the scenes',
      'Интервью с экспертами'
    ]
  },
  {
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

    title: 'Инструменты',
    steps: [
      'AI-генерация креативов',
      'Предиктивная аналитика',
      'Персонализация контента',
      'Автоматическая оптимизация'
    ]
  },
  {

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
  return (
    <div className="six">
      <div className="container six__content">
        <Title level={2}>
          Маркетинговая стратегия: антихрупкая машина лидогенерации
        </Title>
        <Title level={3}>Реалити-шоу «Жизнь в кредит»</Title>
        <Title level={3}>Digital-стратегия (воронка привлечения)</Title>
        <Title level={3}>Контент-стратегия (типы контента)</Title>
        <Title level={3}>Технологии продвижения (AI-powered маркетинг)</Title>
        <div>
          <Button>Скачать презентацию</Button>
        </div>
      </div>
    </div>
  );
}
