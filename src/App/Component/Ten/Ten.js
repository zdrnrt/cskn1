import React from "react";
import { Typography, Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
const { Title } = Typography;

export default function Ten() {
  return (
    <section className="ten">
      <div className="container ten__content">
        <Title level={2}>Станьте частью революции в финансовом здоровье</Title>
        <Title level={3}>Запишитесь на презентацию</Title>
        <Form>
          Имя
          <Input></Input>
          WhatsApp/Telegram
          <Input></Input>
          Сообщение (опционально)
          <TextArea></TextArea>
          <Button>Записаться на встречу </Button>
        </Form>
        <div>или</div>
        <div>
          <a href="#">tg</a>
          <a href="#">inst</a>
          <a href="#">linkedin</a>
        </div>

      </div>
    </section>
  )
};