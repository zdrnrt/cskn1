import React from 'react';
import { Typography, Button } from 'antd';
const { Title } = Typography;
import Tile from '../../Shared/Tile';
import './Six.scss';

const reality = [
	{
		icon: 'camera',
		title: 'Описание концепции шоу',
		steps: [
			'Реальные истории людей',
			'Процесс трансформации',
			'Драматургия и обучение',
			'Вирусное распространение',
		],
	},
	{
		icon: 'vector',
		title: 'Каналы дистрибуции',
		steps: [
			'YouTube, RuTube, VK Video',
			'Федеральные телеканалы',
			'Стриминговые сервисы',
			'Социальные сети',
		],
	},
	{
		icon: 'target',
		title: 'Прогноз охватов',
		steps: [
			'Год 1: 5+ млн просмотров',
			'Год 2: 25+ млн просмотров',
			'Год 3: 100+ млн просмотров',
		],
	},
];

const digital = [
	{
		title: 'Awareness',
		steps: ['Контент-маркетинг', 'PR и медиа', 'Influencer marketing'],
	},
	{
		title: 'Interest',
		steps: [
			'Экспертный контент',
			'Case studies',
			'Социальные доказательства',
		],
	},
	{
		title: 'Consideration',
		steps: ['Персонализированный контент', 'Ретаргетинг', 'CRM-маркетинг'],
	},
	{
		title: 'Action',
		steps: [
			'Триггерные коммуникации',
			'Автоматизированные продажи',
			'Программы лояльности',
		],
	},
];

const strategy = [
	{
		icon: 'book',
		title: 'Образовательный',
		steps: [
			'Разборы клиентских кейсов',
			'Гайды по личным финансам',
			'Чек-листы и инструкции',
		],
	},
	{
		icon: 'play',
		title: 'Развлекательный',
		steps: ['Истории успеха', 'Behind the scenes', 'Интервью с экспертами'],
	},
	{
		icon: 'up',
		title: 'Вовлекающий',
		steps: ['Опросы и тесты', 'Челленджи', 'UGC-кампании'],
	},
];

const tech = [
	{
		icon: 'toolbox',
		title: 'Инструменты',
		steps: [
			'AI-генерация креативов',
			'Предиктивная аналитика',
			'Персонализация контента',
			'Автоматическая оптимизация',
		],
	},
	{
		icon: 'check',
		title: 'Ключевые метрики',
		steps: ['CAC: 300₽', 'LTV: 20,000₽', 'ROI: 460%', 'Retention: 70%'],
	},
];

