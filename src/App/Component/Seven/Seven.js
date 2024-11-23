import React from "react";
import { Typography, Button } from "antd";
const { Title } = Typography;
import "./Seven.scss";
import Tile from "../../Shared/Tile";

import t1 from "../../../img/team/t1.jpg"
import t2 from "../../../img/team/t2.jpg"
import t3 from "../../../img/team/t3.jpg"
import t4 from "../../../img/team/t4.jpg"

const founder = {
  name: 'Аркадий Шевченко',
  position: 'Founder & CEO',
  photo: t1,
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
    photo: t2,
    skills: [
      'Магистр экономики',
      '10+ лет в финансах',
      'Опыт с оборотом 5+ млрд'
    ],
  },
  {
    name: 'Евгений Кулаков',
    position: 'Руководитель AI/IT разработки',
    photo: t3,
    skills: [
      '11+ лет в IT',
      '80+ реализованных проектов',
      'Экспертиза в CRM и BI-системах'
    ],
  },
  {
    name: 'Ирина Контарева',
    position: 'HR-партнер',
    photo: t4,
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
  description: 'Ключевые позиции Q1 2025:',
  steps: [
    'Product Owner',
    'Шоураннер',
    'CTO',
    'HRD',
    'CLO',
    'CMO',
  ]
},
{
  title: 'Рост по годам',
  steps: [
    'Год 1: 45-50 человек',
    'Год 2: 60-65 человек',
    'Год 3: 80-90 человек',
  ]
}
];

function Preview ({ props }) {
  return (
    <div className="worker__preview preview">
      <div className="preview__photo">
        <img src={props.photo} alt={props.name}></img>
      </div>
      <div className="preview__info">
        <div className="preview__name">{props.name}</div>
        <div className="preview__position">{props.position}</div>
      </div>
    </div>
  )
}

function Founder({ props }) {
  const skillsList = props.skills.map( (el, i) => (
    <li key={i}>{el}</li>
  ))
  const investList = props.invest.map( (el, i) => (
    <li key={i}>{el}</li>
  ))
  const trackList = props.track.map( (el, i) => (
    <li key={i}>{el}</li>
  ))
  return (
    <div className="seven__worker worker">
      <Preview props={props}/>
      <div>

      <div className="worker__skill skills">
        <div className="worker__title">Ключевые компетенции</div>
        <ol className="skills__list">
          {skillsList}
        </ol>
      </div>
      <div className="worker__invest invest">
        <div className="worker__title">Собственные вложения</div>
        <ol className="invest__list">
          {investList}
        </ol>
      </div>
      </div>
      <div className="worker__track track">
        <div className="worker__title">Track record</div>
        <ul className="track__list">
          {trackList}
        </ul>
      </div>
    </div>
  )
}

function Worker({ props }) {
  const skills = props.skills.map( (el, i) => (
    <li key={i}>{el}</li>
  ))
  return (
    <div className="seven__worker worker">
      <Preview props={props}/>
      <div className="worder__skill skills">
        <div className="worker__title">Компетенции</div>
        <ol className="skills__list">
          {skills}
        </ol>
      </div>
    </div>
  )
}

export default function Seven() {
  const teamList = team.map( (el, i) => <Worker key={i} props={el}/>)
  const planList = plan.map( (el, i) => <Tile type="digital" key={i} data={el}/>)
  return (
    <section className="seven section">
      <div className="container">
      <div className="seven__content">
        <Title level={2} className="subtitle seven__title">Команда, создающая будущее финансового здравоохранения</Title>
      <Title level={3} className="part-title seven__part-title">Основатель</Title>
      <div className="seven__workers founder">
        <Founder props={founder} />
      </div>
      <Title level={3} className="part-title seven__part-title">Ключевая команда</Title>
      <div className="seven__workers">
        {teamList}
      </div>
      <Title level={3} className="part-title seven__part-title">План развития команды</Title>
      <div className="seven__plan">
        {planList}
      </div>
      <div className="seven__controls">
        <Button type="primary" size="large">Задать вопрос</Button></div>
      </div>
      </div>
    </section>
    
  )
};