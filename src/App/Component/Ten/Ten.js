import React from "react";
import TextArea from "antd/es/input/TextArea";
import { Typography, Button, Form, Input } from "antd";
const { Title } = Typography;
import "./Ten.scss";
import Icon from "../../Icon/Icon";


const social = [
  {
    name: 'Telegram',
    icon: 'tg',
    link: 'https://t.me/cskn_1'
  },
  {
    name: 'Instragram',
    icon: 'inst',
    link: 'https://www.instagram.com/arkadiyshevchenko/profilecard'
  },
  {
    name: 'Linkedin',
    icon: 'linkedin',
    link: 'http://www.linkedin.com/in/arkadiishevchenko'
  }
];

function Social({props}){
  return (
    <a href={props.link} target="_blank" className="ten__social social">
      <img src={Icon[props.icon]} className="social__icon" alt={props.name}></img>
    </a>
  )
}

export default function Ten() {
  function onFinish(data) {
    console.log(data);
  }
  function onFinishFailed(data) {
    console.log(data);
  }

  const socialLink = social.map( (el, i) => <Social key={i} props={el} />)

  return (
    <section className="ten section">
      <div className="container">
        <div className="ten__content">
          <Title level={2} className="subtitle ten__title">
            Станьте частью революции в финансовом здоровье
          </Title>
          <Title level={3} className="part-title ten__part-title">
            Запишитесь на презентацию
          </Title>
          <div className="ten__form form">
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
              <Form.Item
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
                label="Имя"
                name="name"
                className="form__input"
                rules={[{ required: true, message: "Пожалуйста, введите имя" }]}
              >
                <Input size="large" placeholder="Введите имя" />
              </Form.Item>
              <Form.Item
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
                label="WhatsApp/Telegram"
                name="whatsappTelegram"
                className="form__input"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста, введите свои контакт в WhatsApp/Telegram",
                  },
                ]}
              >
                <Input size="large" placeholder="Введите WhatsApp/Telegram" />
              </Form.Item>
              <Form.Item 
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
                label="Сообщение (опционально)"
                name="message"
                className="form__input"
              >
                <TextArea rows={3} size="large" placeholder="Введите сообщение"></TextArea>
              </Form.Item>
              <Button block type="primary" size="large" htmlType="submit" className="form__submit">
                Записаться на встречу
              </Button>
            </Form>
            <div className="ten__or">или</div>
            <div className="ten__social">
              {socialLink}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
