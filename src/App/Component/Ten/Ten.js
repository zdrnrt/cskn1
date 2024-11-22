import React from "react";
import TextArea from "antd/es/input/TextArea";
import { Typography, Button, Form, Input } from "antd";
// import { useForm } from "antd/es/form/Form";
const { Title } = Typography;

export default function Ten() {
  // const {
  // 	// register,
  // 	// formState: { errors },
  // 	// handleSubmit,
  // 	// setError,
  // } = useForm();

  function onFinish(data) {
    console.log(data);
  }
  function onFinishFailed(data) {
    console.log(data);
  }
  return (
    <section className="ten">
      <div className="container ten__content">
        <Title level={2}>Станьте частью революции в финансовом здоровье</Title>
        <Title level={3}>Запишитесь на презентацию</Title>
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
            rules={[{ required: true, message: "Пожалуйста, введите имя" }]}
          >
            <Input placeholder="Введите имя" />
          </Form.Item>
          <Form.Item
            label="WhatsApp/Telegram"
            name="whatsappTelegram"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите свои контакт в WhatsApp/Telegram",
              },
            ]}
          >
            <Input placeholder="Введите WhatsApp/Telegram" />
          </Form.Item>
          <Form.Item label="Сообщение (опционально)" name="message">
            <TextArea></TextArea>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Записаться на встречу{" "}
          </Button>
        </Form>
        <div>или</div>
        <div>
          <a href="#">tg</a>
          <a href="#">inst</a>
          <a href="#">linkedin</a>
        </div>
      </div>
    </section>
  );
}
