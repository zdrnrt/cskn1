import React from "react";
import { Typography, Button } from "antd";
const { Title } = Typography;

const founder = {
  name: 'Аркадий Шевченко',
  position: 'Founder & CEO',
  photo: '',
  skills: [
    '15+ лет в бизнесе',
    'Успешные exits',
    'Экспертиза в финтехе',
    '5.5х рост последнего проекта',
  ],
  invest: [
    '10+ млн личных инвестиций',
    '10,000+ часов исследований',
    '3.5 года в кредитной сфере'
  ],
  track: [
    '2007-2011: Создание и развитие СТО',
    '2011-2012: Успешный exit в недвижимости',
    '2013-2016: Масштабирование retail-сети',
    '2016-2020: Привлечение 370M₽ инвестиций',
    '2020-2023: 5.5х рост в финтех-компании',
  ]
}
const team = [
  {
    name: 'Полина Миллер',
    position: 'CFO и Главный бухгалтер',
    photo: '',
    skills: [
      'Магистр экономики',
      '10+ лет в финансах',
      'Опыт с оборотом 5+ млрд'
    ],
  },
  {
    name: 'Евгений Кулаков',
    position: 'Руководитель AI/IT разработки',
    photo: '',
    skills: [
    '11+ лет в IT',
    '80+ реализованных проектов',
    'Экспертиза в CRM и BI-системах'
    ],
  },
  {
    name: 'Ирина Контарева',
    position: 'HR-партнер',
    photo: '',
    skills: [
'11+ лет в HR',
'Проектный рекрутинг',
'База IT/AI талантов'
    ],
  }
];

const plan = [
  {
  title: 'Прогноз роста команды',
  desciption: 'Ключевые позиции Q1 2025:',
  steps: [
    'Product Owner',
    'Шоураннер',
    'CTO',
    'HRD',
    'CLO',
    'CMO',
  ]
}, {
  title: 'Рост по годам',
  steps: [
    'Год 1: 45-50 человек',
    'Год 2: 60-65 человек',
    'Год 3: 80-90 человек',
  ]
}
];

export default function Seven() {
  return (
    <section className="seven">
      <div className="container seevn__content">
        <Title level={2}>Команда, создающая будущее финансового здравоохранения</Title>
      </div>
      <div><Button>Задать вопрос</Button></div>
    </section>
    
  )
};