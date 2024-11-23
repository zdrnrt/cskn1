import React from "react";
import "./Footer.scss";
import { Button, Typography } from "antd";
const { Title, Link } = Typography;
import "./Footer.scss";
import t1 from "../../../img/team/t1-f.jpg";
import qr from "../../../img/qr.png";

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container footer__content">
        <div className="footer__info">
          <div className="footer__preview preview">
            <div className="preview__photo">
              <img src={t1} alt="Аркадий Шевченко"></img>
            </div>
            <div className="preview__info">
              <div className="preview__name">Аркадий Шевченко</div>
              <div className="preview__position">Founder & CEO</div>
            </div>
          </div>
          <div className="footer__contacts footer-contacts">
            <div className="footer-contacts__title">Контакты</div>
            <div className="footer-contacts__list">
              <div className="footer-contacts__item">Telegram: <Link type="link" href="" className="footer-contacts__link">@ArkadyShevchenko</Link></div>
              <div className="footer-contacts__item">Email: <Link  type="link" href="mailto:cskn24.7@gmail.com" className="footer-contacts__link">cskn24.7@gmail.com</Link> </div>
              <div className="footer-contacts__item"> Phone/WhatsApp: <Link type="link" href="tel:+7 953 590 6427" className="footer-contacts__link">+7 953 590 6427</Link> </div>
            </div>
            <div className="footer-contacts__qr">
              <img src={qr} alt="qr"></img>
            </div>
          </div>
        </div>
        <div className="footer__materials footer-materials">
          <Title level={4} className="footer-materials__title">Скачайте дополнительные материалы</Title>
          <ul className="footer-materials__list">
            <li>Питчдек.</li>
            <li>Финдек.</li>
            <li>Инвестиционный тизер.</li>
            <li>Информационная справка.</li>
          </ul>
          <div>
            <Button type="link" size="large">Скачать материалы</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
