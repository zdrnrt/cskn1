import React from 'react';
import { Typography, Button } from 'antd';
const { Title } = Typography;
import './Marketing.scss';
import macPic from '../../../img/mac.png';
import * as motion from 'motion/react-client';

export default function Marketing() {
	return (
		<section className="marketing section">
			<div className="container">
				<div className="marketing__content">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{
							once: true,
							amount: 0.2, // Срабатывает когда 20% элемента видно
						}}
					>
						<Title className="subtitle marketing__title" level={2}>
							Антихрупкая машина лидогенерации, <br />в основе
							которой фабрика вертикального видео и собственное
							реалити-шоу <br />
							«Жизнь в кредит»
						</Title>
						<div className="marketing__plans">
							<div className="marketing-plan">
								<div className="marketing-plan__icon">
									<svg
										width="22"
										height="21"
										className="marketing-plan__pic"
										viewBox="0 0 22 21"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 7.37722C1 7.0269 1 6.85174 1.01462 6.70421C1.1556 5.28127 2.28127 4.1556 3.70421 4.01462C3.85174 4 4.03636 4 4.40558 4C4.54785 4 4.61899 4 4.67939 3.99634C5.45061 3.94963 6.12595 3.46288 6.41414 2.746C6.43671 2.68986 6.45781 2.62657 6.5 2.5C6.54219 2.37343 6.56329 2.31014 6.58586 2.254C6.87405 1.53712 7.54939 1.05037 8.32061 1.00366C8.38101 1 8.44772 1 8.58114 1H13.4189C13.5523 1 13.619 1 13.6794 1.00366C14.4506 1.05037 15.126 1.53712 15.4141 2.254C15.4367 2.31014 15.4578 2.37343 15.5 2.5C15.5422 2.62657 15.5633 2.68986 15.5859 2.746C15.874 3.46288 16.5494 3.94963 17.3206 3.99634C17.381 4 17.4521 4 17.5944 4C17.9636 4 18.1483 4 18.2958 4.01462C19.7187 4.1556 20.8444 5.28127 20.9854 6.70421C21 6.85174 21 7.0269 21 7.37722V15.2C21 16.8802 21 17.7202 20.673 18.362C20.3854 18.9265 19.9265 19.3854 19.362 19.673C18.7202 20 17.8802 20 16.2 20H5.8C4.11984 20 3.27976 20 2.63803 19.673C2.07354 19.3854 1.6146 18.9265 1.32698 18.362C1 17.7202 1 16.8802 1 15.2V7.37722Z"
											stroke="#1570EF"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M11 15.5C13.2091 15.5 15 13.7091 15 11.5C15 9.29086 13.2091 7.5 11 7.5C8.79086 7.5 7 9.29086 7 11.5C7 13.7091 8.79086 15.5 11 15.5Z"
											stroke="#1570EF"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className="marketing-plan__title">
									Описание концепции шоу
								</div>
								<ul className="marketing-plan__list">
									<li className="marketing-plan__item">
										Реальные истории людей
									</li>
									<li className="marketing-plan__item">
										Наглядность работы Финансового Терапевта
									</li>
									<li className="marketing-plan__item">
										Драматургия и трансформация
									</li>
									<li className="marketing-plan__item">
										Вирусное распространение
									</li>
								</ul>
							</div>
							<div className="marketing-plan">
								<div className="marketing-plan__icon">
									<svg
										className="marketing-plan__pic"
										width="22"
										height="20"
										viewBox="0 0 22 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7 19H15M11 15V19M5.8 15H16.2C17.8802 15 18.7202 15 19.362 14.673C19.9265 14.3854 20.3854 13.9265 20.673 13.362C21 12.7202 21 11.8802 21 10.2V5.8C21 4.11984 21 3.27976 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.7202 1 17.8802 1 16.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V10.2C1 11.8802 1 12.7202 1.32698 13.362C1.6146 13.9265 2.07354 14.3854 2.63803 14.673C3.27976 15 4.11984 15 5.8 15Z"
											stroke="#1570EF"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className="marketing-plan__title">
									Каналы дистрибуции
								</div>
								<ul className="marketing-plan__list">
									<li className="marketing-plan__item">
										YouTube, TikTok, Дзен, VK Video
									</li>
									<li className="marketing-plan__item">
										Федеральные телеканалы
									</li>
									<li className="marketing-plan__item">
										Стриминговые сервисы
									</li>
									<li className="marketing-plan__item">
										Социальные сети
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{
							once: true,
							amount: 0.2, // Срабатывает когда 20% элемента видно
						}}
					>
						<Title
							level={3}
							className="part-title marketing__part-title"
						>
							Digital-стратегия (воронка привлечения)
						</Title>
						<div className="marketing__strategy">
							<div className="marketing-step">
								<div className="marketing-step__title">
									1. Awareness
								</div>
								<div className="marketing-step__item">
									<svg
										className="marketing-step__icon"
										viewBox="0 0 27 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.24992 13.0002L11.7499 16.5002L18.7499 9.50016M25.1666 13.0002C25.1666 19.4435 19.9432 24.6668 13.4999 24.6668C7.0566 24.6668 1.83325 19.4435 1.83325 13.0002C1.83325 6.55684 7.0566 1.3335 13.4999 1.3335C19.9432 1.3335 25.1666 6.55684 25.1666 13.0002Z"
											stroke="#1570EF"
											strokeWidth="2.33333"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="marketing-step__text">
										Контент-маркетинг
									</p>
								</div>
								<div className="marketing-step__item">
									<svg
										className="marketing-step__icon"
										viewBox="0 0 27 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.24992 13.0002L11.7499 16.5002L18.7499 9.50016M25.1666 13.0002C25.1666 19.4435 19.9432 24.6668 13.4999 24.6668C7.0566 24.6668 1.83325 19.4435 1.83325 13.0002C1.83325 6.55684 7.0566 1.3335 13.4999 1.3335C19.9432 1.3335 25.1666 6.55684 25.1666 13.0002Z"
											stroke="#1570EF"
											strokeWidth="2.33333"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="marketing-step__text">
										PR и медиа
									</p>
								</div>
								<div className="marketing-step__item">
									<svg
										className="marketing-step__icon"
										viewBox="0 0 27 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.24992 13.0002L11.7499 16.5002L18.7499 9.50016M25.1666 13.0002C25.1666 19.4435 19.9432 24.6668 13.4999 24.6668C7.0566 24.6668 1.83325 19.4435 1.83325 13.0002C1.83325 6.55684 7.0566 1.3335 13.4999 1.3335C19.9432 1.3335 25.1666 6.55684 25.1666 13.0002Z"
											stroke="#1570EF"
											strokeWidth="2.33333"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="marketing-step__text">
										Influencer marketing
									</p>
								</div>
							</div>
							<div className="marketing-step">
								<div className="marketing-step__title">
									2. Interest
								</div>
								<div className="marketing-step__item">
									<svg
										className="marketing-step__icon"
										viewBox="0 0 27 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.24992 13.0002L11.7499 16.5002L18.7499 9.50016M25.1666 13.0002C25.1666 19.4435 19.9432 24.6668 13.4999 24.6668C7.0566 24.6668 1.83325 19.4435 1.83325 13.0002C1.83325 6.55684 7.0566 1.3335 13.4999 1.3335C19.9432 1.3335 25.1666 6.55684 25.1666 13.0002Z"
											stroke="#1570EF"
											strokeWidth="2.33333"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="marketing-step__text">
										Экспертный контент
									</p>
								</div>
								<div className="marketing-step__item">
									<svg
										className="marketing-step__icon"
										viewBox="0 0 27 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.24992 13.0002L11.7499 16.5002L18.7499 9.50016M25.1666 13.0002C25.1666 19.4435 19.9432 24.6668 13.4999 24.6668C7.0566 24.6668 1.83325 19.4435 1.83325 13.0002C1.83325 6.55684 7.0566 1.3335 13.4999 1.3335C19.9432 1.3335 25.1666 6.55684 25.1666 13.0002Z"
											stroke="#1570EF"
											strokeWidth="2.33333"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="marketing-step__text">
										Case studies
									</p>
								</div>
								<div className="marketing-step__item">
									<svg
										className="marketing-step__icon"
										viewBox="0 0 27 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.24992 13.0002L11.7499 16.5002L18.7499 9.50016M25.1666 13.0002C25.1666 19.4435 19.9432 24.6668 13.4999 24.6668C7.0566 24.6668 1.83325 19.4435 1.83325 13.0002C1.83325 6.55684 7.0566 1.3335 13.4999 1.3335C19.9432 1.3335 25.1666 6.55684 25.1666 13.0002Z"
											stroke="#1570EF"
											strokeWidth="2.33333"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="marketing-step__text">
										Социальные доказательства
									</p>
								</div>
							</div>
							<div className="marketing-step">
								<div className="marketing-step__title">
									3. Consideration
								</div>
								<div className="marketing-step__item">
									<svg
										className="marketing-step__icon"
										viewBox="0 0 27 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.24992 13.0002L11.7499 16.5002L18.7499 9.50016M25.1666 13.0002C25.1666 19.4435 19.9432 24.6668 13.4999 24.6668C7.0566 24.6668 1.83325 19.4435 1.83325 13.0002C1.83325 6.55684 7.0566 1.3335 13.4999 1.3335C19.9432 1.3335 25.1666 6.55684 25.1666 13.0002Z"
											stroke="#1570EF"
											strokeWidth="2.33333"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="marketing-step__text">
										Персонализированный контент
									</p>
								</div>
								<div className="marketing-step__item">
									<svg
										className="marketing-step__icon"
										viewBox="0 0 27 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.24992 13.0002L11.7499 16.5002L18.7499 9.50016M25.1666 13.0002C25.1666 19.4435 19.9432 24.6668 13.4999 24.6668C7.0566 24.6668 1.83325 19.4435 1.83325 13.0002C1.83325 6.55684 7.0566 1.3335 13.4999 1.3335C19.9432 1.3335 25.1666 6.55684 25.1666 13.0002Z"
											stroke="#1570EF"
											strokeWidth="2.33333"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="marketing-step__text">
										Ретаргетинг
									</p>
								</div>
								<div className="marketing-step__item">
									<svg
										className="marketing-step__icon"
										viewBox="0 0 27 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.24992 13.0002L11.7499 16.5002L18.7499 9.50016M25.1666 13.0002C25.1666 19.4435 19.9432 24.6668 13.4999 24.6668C7.0566 24.6668 1.83325 19.4435 1.83325 13.0002C1.83325 6.55684 7.0566 1.3335 13.4999 1.3335C19.9432 1.3335 25.1666 6.55684 25.1666 13.0002Z"
											stroke="#1570EF"
											strokeWidth="2.33333"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="marketing-step__text">
										CRM-маркетинг
									</p>
								</div>
							</div>
							<div className="marketing-step">
								<div className="marketing-step__title">
									4. Action
								</div>
								<div className="marketing-step__item">
									<svg
										className="marketing-step__icon"
										viewBox="0 0 27 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.24992 13.0002L11.7499 16.5002L18.7499 9.50016M25.1666 13.0002C25.1666 19.4435 19.9432 24.6668 13.4999 24.6668C7.0566 24.6668 1.83325 19.4435 1.83325 13.0002C1.83325 6.55684 7.0566 1.3335 13.4999 1.3335C19.9432 1.3335 25.1666 6.55684 25.1666 13.0002Z"
											stroke="#1570EF"
											strokeWidth="2.33333"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="marketing-step__text">
										Триггерные коммуникации
									</p>
								</div>
								<div className="marketing-step__item">
									<svg
										className="marketing-step__icon"
										viewBox="0 0 27 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.24992 13.0002L11.7499 16.5002L18.7499 9.50016M25.1666 13.0002C25.1666 19.4435 19.9432 24.6668 13.4999 24.6668C7.0566 24.6668 1.83325 19.4435 1.83325 13.0002C1.83325 6.55684 7.0566 1.3335 13.4999 1.3335C19.9432 1.3335 25.1666 6.55684 25.1666 13.0002Z"
											stroke="#1570EF"
											strokeWidth="2.33333"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="marketing-step__text">
										Автоматизированные продажи
									</p>
								</div>
								<div className="marketing-step__item">
									<svg
										className="marketing-step__icon"
										viewBox="0 0 27 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.24992 13.0002L11.7499 16.5002L18.7499 9.50016M25.1666 13.0002C25.1666 19.4435 19.9432 24.6668 13.4999 24.6668C7.0566 24.6668 1.83325 19.4435 1.83325 13.0002C1.83325 6.55684 7.0566 1.3335 13.4999 1.3335C19.9432 1.3335 25.1666 6.55684 25.1666 13.0002Z"
											stroke="#1570EF"
											strokeWidth="2.33333"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<p className="marketing-step__text">
										Программы лояльности
									</p>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{
							once: true,
							amount: 0.2, // Срабатывает когда 20% элемента видно
						}}
					>
						<Title
							level={3}
							className="part-title marketing__part-title"
							style={{
								marginBottom: '4rem',
							}}
						>
							Контент-стратегия (типы контента)
						</Title>
						<div className="marketing__types">
							<div className="marketing-type">
								<svg
									className="marketing-type__icon"
									viewBox="0 0 52 52"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g filter="url(#filter0_dii_2057_1102)">
										<rect
											x="2"
											y="1"
											width="48"
											height="48"
											rx="10"
											fill="white"
										/>
										<rect
											x="2.5"
											y="1.5"
											width="47"
											height="47"
											rx="9.5"
											stroke="#D5D7DA"
										/>
										<path
											d="M31 27.4996V24.494C31 24.3145 31 24.2248 30.9727 24.1456C30.9485 24.0755 30.9091 24.0117 30.8572 23.9587C30.7986 23.8989 30.7183 23.8587 30.5578 23.7785L26 21.4996M18 22.4996V29.3062C18 29.6781 18 29.8641 18.058 30.0269C18.1093 30.1708 18.1929 30.3011 18.3024 30.4077C18.4262 30.5283 18.5953 30.6057 18.9334 30.7607L25.3334 33.694C25.5786 33.8064 25.7012 33.8626 25.8289 33.8848C25.9421 33.9045 26.0579 33.9045 26.1711 33.8848C26.2988 33.8626 26.4214 33.8064 26.6666 33.694L33.0666 30.7607C33.4047 30.6057 33.5738 30.5283 33.6976 30.4077C33.8071 30.3011 33.8907 30.1708 33.942 30.0269C34 29.8641 34 29.6781 34 29.3062V22.4996M16 21.4996L25.6422 16.6785C25.7734 16.6129 25.839 16.5801 25.9078 16.5672C25.9687 16.5557 26.0313 16.5557 26.0922 16.5672C26.161 16.5801 26.2266 16.6129 26.3578 16.6785L36 21.4996L26.3578 26.3207C26.2266 26.3863 26.161 26.4191 26.0922 26.432C26.0313 26.4434 25.9687 26.4434 25.9078 26.432C25.839 26.4191 25.7734 26.3863 25.6422 26.3207L16 21.4996Z"
											stroke="#1570EF"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</g>
									<defs>
										<filter
											id="filter0_dii_2057_1102"
											x="0"
											y="0"
											width="52"
											height="52"
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
												values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0705882 0 0 0 0.05 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_2057_1102"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_2057_1102"
												result="shape"
											/>
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="-2" />
											<feComposite
												in2="hardAlpha"
												operator="arithmetic"
												k2="-1"
												k3="1"
											/>
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
											/>
											<feBlend
												mode="normal"
												in2="shape"
												result="effect2_innerShadow_2057_1102"
											/>
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feMorphology
												radius="1"
												operator="erode"
												in="SourceAlpha"
												result="effect3_innerShadow_2057_1102"
											/>
											<feOffset />
											<feComposite
												in2="hardAlpha"
												operator="arithmetic"
												k2="-1"
												k3="1"
											/>
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0"
											/>
											<feBlend
												mode="normal"
												in2="effect2_innerShadow_2057_1102"
												result="effect3_innerShadow_2057_1102"
											/>
										</filter>
									</defs>
								</svg>

								<div className="marketing-type__title">
									Образовательный
								</div>
								<p className="marketing-type__item">
									&bull; Разборы клиентских кейсов
								</p>
								<p className="marketing-type__item">
									&bull; Гайды по личным финансам
								</p>
								<p className="marketing-type__item">
									&bull; Чек-листы и инструкции
								</p>
							</div>
							<div className="marketing-type">
								<svg
									className="marketing-type__icon"
									viewBox="0 0 52 52"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g filter="url(#filter0_dii_433_837)">
										<rect
											x="2"
											y="1"
											width="48"
											height="48"
											rx="10"
											fill="white"
										/>
										<rect
											x="2.5"
											y="1.5"
											width="47"
											height="47"
											rx="9.5"
											stroke="#D5D7DA"
										/>
										<path
											d="M19 17.9895C19 17.0183 19 16.5328 19.2025 16.2651C19.3789 16.0319 19.6485 15.8876 19.9404 15.8702C20.2754 15.8502 20.6795 16.1195 21.4875 16.6582L32.0031 23.6686C32.6708 24.1137 33.0046 24.3363 33.1209 24.6168C33.2227 24.8621 33.2227 25.1377 33.1209 25.383C33.0046 25.6635 32.6708 25.886 32.0031 26.3312L21.4875 33.3415C20.6795 33.8802 20.2754 34.1496 19.9404 34.1296C19.6485 34.1122 19.3789 33.9679 19.2025 33.7347C19 33.467 19 32.9814 19 32.0103V17.9895Z"
											stroke="#1570EF"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</g>
									<defs>
										<filter
											id="filter0_dii_433_837"
											x="0"
											y="0"
											width="52"
											height="52"
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
												values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0705882 0 0 0 0.05 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_433_837"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_433_837"
												result="shape"
											/>
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="-2" />
											<feComposite
												in2="hardAlpha"
												operator="arithmetic"
												k2="-1"
												k3="1"
											/>
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
											/>
											<feBlend
												mode="normal"
												in2="shape"
												result="effect2_innerShadow_433_837"
											/>
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feMorphology
												radius="1"
												operator="erode"
												in="SourceAlpha"
												result="effect3_innerShadow_433_837"
											/>
											<feOffset />
											<feComposite
												in2="hardAlpha"
												operator="arithmetic"
												k2="-1"
												k3="1"
											/>
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0"
											/>
											<feBlend
												mode="normal"
												in2="effect2_innerShadow_433_837"
												result="effect3_innerShadow_433_837"
											/>
										</filter>
									</defs>
								</svg>

								<div className="marketing-type__title">
									Развлекательный
								</div>
								<p className="marketing-type__item">
									&bull; Истории успеха
								</p>
								<p className="marketing-type__item">
									&bull; Behind the scenes
								</p>
								<p className="marketing-type__item">
									&bull; Интервью с экспертами
								</p>
							</div>
							<div className="marketing-type">
								<svg
									className="marketing-type__icon"
									viewBox="0 0 52 52"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g filter="url(#filter0_dii_433_865)">
										<rect
											x="2"
											y="1"
											width="48"
											height="48"
											rx="10"
											fill="white"
										/>
										<rect
											x="2.5"
											y="1.5"
											width="47"
											height="47"
											rx="9.5"
											stroke="#D5D7DA"
										/>
										<path
											d="M34.9996 24.5C34.9996 29.1944 31.194 33 26.4996 33C25.4228 33 24.3928 32.7998 23.4448 32.4345C23.2714 32.3678 23.1848 32.3344 23.1159 32.3185C23.0481 32.3029 22.999 32.2963 22.9295 32.2937C22.8588 32.291 22.7813 32.299 22.6262 32.315L17.5052 32.8444C17.0169 32.8948 16.7728 32.9201 16.6288 32.8322C16.5034 32.7557 16.4179 32.6279 16.3952 32.4828C16.3691 32.3161 16.4857 32.1002 16.7191 31.6684L18.3547 28.6408C18.4894 28.3915 18.5568 28.2668 18.5873 28.1469C18.6174 28.0286 18.6247 27.9432 18.6151 27.8214C18.6053 27.6981 18.5512 27.5376 18.443 27.2166C18.1555 26.3636 17.9996 25.45 17.9996 24.5C17.9996 19.8056 21.8052 16 26.4996 16C31.194 16 34.9996 19.8056 34.9996 24.5Z"
											stroke="#1570EF"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</g>
									<defs>
										<filter
											id="filter0_dii_433_865"
											x="0"
											y="0"
											width="52"
											height="52"
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
												values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0705882 0 0 0 0.05 0"
											/>
											<feBlend
												mode="normal"
												in2="BackgroundImageFix"
												result="effect1_dropShadow_433_865"
											/>
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="effect1_dropShadow_433_865"
												result="shape"
											/>
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feOffset dy="-2" />
											<feComposite
												in2="hardAlpha"
												operator="arithmetic"
												k2="-1"
												k3="1"
											/>
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
											/>
											<feBlend
												mode="normal"
												in2="shape"
												result="effect2_innerShadow_433_865"
											/>
											<feColorMatrix
												in="SourceAlpha"
												type="matrix"
												values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												result="hardAlpha"
											/>
											<feMorphology
												radius="1"
												operator="erode"
												in="SourceAlpha"
												result="effect3_innerShadow_433_865"
											/>
											<feOffset />
											<feComposite
												in2="hardAlpha"
												operator="arithmetic"
												k2="-1"
												k3="1"
											/>
											<feColorMatrix
												type="matrix"
												values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.18 0"
											/>
											<feBlend
												mode="normal"
												in2="effect2_innerShadow_433_865"
												result="effect3_innerShadow_433_865"
											/>
										</filter>
									</defs>
								</svg>

								<div className="marketing-type__title">
									Вовлекающий
								</div>
								<p className="marketing-type__item">
									&bull; Опросы и тесты
								</p>
								<p className="marketing-type__item">
									&bull; Челленджи
								</p>
								<p className="marketing-type__item">
									&bull; UGC-кампании
								</p>
							</div>
						</div>
						<Title
							level={3}
							className="part-title marketing__part-title marketing__part-title--founder"
						>
							Основатель проекта «Финансовый Терапевт» <br />
							Аркадий Шевченко о потенциале проекта
						</Title>
						<div className="marketing__video">
							<div className="video">
								<div className="video__content">
									<iframe
										className="video__iframe"
										src="https://rutube.ru/play/embed/3aeee59afd4cbbcf1376ecdfab9f4fcb/"
										frameBorder="0"
										allow="clipboard-write; autoplay"
										webkitallowfullscreen="true"
										mozallowfullscreen="true"
										allowFullScreen
									></iframe>
									{/* <iframe
									className="video__iframe"
									src="https://www.youtube.com/embed/eqlNOi6KDig?si=mFMwDc6-TkFoctkr"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								></iframe> */}
								</div>
								<img
									src={macPic}
									alt="mac"
									className="video__mac"
								></img>
							</div>
						</div>
						<div className="marketing__controls">
							<Button
								size="large"
								href="./files/cskn1-invest-presentation.pdf"
							>
								Скачать презентацию
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
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{
							once: true,
							amount: 0.2, // Срабатывает когда 20% элемента видно
						}}
					>
						<Title
							level={3}
							className="part-title marketing__part-title"
						>
							AI-powered маркетинг: <br />
							технологии и показатели эффективности
						</Title>
						<div className="marketing__tools">
							<div className="marketing-tool">
								<svg
									className="marketing-tool__icon"
									viewBox="0 0 56 56"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="4"
										y="4"
										width="48"
										height="48"
										rx="24"
										fill="#D1E9FF"
									/>
									<rect
										x="4"
										y="4"
										width="48"
										height="48"
										rx="24"
										stroke="#EFF8FF"
										strokeWidth="8"
									/>
									<path
										d="M22 22L26.5 26.5M22 22H19L18 19L19 18L22 19V22ZM35.259 18.741L32.6314 21.3686C32.2354 21.7646 32.0373 21.9627 31.9632 22.191C31.8979 22.3918 31.8979 22.6082 31.9632 22.809C32.0373 23.0373 32.2354 23.2354 32.6314 23.6314L32.8686 23.8686C33.2646 24.2646 33.4627 24.4627 33.691 24.5368C33.8918 24.6021 34.1082 24.6021 34.309 24.5368C34.5373 24.4627 34.7354 24.2646 35.1314 23.8686L37.5893 21.4107C37.854 22.0549 38 22.7604 38 23.5C38 26.5376 35.5376 29 32.5 29C32.1338 29 31.7759 28.9642 31.4298 28.8959C30.9436 28.8001 30.7005 28.7521 30.5532 28.7668C30.3965 28.7824 30.3193 28.8059 30.1805 28.8802C30.0499 28.9501 29.919 29.081 29.657 29.343L22.5 36.5C21.6716 37.3284 20.3284 37.3284 19.5 36.5C18.6716 35.6716 18.6716 34.3284 19.5 33.5L26.657 26.343C26.919 26.081 27.0499 25.9501 27.1198 25.8195C27.1941 25.6807 27.2176 25.6035 27.2332 25.4468C27.2479 25.2995 27.1999 25.0564 27.1041 24.5702C27.0358 24.2241 27 23.8662 27 23.5C27 20.4624 29.4624 18 32.5 18C33.5055 18 34.448 18.2698 35.259 18.741ZM28.0001 30.9999L33.5 36.4999C34.3284 37.3283 35.6716 37.3283 36.5 36.4999C37.3284 35.6715 37.3284 34.3283 36.5 33.4999L31.9753 28.9753C31.655 28.945 31.3427 28.8872 31.0408 28.8043C30.6517 28.6975 30.2249 28.7751 29.9397 29.0603L28.0001 30.9999Z"
										stroke="#1570EF"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>

								<div className="marketing-tool__title">
									Инструменты
								</div>
								<ul className="marketing-tool__list">
									<li>AI-генерация креативов</li>
									<li>Предиктивная аналитика</li>
									<li>Персонализация контента</li>
									<li>Автоматическая оптимизация</li>
								</ul>
							</div>
							<div className="marketing-tool">
								<svg
									className="marketing-tool__icon"
									viewBox="0 0 56 56"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="4"
										y="4"
										width="48"
										height="48"
										rx="24"
										fill="#D1E9FF"
									/>
									<rect
										x="4"
										y="4"
										width="48"
										height="48"
										rx="24"
										stroke="#EFF8FF"
										strokeWidth="8"
									/>
									<path
										d="M28 19H32.2C33.8802 19 34.7202 19 35.362 19.327C35.9265 19.6146 36.3854 20.0735 36.673 20.638C37 21.2798 37 22.1198 37 23.8V32.2C37 33.8802 37 34.7202 36.673 35.362C36.3854 35.9265 35.9265 36.3854 35.362 36.673C34.7202 37 33.8802 37 32.2 37H23.8C22.1198 37 21.2798 37 20.638 36.673C20.0735 36.3854 19.6146 35.9265 19.327 35.362C19 34.7202 19 33.8802 19 32.2V28M24 29V33M32 27V33M28 23V33M18 21L21 18M21 18L24 21M21 18L21 24"
										stroke="#1570EF"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>

								<div className="marketing-tool__title">
									Прогноз охватов
								</div>
								<ul className="marketing-tool__list">
									<li>Год 1: 2,646 млн просмотров</li>
									<li>Год 2: 13,511 млн просмотров</li>
									<li>Год 3: 61,806 млн просмотров</li>
								</ul>
							</div>
							<div className="marketing-tool">
								<svg
									className="marketing-tool__icon"
									viewBox="0 0 56 56"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="4"
										y="4"
										width="48"
										height="48"
										rx="24"
										fill="#D1E9FF"
									/>
									<rect
										x="4"
										y="4"
										width="48"
										height="48"
										rx="24"
										stroke="#EFF8FF"
										strokeWidth="8"
									/>
									<path
										d="M25 31.5H23.5C22.1044 31.5 21.4067 31.5 20.8389 31.6722C19.5605 32.06 18.56 33.0605 18.1722 34.3389C18 34.9067 18 35.6044 18 37M30.5 23.5C30.5 25.9853 28.4853 28 26 28C23.5147 28 21.5 25.9853 21.5 23.5C21.5 21.0147 23.5147 19 26 19C28.4853 19 30.5 21.0147 30.5 23.5ZM27 37L30.1014 36.1139C30.2499 36.0715 30.3241 36.0502 30.3934 36.0184C30.4549 35.9902 30.5134 35.9558 30.5679 35.9158C30.6293 35.8707 30.6839 35.8161 30.7932 35.7068L37.25 29.25C37.9404 28.5597 37.9404 27.4403 37.25 26.75C36.5597 26.0596 35.4404 26.0596 34.75 26.75L28.2932 33.2068C28.1839 33.3161 28.1293 33.3707 28.0842 33.4321C28.0442 33.4866 28.0098 33.5451 27.9816 33.6066C27.9497 33.6759 27.9285 33.7501 27.8861 33.8987L27 37Z"
										stroke="#1570EF"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>

								<div className="marketing-tool__title">
									Количество заявок <br />
									на диагностику
								</div>
								<ul className="marketing-tool__list">
									<li>Год 1: 27, 933 входящих заявок</li>
									<li>Год 2: 272,220 входящих заявок</li>
									<li>Год 3: 1,945,769 входящих заявок</li>
								</ul>
							</div>
							<div className="marketing-tool">
								<svg
									className="marketing-tool__icon"
									viewBox="0 0 56 56"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="4"
										y="4"
										width="48"
										height="48"
										rx="24"
										fill="#D1E9FF"
									/>
									<rect
										x="4"
										y="4"
										width="48"
										height="48"
										rx="24"
										stroke="#EFF8FF"
										strokeWidth="8"
									/>
									<path
										d="M32 22L35 19M35 19L38 22M35 19V25M32 37V35.8C32 34.1198 32 33.2798 31.673 32.638C31.3854 32.0735 30.9265 31.6146 30.362 31.327C29.7202 31 28.8802 31 27.2 31H22.8C21.1198 31 20.2798 31 19.638 31.327C19.0735 31.6146 18.6146 32.0735 18.327 32.638C18 33.2798 18 34.1198 18 35.8V37M28.5 23.5C28.5 25.433 26.933 27 25 27C23.067 27 21.5 25.433 21.5 23.5C21.5 21.567 23.067 20 25 20C26.933 20 28.5 21.567 28.5 23.5Z"
										stroke="#1570EF"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>

								<div className="marketing-tool__title">
									Количество квалифицированных лидов для
									продажи B2B
								</div>
								<ul className="marketing-tool__list">
									<li>Год 1: 7, 063 квал. лидов</li>
									<li>Год 2: 98,268 квал. лидов</li>
									<li>Год 3: 956,069 квал. лидов</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
