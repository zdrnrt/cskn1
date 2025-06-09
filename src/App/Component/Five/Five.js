import React from 'react';
import { Typography, Button } from 'antd';
const { Title } = Typography;
import Tile from '../../Shared/Tile';
import Icons from '../../Icon';
import './Five.scss';

const b2b = [
	{
		title: 'Диагностика (2000₽)',
		steps: [
			'AI-анализ ситуации',
			'Разработка плана',
			'Предоставление рекомендаций',
		],
	},
	{
		title: 'Привлечение (CAC: 300₽)',
		steps: ['Реалити-шоу', 'Органический трафик', 'Сарафанное радио'],
	},
	{
		title: 'Консультация',
		steps: [
			'Детальный разбор плана',
			'Ответы на вопросы',
			'Выбор стратегии',
		],
	},
	{
		title: 'Реализация',
		steps: ['Подбор специалистов', 'Контроль качества', 'Сопровождение'],
	},
];

const model = [
	{
		title: 'Модель работы',
		icon: 'gear',
		steps: [
			'Оплата за лид (ср. чек 18.000₽)',
			'Квалификация через AI',
			'Гарантия качества',
			'Контроль конверсии',
		],
	},
	{
		title: 'Типы партнеров',
		icon: 'user',
		steps: [
			'Банки и КПК',
			'Юридические компании',
			'Кредитные брокеры',
			'Финансовые консультанты',
		],
	},
];

const financials = [
	{
		title: 'Год 1',
		steps: ['B2C: 45.9 млн ₽', 'B2B: 82.6 млн ₽'],
		result: '128.5 млн ₽',
	},
	{
		title: 'Год 2',
		steps: ['B2C: 268.7 млн ₽', 'B2B: 621.9 млн ₽'],
		result: '890.6 млн ₽',
	},
	{
		title: 'Год 3',
		steps: ['B2C: 1.117 млрд ₽', 'B2B: 3.017 млрд ₽'],
		result: '4.134 млрд ₽',
	},
	// {
	//   title: "Рост",
	//   steps: ["Год 1: 2.2% ", "Год 2: 48.5%", "Год 3: 69.8%"],
	// },
	{
		title: 'Маржинальность',
		steps: ['2025: 78,47%', '2026: 88,81%', '2027: 94,08%'],
	},
	{
		title: 'Доля рынка',
		steps: ['Год 1: 0,0097%', 'Год 2: 0,067%', 'Год 3: 0,311%'],
	},
];

function Arrow() {
	return (
		<div className="five__arrow">
			<img src={Icons.arrow} alt=""></img>
		</div>
	);
}

export default function Five() {
	const stepsList = [];
	b2b.forEach((el, i) => {
		stepsList.push(<Tile type="money" key={i} data={el} />);
		if (i != b2b.length - 1) {
			stepsList.push(<Arrow key={i + 5} />);
		}
	});
	const modelList = model.map((el, i) => (
		<Tile type="steps" key={i} data={el} />
	));
	const financialsList = financials.map((el, i) => (
		<Tile type="financial" key={i} data={el} />
	));
	return (
		<section className="five section">
			<div className="container">
				<div className="five__content">
					<Title className="subtitle five__title" level={2}>
						Двойная монетизация: устойчивая модель роста
					</Title>е
					<Title level={3} className="part-title five__part-title">
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
									stroke-width="2.33333"
									stroke-linecap="round"
									stroke-linejoin="round"
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
									stroke-width="2.33333"
									stroke-linecap="round"
									stroke-linejoin="round"
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
									stroke-width="2.33333"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							AI - SEO
						</div>
					</div>
					<Title level={3} className="part-title five__part-title">
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<p className="five-step__text">
									Предоставление рекомендаций
								</p>
							</div>
						</div>
						<div className="five-step five__step">
							<div className="five-step__title">
								2.Консультация
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<p className="five-step__text">
									Сопровождение до результата
								</p>
							</div>
						</div>
						<div className="five-step five__step">
							<div className="five-step__title">
								4. Типы B2C клиентов:
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<p className="five-step__text">
									Физические лица в возрасте от 22 до 65 лет,
									с долговой нагрузкой >60% от ежемесячных
									доходов
								</p>
							</div>
						</div>
					</div>
					<Title level={3} className="part-title five__part-title">
						B2B партнеры (ср. чек 11.000₽)
					</Title>
					<div className="five__list">
						<div className="five-step five__step">
							<div className="five-step__title">Платят за:</div>
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<p className="five-step__text">
									Кредитные организации (банки, КПК, Кредитные
									брокеры)
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
										stroke-width="2.33333"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<p className="five-step__text">
									Юридические фирмы (банкротство,
									реструктуризация, защита прав)
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
