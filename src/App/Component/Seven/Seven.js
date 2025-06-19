import React from 'react';
import { Typography, Button } from 'antd';
const { Title } = Typography;
import './Seven.scss';

import t1 from '../../../img/team/t1-2.jpg';
import t2 from '../../../img/team/t2-2.jpg';
import t3 from '../../../img/team/t3-2.jpg';
import t4 from '../../../img/team/t4-2.jpg';
import Icons from '../../Icon';

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
		'3.5 года в кредитной сфере',
	],
	track: {
		'2007-2011': 'Создание и развитие СТО',
		'2011-2012': 'Успешный exit в недвижимости',
		'2013-2016': 'Масштабирование retail-сети',
		'2016-2020': 'Привлечение 370M₽ инвестиций',
		'2020-2023': '5.5х рост в финтех-компании',
	},
};
const team = [
	{
		name: 'Никита Волосков',
		position: 'Head of Design',
		photo: t2,
		skills: [
			'Product Design',
			'5+ лет в дизайне и аналитике',
			'Опыт в проектах Яндекса и Т-Банка',
		],
	},
	{
		name: 'Полина Миллер',
		position: 'CFO и Главный бухгалтер',
		photo: t3,
		skills: [
			'Магистр экономики',
			'10+ лет в финансах',
			'Опыт с оборотом 5+ млрд',
		],
	},
	{
		name: 'Артем Сидоров',
		position: 'CTO',
		photo: t4,
		skills: [
			'8+ лет в разработке',
			'Возглавлял команды разработки в Озон и X5',
			'Успешный опыт разработки сложных AI решений',
		],
	},
	// {
	//   name: 'Евгений Кулаков',
	//   position: 'Руководитель AI/IT разработки',
	//   photo: t3,
	//   skills: [
	//     '11+ лет в IT',
	//     '80+ реализованных проектов',
	//     'Экспертиза в CRM и BI-системах'
	//   ],
	// },
	// {
	//   name: 'Ирина Контарева',
	//   position: 'HR-партнер',
	//   photo: t4,
	//   skills: [
	//     '11+ лет в HR',
	//     'Проектный рекрутинг',
	//     'База IT/AI талантов'
	//   ],
	// }
];

const plan = [
	{
		icon: 'chartGreen',
		title: 'Рост по годам',
		steps: [
			'Год 1: 42 человека',
			'Год 2: 104 человека',
			'Год 3: 575 человек',
		],
	},
	{
		icon: 'growth',
		title: 'Ключевые позиции Q1-Q2',
		steps: [
			'HRD',
			'Product Owner/Lead Architect',
			'CMM',
			'Reelsmaker/Монтажер',
			'PR директор',
			'Юрист-диагност',
			'РОП B2B продаж',
			'COO',
		],
	},
];

function Preview({ props }) {
	return (
		<div className="worker__preview preview">
			<div className="preview__photo">
				<img src={props.photo} alt={props.name}></img>
			</div>
		</div>
	);
}

