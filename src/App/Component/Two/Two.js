import React from "react";
import { Typography } from "antd";
const { Title } = Typography;
import Tile from "../../Shared/Tile"


const problemList = [
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
  const problems = problemList.map( (el, i) => <Tile key={i} props={el} />);
  return (
    <div className="two">
      <div className="container two__content">
        <Title>Национальная проблема, которую больше нельзя игнорировать</Title>
        {problems}
        <div>
          Долги растут, а существующие решения только усугубляют проблему: банки выдают новые кредиты, МФО — займы под 300% годовых, а юристы продают банкротство. 
        </div>
      </div>

    </div>
  )
}