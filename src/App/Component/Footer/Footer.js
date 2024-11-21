import React from "react";
import "./Footer.scss"
import { Button, Typography } from 'antd';
const { Link } = Typography;


export default function Footer() {

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__author footer-author">
          <div className="footer-author__photo">
            <img src="" alt="Аркадий Шевченко"></img>
          </div>
          <div className="footer-author__info">
            <div className="footer-author__name">Аркадий Шевченко</div>
            <div className="footer-author__position">Founder & CEO</div>
          </div>
        </div>
        <div className="footer__contacts footer-contacts">
          <div className="footer-contacts__title">Контакты</div>
          <div>
            Telegram: @ArkadyShevchenko
            Email: <a href="mailto:cskn24.7@gmail.com">cskn24.7@gmail.com</a>
            Phone/WhatsApp: <a href="tel:+7 953 590 6427">+7 953 590 6427</a>
          </div>
          <div className="footer-contacts__qr">
            <img src="" alt="qr"></img>
          </div>
        </div>
        <div className="footer__materials footer-materials">
          <div>Скачайте дополнительные материалы</div>
          <div>
            <ul>
              <li>Питчдек.</li>
              <li>Финдек.</li>
              <li>Инвестиционный тизер.</li>
              <li>Информационная справка.</li>
            </ul>
          </div>
          <div>
            <Button>Скачать материалы</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}