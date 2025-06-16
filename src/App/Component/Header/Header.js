import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Button, Typography, ConfigProvider } from 'antd';
const { Link } = Typography;

import logo from './assets/logo.svg';
import logoText from './assets/logo-text.svg';
import Icons from '../../Icon';

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		document.body.classList[mobileMenuOpen ? 'add' : 'remove'](
			'body--menu-open'
		);
	}, [mobileMenuOpen]);

	useEffect(function () {
		const header = document.querySelector('.header');
		const headerHeight = header.getBoundingClientRect().height;
		function headerFixing(e) {
			if (window.scrollY > headerHeight) {
				document.body.style.paddingTop = `${headerHeight + 20}px`;
				header.classList.add('header--fixed');
			} else {
				document.body.style.paddingTop = 0;
				header.classList.remove('header--fixed');
			}
		}

		document.addEventListener('scroll', headerFixing);
		return () => document.removeEventListener('scroll', headerFixing);
	}, []);

	return (
		<>
			<header className="header">
				<div className="container header__content">
					{/* <Button type="link" href="/" className="header__logo">ЦСКН1</Button> */}
					<Button type="link" href="/" className="header__logo">
						{/* <img
							src={logo}
							className="header__logo-pic header__logo-pic--logo"
						/> */}
						<img
							src={logoText}
							className="header__logo-pic header__logo-pic--text"
						/>
					</Button>
					<div className="header__controls">
						<Button
							className="header__btn header__controls--mobile-none"
							type="link"
							size="large"
							href="https://cskn1.ru/"
							icon={<img src={Icons.linkArrow} />}
							iconPosition="end"
						>
							Перейти на страницу продукта
						</Button>

						<Button
							className="header__btn header__controls--mobile-none"
							type="link"
							size="large"
							href="./files/cskn1-invest-presentation.pdf"
							icon={<img src={Icons.linkDownload} />}
							iconPosition="end"
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
						<Button
							size="large"
							className="header__controls--mobile"
							icon={
								<img
									src={
										Icons[mobileMenuOpen ? 'xmark' : 'bars']
									}
									className=""
									alt=""
								/>
							}
							onClick={() => setMobileMenuOpen((state) => !state)}
						></Button>
					</div>
				</div>
			</header>
			<div className="mobile-menu">
				<nav className="mobile-menu__nav">
					<Button
						size="large"
						href="https://cskn1.ru/"
						icon={<img src={Icons.linkArrow} />}
						iconPosition="end"
					>
						Перейти на страницу продукта
					</Button>
					<Button
						size="large"
						href="./files/cskn1-invest-presentation.pdf"
						icon={<img src={Icons.linkDownload} />}
						iconPosition="end"
					>
						Скачать презентацию
					</Button>
					{/* <Button type="primary" size="large" href="https://wa.me/message/CG4TEM4HZBQQA1" target="_blank">Написать основателю</Button> */}
				</nav>
				<div className="mobile-menu__contacts">
					<div className="footer-contacts__title">
						Контакты основателя
					</div>
					<ul className="footer-contacts__list mobile-menu__contacts-list">
						<li className="footer-contacts__item">
							Telegram:{' '}
							<Link
								type="link"
								href="https://t.me/cskn_1"
								className="footer-contacts__link"
							>
								@ArkadyShevchenko
							</Link>
						</li>
						<li className="footer-contacts__item">
							Email:{' '}
							<Link
								type="link"
								href="mailto:cskn24.7@gmail.com"
								className="footer-contacts__link"
							>
								cskn24.7@gmail.com
							</Link>{' '}
						</li>
						<li className="footer-contacts__item">
							{' '}
							Phone/WhatsApp:{' '}
							<Link
								type="link"
								href="tel:+7 953 590 6427"
								className="footer-contacts__link"
							>
								+7 953 590 6427
							</Link>{' '}
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