function Founder({ props }) {
	const skillsList = props.skills.map((el, i) => <li key={i}>{el}</li>);
	const investList = props.invest.map((el, i) => <li key={i}>{el}</li>);
	let trackList = [];
	for (const key in props.track) {
		trackList.push(
			<li key={key}>
				<div className="track__title">{key}</div>
				<div className="track__value">{props.track[key]}</div>
			</li>
		);
	}
	return (
		<div className="seven__worker worker--founder">
			<Preview props={props} />
			<div className="worker__info">
				<div className="profile profile--founder">
					<div className="profile__name">{props.name}</div>
					<div className="profile__position">{props.position}</div>
				</div>
				<div className="profile">
					<div className="profile__title">Ключевые компетенции</div>
					<ol className="profile__list">{skillsList}</ol>
				</div>
				<div className="profile">
					<div className="profile__title">Собственные вложения</div>
					<ol className="profile__list">{investList}</ol>
				</div>
				<div className="profile profile--social">
					<a href="#" className="profile__link">
						<svg
							className="profile__icon"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_255_44627)">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.4301 8.85893C11.263 9.3444 8.93026 10.3492 5.43201 11.8733C4.86395 12.0992 4.56638 12.3202 4.53929 12.5363C4.49351 12.9015 4.95083 13.0453 5.57359 13.2411C5.6583 13.2678 5.74608 13.2954 5.83606 13.3246C6.44876 13.5238 7.27295 13.7568 7.70141 13.766C8.09007 13.7744 8.52385 13.6142 9.00276 13.2853C12.2713 11.079 13.9585 9.96381 14.0644 9.93977C14.1392 9.92281 14.2427 9.90148 14.3129 9.96385C14.3831 10.0262 14.3762 10.1443 14.3687 10.176C14.3234 10.3691 12.5282 12.0381 11.5992 12.9018C11.3096 13.171 11.1042 13.362 11.0622 13.4056C10.9681 13.5033 10.8722 13.5958 10.7801 13.6846C10.2109 14.2333 9.78403 14.6448 10.8037 15.3168C11.2938 15.6397 11.6859 15.9067 12.0771 16.1731C12.5043 16.4641 12.9304 16.7543 13.4817 17.1157C13.6222 17.2077 13.7564 17.3034 13.887 17.3965C14.3842 17.751 14.8309 18.0694 15.3827 18.0186C15.7034 17.9891 16.0346 17.6876 16.2028 16.7884C16.6003 14.6631 17.3817 10.0585 17.5623 8.16097C17.5782 7.99473 17.5583 7.78197 17.5423 7.68857C17.5263 7.59518 17.4929 7.46211 17.3715 7.3636C17.2277 7.24694 17.0058 7.22234 16.9065 7.22408C16.4551 7.23203 15.7627 7.47282 12.4301 8.85893Z"
									fill="#A4A7AE"
								/>
							</g>
							<defs>
								<clipPath id="clip0_255_44627">
									<rect width="24" height="24" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</a>
					<a href="#" className="profile__link">
						<svg
							className="profile__icon"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_255_44629)">
								<path
									d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
									fill="#A4A7AE"
								/>
								<path
									d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
									fill="#A4A7AE"
								/>
								<path
									d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
									fill="#A4A7AE"
								/>
							</g>
							<defs>
								<clipPath id="clip0_255_44629">
									<rect width="24" height="24" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</a>
					<a href="#" className="profile__link">
						<svg
							className="profile__icon"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_255_44628)">
								<path
									d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
									fill="#A4A7AE"
								/>
							</g>
							<defs>
								<clipPath id="clip0_255_44628">
									<rect width="24" height="24" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</a>
				</div>
			</div>
			<div className="worker__info track">
				<div className="profile__title">Track record</div>
				<ul className="track__list">{trackList}</ul>
			</div>
		</div>
	);
}

function Worker({ props }) {
	const skills = props.skills.map((el, i) => <li key={i}>{el}</li>);
	return (
		<div className="seven__worker worker">
			<Preview props={props} />
			<div className="profile profile--worker">
				<div className="profile__name">{props.name}</div>
				<div className="profile__position">{props.position}</div>
			</div>
			<div className="profile">
				<div className="profile__title">Компетенции</div>
				<ol className="profile__list">{skills}</ol>
			</div>
		</div>
	);
}

export default function Seven() {
	const teamList = team.map((el, i) => <Worker key={i} props={el} />);
	/*
  {
		icon: 'chartGreen',
		title: 'Рост по годам',
		steps: [
			'Год 1: 42 человека',
			'Год 2: 104 человека',
			'Год 3: 575 человек',
		],
	},
  */
	const planList = plan.map((el, i) => (
		<div key={i} className="seven-plan">
			<img src={Icons[el.icon]} className="seven-plan__icon" />
			<div className="seven-plan__title">{el.title}</div>
			<ul className="seven-plan__list">
				{el.steps.map((step, i) => (
					<li key={i}>{step}</li>
				))}
			</ul>
		</div>
	));
	return (
		<section className="seven section">
			<div className="container">
				<div className="seven__content">
					<Title level={2} className="subtitle seven__title">
						Команда, создающая будущее антикризисного консалтинга
					</Title>
					<Title level={3} className="part-title seven__part-title">
						Основатель
					</Title>
					<div className="seven__workers founder">
						<Founder props={founder} />
					</div>
					<Title level={3} className="part-title seven__part-title">
						Ключевая команда
					</Title>
					<div className="seven__workers">{teamList}</div>
					<Title level={3} className="part-title seven__part-title">
						План развития команды
					</Title>
					<div className="seven__plans">{planList}</div>
					<div className="seven__controls">
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
		</section>
	);
}