export default function Six() {
	return (
		<section className="six section">
			<div className="container">
				<div className="six__content">
					<Title level={3} className="part-title six__part-title">
						Прогнозируемые финансовые показатели
					</Title>
					<div className="six__years">
						<div className="six-year">
							<div className="six-year__title">Год 1</div>
							<p className="six-year__item">B2C: 14.1 млн ₽</p>
							<p className="six-year__item">B2B: 16.8 млн ₽</p>
							<p className="six-year__item six-year__item--result">
								Итого: 30.9 млн ₽
							</p>
						</div>
						<div className="six-year">
							<div className="six-year__title">Год 2</div>
							<p className="six-year__item">B2C: 202.3 млн ₽</p>
							<p className="six-year__item">B2B: 344.9 млн ₽</p>
							<p className="six-year__item six-year__item--result">
								Итого: 547.3 млн ₽
							</p>
						</div>
						<div className="six-year">
							<div className="six-year__title">Год 3</div>
							<p className="six-year__item">B2C: 2.095 млрд ₽</p>
							<p className="six-year__item">B2B: 4.904 млрд ₽</p>
							<p className="six-year__item six-year__item--result">
								Итого: 7 млрд ₽
							</p>
						</div>
						<div className="six-year six-year--big">
							<svg
								className="six-year__icon"
								viewBox="0 0 52 58"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13 0.5H37C43.3513 0.5 48.5 5.64873 48.5 12V36C48.5 42.3513 43.3513 47.5 37 47.5H13C6.64873 47.5 1.5 42.3513 1.5 36V12C1.5 5.64873 6.64873 0.5 13 0.5Z"
									fill="white"
								/>
								<path
									d="M13 0.5H37C43.3513 0.5 48.5 5.64873 48.5 12V36C48.5 42.3513 43.3513 47.5 37 47.5H13C6.64873 47.5 1.5 42.3513 1.5 36V12C1.5 5.64873 6.64873 0.5 13 0.5Z"
									stroke="#D5D7DA"
								/>
								<g filter="url(#filter0_dddi_2055_271)">
									<path
										d="M5 12C5 7.58172 8.58172 4 13 4H37C41.4183 4 45 7.58172 45 12V36C45 40.4183 41.4183 44 37 44H13C8.58172 44 5 40.4183 5 36V12Z"
										fill="white"
									/>
									<path
										d="M37 3.5C41.6944 3.5 45.5 7.30558 45.5 12V36C45.5 40.6944 41.6944 44.5 37 44.5H13C8.30558 44.5 4.5 40.6944 4.5 36V12C4.5 7.30558 8.30558 3.5 13 3.5H37Z"
										stroke="black"
										strokeOpacity="0.08"
									/>
									<path
										d="M35 19L27.1314 26.8686C26.7354 27.2646 26.5373 27.4627 26.309 27.5368C26.1082 27.6021 25.8918 27.6021 25.691 27.5368C25.4627 27.4627 25.2646 27.2646 24.8686 26.8686L22.1314 24.1314C21.7354 23.7354 21.5373 23.5373 21.309 23.4632C21.1082 23.3979 20.8918 23.3979 20.691 23.4632C20.4627 23.5373 20.2646 23.7354 19.8686 24.1314L15 29M35 19H28M35 19V26"
										stroke="#414651"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
								<defs>
									<filter
										id="filter0_dddi_2055_271"
										x="0"
										y="1"
										width="52"
										height="57"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood
											floodOpacity="0"
											result="BackgroundImageFix"
										/>
										<feColorMatrix
											in="SourceAlpha"
											type="matrix"
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
											result="hardAlpha"
										/>
										<feOffset dy="1" />
										<feGaussianBlur stdDeviation="1" />
										<feColorMatrix
											type="matrix"
											values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
										/>
										<feBlend
											mode="normal"
											in2="BackgroundImageFix"
											result="effect1_dropShadow_2055_271"
										/>
										<feColorMatrix
											in="SourceAlpha"
											type="matrix"
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
											result="hardAlpha"
										/>
										<feOffset dy="3" />
										<feGaussianBlur stdDeviation="1.5" />
										<feColorMatrix
											type="matrix"
											values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
										/>
										<feBlend
											mode="normal"
											in2="effect1_dropShadow_2055_271"
											result="effect2_dropShadow_2055_271"
										/>
										<feColorMatrix
											in="SourceAlpha"
											type="matrix"
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
											result="hardAlpha"
										/>
										<feOffset dx="1" dy="8" />
										<feGaussianBlur stdDeviation="2.5" />
										<feColorMatrix
											type="matrix"
											values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
										/>
										<feBlend
											mode="normal"
											in2="effect2_dropShadow_2055_271"
											result="effect3_dropShadow_2055_271"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect3_dropShadow_2055_271"
											result="shape"
										/>
										<feColorMatrix
											in="SourceAlpha"
											type="matrix"
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
											result="hardAlpha"
										/>
										<feOffset dy="-2" />
										<feGaussianBlur stdDeviation="1" />
										<feComposite
											in2="hardAlpha"
											operator="arithmetic"
											k2="-1"
											k3="1"
										/>
										<feColorMatrix
											type="matrix"
											values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
										/>
										<feBlend
											mode="normal"
											in2="shape"
											result="effect4_innerShadow_2055_271"
										/>
									</filter>
								</defs>
							</svg>

							<div className="six-year__title">
								Рентабельность по операционной прибыли (EBITDA)
							</div>
							<p className="six-year__item">Год 1: 0%</p>
							<p className="six-year__item">Год 2: 55,85%</p>
							<p className="six-year__item">Год 3: 84,46%</p>
							<p className="six-year__item six-year__item--result"></p>
						</div>
						<div className="six-year six-year--big">
							<svg
								className="six-year__icon"
								viewBox="0 0 52 58"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13 0.5H37C43.3513 0.5 48.5 5.64873 48.5 12V36C48.5 42.3513 43.3513 47.5 37 47.5H13C6.64873 47.5 1.5 42.3513 1.5 36V12C1.5 5.64873 6.64873 0.5 13 0.5Z"
									fill="white"
								/>
								<path
									d="M13 0.5H37C43.3513 0.5 48.5 5.64873 48.5 12V36C48.5 42.3513 43.3513 47.5 37 47.5H13C6.64873 47.5 1.5 42.3513 1.5 36V12C1.5 5.64873 6.64873 0.5 13 0.5Z"
									stroke="#D5D7DA"
								/>
								<g filter="url(#filter0_dddi_2055_771)">
									<path
										d="M5 12C5 7.58172 8.58172 4 13 4H37C41.4183 4 45 7.58172 45 12V36C45 40.4183 41.4183 44 37 44H13C8.58172 44 5 40.4183 5 36V12Z"
										fill="white"
									/>
									<path
										d="M37 3.5C41.6944 3.5 45.5 7.30558 45.5 12V36C45.5 40.6944 41.6944 44.5 37 44.5H13C8.30558 44.5 4.5 40.6944 4.5 36V12C4.5 7.30558 8.30558 3.5 13 3.5H37Z"
										stroke="black"
										strokeOpacity="0.08"
									/>
									<path
										d="M34.2104 27.8901C33.5742 29.3946 32.5792 30.7203 31.3123 31.7514C30.0454 32.7825 28.5452 33.4875 26.9428 33.8048C25.3405 34.1222 23.6848 34.0422 22.1205 33.5719C20.5563 33.1015 19.131 32.2551 17.9694 31.1067C16.8078 29.9583 15.9452 28.5428 15.457 26.984C14.9689 25.4252 14.87 23.7706 15.169 22.1647C15.468 20.5589 16.1559 19.0507 17.1724 17.7721C18.189 16.4935 19.5033 15.4834 21.0004 14.8301M34.2392 20.1732C34.6395 21.1397 34.8851 22.1614 34.9684 23.2009C34.989 23.4577 34.9993 23.5861 34.9483 23.7018C34.9057 23.7984 34.8213 23.8898 34.7284 23.94C34.6172 24.0001 34.4783 24.0001 34.2004 24.0001H25.8004C25.5204 24.0001 25.3804 24.0001 25.2734 23.9456C25.1793 23.8976 25.1028 23.8211 25.0549 23.7271C25.0004 23.6201 25.0004 23.4801 25.0004 23.2001V14.8001C25.0004 14.5222 25.0004 14.3833 25.0605 14.2721C25.1107 14.1791 25.2021 14.0948 25.2987 14.0522C25.4144 14.0012 25.5428 14.0115 25.7996 14.0321C26.839 14.1154 27.8608 14.361 28.8272 14.7613C30.0405 15.2638 31.1429 16.0004 32.0715 16.929C33.0001 17.8576 33.7367 18.96 34.2392 20.1732Z"
										stroke="#414651"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
								<defs>
									<filter
										id="filter0_dddi_2055_771"
										x="0"
										y="1"
										width="52"
										height="57"
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood
											floodOpacity="0"
											result="BackgroundImageFix"
										/>
										<feColorMatrix
											in="SourceAlpha"
											type="matrix"
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
											result="hardAlpha"
										/>
										<feOffset dy="1" />
										<feGaussianBlur stdDeviation="1" />
										<feColorMatrix
											type="matrix"
											values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
										/>
										<feBlend
											mode="normal"
											in2="BackgroundImageFix"
											result="effect1_dropShadow_2055_771"
										/>
										<feColorMatrix
											in="SourceAlpha"
											type="matrix"
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
											result="hardAlpha"
										/>
										<feOffset dy="3" />
										<feGaussianBlur stdDeviation="1.5" />
										<feColorMatrix
											type="matrix"
											values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
										/>
										<feBlend
											mode="normal"
											in2="effect1_dropShadow_2055_771"
											result="effect2_dropShadow_2055_771"
										/>
										<feColorMatrix
											in="SourceAlpha"
											type="matrix"
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
											result="hardAlpha"
										/>
										<feOffset dx="1" dy="8" />
										<feGaussianBlur stdDeviation="2.5" />
										<feColorMatrix
											type="matrix"
											values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
										/>
										<feBlend
											mode="normal"
											in2="effect2_dropShadow_2055_771"
											result="effect3_dropShadow_2055_771"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect3_dropShadow_2055_771"
											result="shape"
										/>
										<feColorMatrix
											in="SourceAlpha"
											type="matrix"
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
											result="hardAlpha"
										/>
										<feOffset dy="-2" />
										<feGaussianBlur stdDeviation="1" />
										<feComposite
											in2="hardAlpha"
											operator="arithmetic"
											k2="-1"
											k3="1"
										/>
										<feColorMatrix
											type="matrix"
											values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
										/>
										<feBlend
											mode="normal"
											in2="shape"
											result="effect4_innerShadow_2055_771"
										/>
									</filter>
								</defs>
							</svg>

							<div className="six-year__title">Доля рынка</div>
							<p className="six-year__item">Год 1: 0,06%</p>
							<p className="six-year__item">Год 2: 0,99%</p>
							<p className="six-year__item">Год 3: 12,63%</p>
							<p className="six-year__item six-year__item--result"></p>
						</div>
					</div>
          <h4 className='six__subtitle'>
Цель за 6 лет занять <span className='six__subtitle--green'>20%</span> доли рынка
          </h4>
          <div className="six__controls">
                    <Button size="large" href="./files/cskn1-invest-presentation.pdf">Посмотреть финмодель</Button>
                    <Button type="primary" size="large" href="https://wa.me/message/CG4TEM4HZBQQA1" target="_blank">Написать основателю</Button>
                  </div>
				</div>
			</div>
		</section>
	);
}
