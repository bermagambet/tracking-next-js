import React from "react";

import { Collapse, Form, Row, Col, Input, Card, Button, message } from "antd";

const { Panel } = Collapse;

import styles from "@/styles/Home.module.css";

const Profile = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [reg, setReg] = React.useState(false);

  const setToReg = () => {
    setReg(true);
  };

  const setToLog = () => {
    setReg(false);
  };

  const handleSubmit = () => {
    messageApi.info('Сервис временно не доступен!');
  };

  return (
    <Card>
      {contextHolder}
      {!reg ? (
        <div>
          <Row>
            <Col span={24}>
              <Form.Item label="Логин" labelCol={{ span: 24 }}>
                <Input
                  placeholder="Введите логин..."
                  style={{ width: "100%" }}
                ></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item label="Пароль" labelCol={{ span: 24 }}>
                <Input.Password
                  placeholder="Введите пароль..."
                  style={{ width: "100%" }}
                ></Input.Password>
              </Form.Item>
            </Col>
          </Row>
        </div>
      ) : (
        <div>
          <Row>
            <Col span={24}>
              <Form.Item label="Почта" labelCol={{ span: 24 }}>
                <Input
                  placeholder="Введите почту..."
                  style={{ width: "100%" }}
                ></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item label="Логин" labelCol={{ span: 24 }}>
                <Input
                  placeholder="Введите логин..."
                  style={{ width: "100%" }}
                ></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item label="Пароль" labelCol={{ span: 24 }}>
                <Input.Password
                  placeholder="Введите пароль..."
                  style={{ width: "100%" }}
                ></Input.Password>
              </Form.Item>
            </Col>
          </Row>
        </div>
      )}
      {!reg ? (
        <Row>
          <Col span={12}>
            <Button onClick={() => handleSubmit()}>Войти</Button>
          </Col>
          <Col span={12}>
            <Button type="secondary" onClick={() => setToReg()}>
              Регистрация
            </Button>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col span={12}>
            <Button onClick={() => handleSubmit()}>Регистрация</Button>
          </Col>
          <Col span={12}>
            <Button onClick={() => setToLog()} type="secondary">
              Вернуться
            </Button>
          </Col>
        </Row>
      )}
    </Card>
  );
};

export default Profile;
