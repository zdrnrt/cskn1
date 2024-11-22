import React from "react";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;
import Tile from "../../Shared/Tile"
import "./Two.scss";

const problem = [
    {
      title: '30.2 трлн ₽',
      description: 'общий долг населения РФ'
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
    title: '3.2 трлн ₽',
    description: 'уже на взыскании у банков'
  }
];

export default function Two(){
  const problemList = problem.map( (el, i) => <Tile key={i} data={el} />);
  return (
    <section className="two section">
      <div className="container">
        <div className="two__content">

        <Title className="subtitle two__title" level={2}>Национальная проблема, которую больше нельзя игнорировать</Title>
        <div className="two__problems">
          {problemList}
        </div>
        <Paragraph className="two__description">
          Долги растут, а существующие решения только усугубляют проблему: банки выдают новые кредиты, МФО — займы под 300% годовых, а юристы продают банкротство. 
        </Paragraph>
        </div>
      </div>

    </section>
  )
}