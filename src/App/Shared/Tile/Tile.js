import React from "react";
import "./Tile.scss";
import Icons from "../../Icon";

function Icon({name}) {
  return (
    <div className="tile__icon">
      <img src={Icons[name]} alt={name}></img>
    </div>
  )
}


export default function Tile(props) {
  const type = props?.type || "default";
  const { title, description, steps, result, icon } = props.data;
  const stepsList = steps && steps.map( (el, i) => <li key={i}>{el}</li>)
  result && stepsList.push(<li><span className="tile__result">Итого:</span> {result}</li>)
  return (
    <div className={`tile tile--${type}`}>
      <div className={icon ? 'tile__title tile__title--icon' : 'tile__title'}>
        {icon && <Icon name={icon}/>}
        {title}
      </div>
      {/* {description && <p className="tile__description" dangerouslySetInnerHTML={description}></p>} */}
      {description && <p className="tile__description" dangerouslySetInnerHTML={{ __html: description }} ></p>}
      {stepsList && <ul className="tile__list">{stepsList}</ul>}
    </div>
  );
}
