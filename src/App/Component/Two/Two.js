import React from "react";
import { List, Typography } from "antd";
const { Title, Paragraph } = Typography;
import Tile from "../../Shared/Tile"
import "./Two.scss";
import Icon from '../../Icon'

const problem = [
    {
      title: '34 трлн',
      description: '₽ общий долг населения РФ'
    },

    {
      title: '25% ВВП',
      description: 'размер проблемы <br/>в масштабах страны'
    },
    {
      title: '25+ млн',
      description: 'человек <br/>в критической ситуации'
    },
    {
      title: '18+ млн',
      description: 'человек регулярно <br/>берут микрозаймы '
    },
  {
    title: '3.5 трлн',
    description: '₽ уже на взыскании у банков'
  }
];

const problem2 = [
    {
      title: '20%',
      description: 'ежегодный рост затрат на <br/>привлечение клиентов'
    },
    {
      title: '15%',
      description: 'ежегодный рост нецелевых <br/>обращений'
    },
    {
      title: 'Ср. 4%',
      description: 'снижение конверсии <br/>в продажи'
    },
    {
      title: '9 тыс руб',
      description: 'высокая стоимость стоимость <br/>клиентов'
    },
];

export default function Two(){
  const problemList = problem.map( (el, i) => <Tile key={i} data={el} />);
  return (
    <section className="two section">
      <div className="container">
        <div className="two__content">
          <img src={Icon.attention} className="two__title-icon" />
          <Title className="subtitle two__title" level={2}>Проблема B2C: <br/>Запредельно высокая долговая нагрузка</Title>
          <div className="two__problems">
            {problemList}
          </div>
          <Paragraph className="two__description">
            Долги растут как снежный ком, а существующие игроки только усугубляют проблему:
          </Paragraph>
          <ol className="two__list">
            <li className="two__list-item">Банки агрессивно продают кредиты</li>
            <li className="two__list-item">МФО — займы под 300% годовых</li>
            <li className="two__list-item">Юристы — сразу банкротство</li>
          </ol>
        </div>

        <img src={Icon.attention} className="two__title-icon" />
        <Title className="subtitle two__title" level={2}>Проблема B2C: <br/>Поступательное снижение рентабельности</Title>
        <div className="two__problems two__problems--2">
          {problem2.map( (el, i) => <Tile key={i} data={el} />)}
        </div>
        <Paragraph className="two__description">
            Рост стоимости привлечения клиентов + падение конверсии = <span className="two__description--marked">ежегодное снижение рентабельности</span>
            <br/>
            <br/>
          </Paragraph>

      </div>

    </section>
  )
}