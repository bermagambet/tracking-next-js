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
  const { loggedIn, setLoggedIn } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const [reg, setReg] = React.useState(false);

  const [log, setLog] = React.useState("");
  const [pass, setPass] = React.useState("");

  const handleSubmit = () => {
    fetch(`http://api.infriends.kz/login/`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        login: log,
        password: pass,
      }),
    })
      .then((r) => r.data)
      .then((rInner) => {
        messageApi.success("Вы успешно вошли!");
        localStorage.setItem("login", log);
        localStorage.setItem("id", rInner?.user);
        setLoggedIn({
          loggedIn: true,
          login: log,
          id: rInner?.user,
        });
      })
      .catch((e) => {
        console.log(e);
        messageApi.info(
          "Сервис временно не доступен или учетные данные неверны!"
        );
      });
  };

  const leave = () => {
    setLog("");
    setPass("");
    setLoggedIn({
      ...loggedIn,
      loggedIn: false,
    });
  };

  const handleLog = (val) => {
    setLog(val.target.value);
  };

  const handlePass = (val) => {
    setPass(val.target.value);
  };

  const node = (
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
      <Row>
        <Col
          span={24}
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Button onClick={() => handleSubmit(log, pass)}>Войти</Button>
        </Col>
      </Row>
    </div>
  );

  return (
    <Card>
      {contextHolder}
      {loggedIn?.loggedIn && (
        <div>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Descriptions bordered>
              <Descriptions.Item label="Ваш логин" span={1}>
                {loggedIn?.login}
              </Descriptions.Item>
              <Descriptions.Item label="Ваш ID" span={1}>
                {loggedIn?.id}
              </Descriptions.Item>
            </Descriptions>
            <Button onClick={leave}>Выйти</Button>
          </Space>
        </div>
      )}
      {!loggedIn?.loggedIn && node}
    </Card>
  );
};

export default Profile;
