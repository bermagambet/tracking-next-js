import React from "react";

import {
  Collapse,
  Form,
  Row,
  Col,
  Input,
  Card,
  Button,
  Descriptions,
  Space,
  message,
} from "antd";

const { Panel } = Collapse;

import styles from "@/styles/Home.module.css";

const Profile = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [reg, setReg] = React.useState(false);

  const [log, setLog] = React.useState("");
  const [pass, setPass] = React.useState("");

  const [loggedIn, setLoggedIn] = React.useState(false);

  const setToReg = () => {
    setReg(true);
  };

  const setToLog = () => {
    setReg(false);
  };

  const handleSubmit = () => {
    console.log(pass, log);
    if (pass === "test_user" && log === "test_user") {
      messageApi.success("Вы успешно вошли!");
      setLoggedIn(true);
    } else {
      messageApi.info(
        "Сервис временно не доступен или учетные данные неверны!"
      );
    }
  };

  const leave = () => {
    setLog('');
    setPass('');
    setLoggedIn(false);
  }

  const handleLog = (val) => {
    setLog(val.target.value);
  };

  const handlePass = (val) => {
    setPass(val.target.value);
  };

  const node = (
    <div>
      {!reg ? (
        <div>
          <Row>
            <Col span={24}>
              <Form.Item label="Логин" labelCol={{ span: 24 }}>
                <Input
                  placeholder="Введите логин..."
                  onChange={handleLog}
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
                  onChange={handlePass}
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
            <Button onClick={() => handleSubmit(log, pass)}>Войти</Button>
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
    </div>
  );

  return (
    <Card>
      {contextHolder}
      {loggedIn && (
        <div>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Descriptions bordered>
              <Descriptions.Item label="Ваш логин" span={1}>
                test_user
              </Descriptions.Item>
              <Descriptions.Item label="Ваш пароль" span={1}>
                <Input.Password value={"test_user"}></Input.Password>
              </Descriptions.Item>
              <Descriptions.Item label="Ваша почта" span={1}>
                test_user@gmail.com
              </Descriptions.Item>
            </Descriptions>
            <Button onClick={leave}>Выйти</Button>
          </Space>
        </div>
      )}
      {!loggedIn && node}
    </Card>
  );
};

export default Profile;
