import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { Typography, Button, Form, Input } from "antd";
const { Title } = Typography;
import "./Ten.scss";
import Icon from "../../Icon/Icon";

const social = [
  {
    name: "Telegram",
    icon: "tg",
    link: "https://t.me/cskn_1",
  },
  {
    name: "Instragram",
    icon: "inst",
    link: "https://www.instagram.com/arkadiyshevchenko/profilecard",
  },
  {
    name: "Linkedin",
    icon: "linkedin",
    link: "http://www.linkedin.com/in/arkadiishevchenko",
  },
];

function Social({ props }) {
  return (
    <a href={props.link} target="_blank" className="ten__social social">
      <img
        src={Icon[props.icon]}
        className="social__icon"
        alt={props.name}
      ></img>
    </a>
  );
}

function FormContainer() {
  let [formStatus, setFormStatus] = useState(null);

  const socialLink = social.map((el, i) => <Social key={i} props={el} />);


  function onFinish(data) {
    fetch("./send.php", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setFormStatus("success");
          return response.text();
        } else {
          throw new Error('send.php error')
        }
      })
      .then ( (status) => setFormStatus(status) )
      .catch((error) => {
        console.log(error);
        return setFormStatus("error");
      });
  }

  if (formStatus == "success") {
    return <div>Ваша заявка успешно отправлена</div>;
  }

  if (formStatus == "error") {
    return <div>При отправен произошла ошибка</div>;
  }

  return (
    <>
    <Form onFinish={onFinish}>
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
        <TextArea
          rows={3}
          size="large"
          placeholder="Введите сообщение"
        ></TextArea>
      </Form.Item>
      <Button
        block
        type="primary"
        size="large"
        htmlType="submit"
        className="form__submit"
      >
        Записаться на встречу
      </Button>
    </Form>
    <div className="ten__or">или</div>
    <div className="ten__social">{socialLink}</div>
    </>
  );
}

export default function Ten() {

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
            <FormContainer />
          </div>
        </div>
      </div>
    </section>
  );
}
