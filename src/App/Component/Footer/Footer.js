import React from 'react';
import './Footer.scss';
import { Button, Typography } from 'antd';
const { Title, Link } = Typography;
import './Footer.scss';
import t1 from '../../../img/team/t1-f.jpg';
import qr from '../../../img/qr.png';

export default function Footer() {
	return (
		<footer className="footer section">
			<div className="container ">
				<div className="footer__content">
					{/* <div className="footer__info"> */}
					<div className="footer__preview preview">
						<div className="preview__photo">
							<img src={t1} alt="Аркадий Шевченко"></img>
						</div>
					</div>
					<div className="footer__contacts footer-contacts">
						<div className="profile profile--founder">
							<div className="profile__name">
								Аркадий Шевченко
							</div>
							<div className="profile__position">
								Founder & CEO
							</div>
						</div>
						<div className="footer-contacts__title">Контакты</div>
						<ol className="footer-contacts__list">
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
						</ol>
						<div className="footer-contacts__qr">
							<img src={qr} alt="qr"></img>
						</div>
					</div>
					{/* </div> */}
					<div className="footer__materials footer-materials">
						<Title level={4} className="footer-materials__title">
							Дополнительные материалы
						</Title>
						<ul className="footer-materials__list">
							<li>
								<Button
									type="link"
									href="./files/cskn1-file.zip"
								>
									Тизер
								</Button>
							</li>
							<li>
								<Button
									type="link"
									href="./files/cskn1-file.zip"
								>
									Инвестиционная презентация
								</Button>
							</li>
							<li>
								<Button
									type="link"
									href="./files/cskn1-file.zip"
								>
									Питчдек
								</Button>
							</li>
							<li>
								<Button
									type="link"
									href="./files/cskn1-file.zip"
								>
									Финдек
								</Button>
							</li>
							<li>
								<Button
									type="link"
									href="./files/cskn1-file.zip"
								>
									Финансовая модель
								</Button>
							</li>
						</ul>
						{/* <div>
            <Button type="link" href="./files/cskn1-file.zip" size="large">Скачать материалы</Button>
          </div> */}
					</div>
				</div>
			</div>
		</footer>
	);
}
