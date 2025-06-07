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
      description: 'размер проблемы в масштабах страны'
    },
    {
      title: '25+ млн',
      description: 'человек в критической долговой ситуации'
    },
    {
      title: '18+ млн',
      description: 'человек регулярно берут микрозаймы '
    },
  {
    title: '3.5 трлн',
    description: '₽ уже на взыскании у банков'
  }
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
      </div>

    </section>
  )
}