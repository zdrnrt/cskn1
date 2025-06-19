import React from 'react';
import { Typography, Button } from 'antd';
const { Title } = Typography;
import './Nine.scss';

const stages = [
	{
		start: true,
		title: 'Год 1: запуск и разработка',
		steps: [
			{
				start: true,
				position: 'bottom',
				title: 'Месяц 1-4:',
				steps: [
					'Формирование ключевой <br/>команды',
					'Запуск фабрики <br/>вертикального видео и <br/>консьерж MVP',
					'Калибровка бизнес <br/>процессов',
				],
			},
			{
				position: 'top',
				title: 'Месяц 5-9',
				steps: [
					'Разработка MVP AI-платформы',
					'Старт PR продвижения',
					'Настройка системы операционного <br/>финансового учета',
					'Расширение партнёрской сети',
				],
			},
			{
				position: 'bottom',
				title: 'Месяц 10-12',
				steps: [
					'Релиз MVP AI-платформы',
					'Разработка системы аналитики',
					'Старт производства реалити-<br/>шоу',
					'Старт SEO продвижения',
					'Запуск E-mail/CRM маркетинга',
				],
			},
		],
	},
	{
		title: 'Год 2: масштабирование',
		steps: [
			{
				position: 'top',
				title: 'Месяц 13-18',
				steps: [
					'Разработка базовой версии <br/>AI-платформы',
					'Настройка системы информ. <br/>безопасности',
					'Оптимизация процессов',
				],
			},
			{
				position: 'bottom',
				title: 'Месяц 19-24',
				steps: [
					'Релиз базовой версии AI-платформы',
					'Запуск рекламной воронки',
					'Усиление отдела B2B продаж',
				],
			},
		],
	},
	{
		title: 'Год 3: международная экспансия',
		steps: [
			{
				position: 'bottom',
				title: 'Месяц 25-30',
				steps: [
					'Разработка расширенной версии <br/>AI платформы ',
					'Масштабирование продаж ',
					'Подготовка к выходу в <br/>Казахстан и Беларусь ',
				],
			},
			{
				position: 'top',
				title: 'Месяц 31-36',
				steps: [
					'Релиз расширенной версии <br/>AI платформы',
					'Выход в Казахстан и <br/>Беларусь',
					'Развитие экосистемы',
				],
			},
		],
	},
];

function Stage({ props }) {
	const stepsList = props.steps.map((el, i) => (
		<div key={i} className={'stage-step stage-step--' + el.position + ' ' + (el.start ? 'stage-step--start' : '') }>
			<div className="stage-step__title">{el.title}</div>
			<ul className="stage-step__list">
				{el.steps.map((el, i) => (
					<li key={i} className="stage-step__item">
						&bull; <span dangerouslySetInnerHTML={{ __html: el }}></span>
					</li>
				))}
			</ul>
		</div>
	));
	return (
		<div className={"nine__stage stage " + (props.start ? 'stage--start' : '')} >
			<div className="container">
				<Title level={4} className="stage__title">
					{props.title}
				</Title>
				<div className="stage__list">{stepsList}</div>
			</div>
		</div>
	);
}

export default function Nine() {
	const stagesList = stages.map((el, i) => <Stage key={i} props={el} />);
	return (
		<section className="nine section">
			<div className="_container">
				<div className="nine__content">
					<div className="container">
						<Title level={2} className="subtitle nine__title">
							Этапы развития на 3 года: <br />
							от старта до лидерства
						</Title>
					</div>
					{stagesList}
					<div className="container">
						<div className="nine__controls">
							<Button
								size="large"
								href="https://docs.google.com/spreadsheets/d/1NEAe3V-I57E4UTDDM5yDIrP9ECTtxyktfqydFMAaFrY/edit?usp=sharing"
								target="_blank"
							>
								Посмотреть финмодель
							</Button>
							<Button
								type="primary"
								size="large"
								href="https://wa.me/message/CG4TEM4HZBQQA1"
								target="_blank"
							>
								Написать основателю
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
