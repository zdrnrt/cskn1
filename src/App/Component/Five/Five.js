import React from 'react';
import { Typography, Button } from 'antd';
const { Title } = Typography;
import Tile from '../../Shared/Tile';
import Icons from '../../Icon';
import './Five.scss';
import * as motion from 'motion/react-client';

function Arrow() {
	return (
		<div className="five__arrow">
			<img src={Icons.arrow} alt=""></img>
		</div>
	);
}

export default function Five() {
	return (
		<section className="five section">
			<div className="container">
				<div className="five__content">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{
							once: true,
							amount: 0.2, // Срабатывает когда 20% элемента видно
						}}
					>
						<Title className="subtitle five__title" level={2}>
							Двойная монетизация и устойчивая модель роста
						</Title>
						<Title
							level={3}
							className="part-title five__part-title"
						>
							Привлечение клиентов в B2C2B воронку (CAC: 1017₽)
						</Title>
						<div className="five__funnel">
							<div className="funnel-item">
								<svg
									className="funnel-item__icon"
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
								Фабрика вертикального видео контента
							</div>
							<div className="funnel-item">
								<svg
									className="funnel-item__icon"
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
								Реалити-шоу
							</div>
							<div className="funnel-item">
								<svg
									className="funnel-item__icon"
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
								AI - SEO
							</div>
						</div>
						<Title
							level={3}
							className="part-title five__part-title"
							style={{ marginBottom: '4rem' }}
						>
							B2C клиенты платят (ср. чек 2.200₽) за:
						</Title>

						<div className="five__list">
							<div className="five-step five__step">
								<div className="five-step__title">
									1. Диагностика
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										AI-анализ ситуации
									</p>
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										Разработка плана
									</p>
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										Предоставление рекомендаций
									</p>
								</div>
							</div>
							<div className="five-step five__step">
								<div className="five-step__title">
									2. Консультация
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										Детальный разбор плана
									</p>
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										Ответы на вопросы
									</p>
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										Выбор оптимальной стратегии
									</p>
								</div>
							</div>
							<div className="five-step five__step">
								<div className="five-step__title">
									3. Реализация
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										Подбор профильных специалистов
									</p>
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										Контроль качества
									</p>
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										Сопровождение до результата
									</p>
								</div>
							</div>
							<div className="five-step five__step">
								<div className="five-step__title">
									Типы B2C клиентов:
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										Физические лица в возрасте от 22 до{' '}
										<br />
										65 лет, с долговой нагрузкой >60% от{' '}
										<br />
										ежемесячных доходов
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
							className="part-title five__part-title"
						>
							B2B партнеры (ср. чек 11.000₽)
						</Title>
						<div className="five__list five__list--last">
							<div className="five-step five__step">
								<div className="five-step__title">
									Платят за:
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										Оплата за платящих клиентов
									</p>
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										Глубокая квалификация через AI
									</p>
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										Конверсия на 26% выше средней
									</p>
								</div>
							</div>
							<div className="five-step five__step">
								<div className="five-step__title">
									Типы B2B партнеров:
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										Кредитные организации (банки, КПК,{' '}
										<br />
										Кредитные брокеры)
									</p>
								</div>
								<div className="five-step__item">
									<svg
										className="five-step__icon"
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
									<p className="five-step__text">
										Юридические фирмы (банкротство, <br />
										реструктуризация, защита прав)
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
