import React from "react";

import {
  Input,
  Space,
  Card,
  Descriptions,
  Button,
  Modal,
  Alert,
  Row,
  Form,
  Col,
  Spin,
  message,
  Select,
  InputNumber,
} from "antd";

import styles from "@/styles/Home.module.css";

const AdminTracking = (props) => {
  const { loggedIn } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const [posylkas, setPosylkas] = React.useState(null);
  const [isEmpty, setIsEmpty] = React.useState(null);

  const [searchVal, setSearchVal] = React.useState(null);
  const [add, addTrack] = React.useState(false);

  const [cities, setCities] = React.useState(null);
  const [users, setUsers] = React.useState(null);

  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetch(`http://api.infriends.kz/users/`)
      .then((r) => r.json())
      .then((rInner) => {
        setUsers(rInner);
        fetch(`http://api.infriends.kz/cities/`)
          .then((r) => r.json())
          .then((rInnerCit) => {
            setCities(rInnerCit);
            setLoading(false);
          })
          .catch((e) => {
            console.log(e);
            messageApi.error(`Ошибка при получении словарей!`);
            setLoading(false);
          });
      })
      .catch((e) => {
        console.log(e);
        messageApi.error(`Ошибка при получении словарей!`);
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    user && setPosList(user);
    form.resetFields();
  }, [user]);

  const setPosList = () => {
    user &&
      fetch(`http://api.infriends.kz/posylkas/?user=${user}`)
        .then((r) => r.json())
        .then((rInner) => {
          setPosylkas(rInner);
          if (rInner?.length === 0) setIsEmpty(true);
        })
        .catch((e) => {
          console.log(e);
          messageApi.error(`Ошибка при получении посылок!`);
          setIsEmpty(true);
        });
  };

  const handleSubmit = (e) => {
    fetch(`http://api.infriends.kz/create_order/`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        pos_id: e?.idPos,
        user: user,
        city_arrival: e?.from,
        city_destination: e?.to,
        status: e?.status,
        weight: e?.weight,
      }),
    })
      .then((r) => r.json())
      .then((rInner) => {
        if (rInner?.msg === "Ok") {
          messageApi.success("Элемент создан!");
          setPosList();
        } else {
          messageApi.error(`Заявка на создание не отправлена!`);
        }
      })
      .catch((e) => {
        messageApi.error(`Заявка на создание не отправлена! Ошибка: ${e}`);
        addTrack(false);
      });
  };

  const selectUser = (e) => {
    setUser(e);
  };

  return (
    <Spin spinning={loading}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Form
          form={form}
          style={{ width: "100vw", padding: "5%" }}
          onFinish={(e) => {
            handleSubmit(e);
          }}
        >
          <Row gutter={[16, 8]}>
            <Col span={24}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста выберите пользователя",
                  },
                ]}
                label="Пользователь"
                labelCol={{ span: 24 }}
              >
                <Select
                  onSelect={selectUser}
                  options={users?.map((x, i) => {
                    return {
                      label: `${x.id} | ${x.name}`,
                      value: x.id,
                    };
                  })}
                  placeholder={"Пожалуйста выберите пользователя..."}
                ></Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 8]}>
            <Col span={6}>
              <Form.Item
                rules={[
                  { required: true, message: "Пожалуйста выберите город" },
                ]}
                name="from"
                label="Откуда"
                labelCol={{ span: 24 }}
              >
                <Select
                  disabled={!user}
                  options={cities?.map((x, i) => {
                    return {
                      label: x.name,
                      value: x.id,
                    };
                  })}
                  placeholder={"Пожалуйста выберите город..."}
                ></Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                rules={[
                  { required: true, message: "Пожалуйста выберите статус" },
                ]}
                name="status"
                label="Статус"
                labelCol={{ span: 24 }}
              >
                <Select
                  disabled={!user}
                  options={[
                    {
                      label: "Доставлено",
                      value: true,
                    },
                    {
                      label: "Не доставлено",
                      value: false,
                    },
                  ]}
                  placeholder={"Пожалуйста выберите статус..."}
                ></Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                rules={[
                  { required: true, message: "Пожалуйста выберите город" },
                ]}
                name="to"
                label="Куда"
                labelCol={{ span: 24 }}
              >
                <Select
                  disabled={!user}
                  options={cities?.map((x, i) => {
                    return {
                      label: x.name,
                      value: x.id,
                    };
                  })}
                  placeholder={"Пожалуйста выберите город..."}
                ></Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                disabled={!user}
                rules={[{ required: true, message: "Пожалуйста введите вес" }]}
                name="weight"
                label="Вес"
                labelCol={{ span: 24 }}
              >
                <InputNumber
                  disabled={!user}
                  placeholder="Введите вес..."
                  style={{ width: "100%" }}
                ></InputNumber>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 8]}>
            <Col span={20}>
              <Form.Item
                rules={[
                  { required: true, message: "Пожалуйста заполните поле" },
                ]}
                name="idPos"
                label="Индекс посылки"
                labelCol={{ span: 24 }}
              >
                <Input
                  disabled={!user}
                  placeholder="Введите значение..."
                ></Input>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                // rules={[{ required: true, message: "Пожалуйста заполните поле" }]}
                // name="idPos"
                label="Отправка"
                labelCol={{ span: 24 }}
              >
                <Button
                  disabled={!user}
                  onClick={() => form.submit()}
                  style={{ width: "100%" }}
                >
                  Создать
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Space
            direction="vertical"
            className={
              posylkas ? styles.trackingSpace2 : styles.trackingSpaceEmpty
            }
          >
            {posylkas?.map((x, i) => {
              return (
                <Card
                  title={`Заказ #${x.id}, Наименование ${x.name}`}
                  extra={<Button>Оплатить</Button>}
                  key={i}
                >
                  <Descriptions bordered>
                    <Descriptions.Item label="Трекинг номер">
                      {x.pos_id}
                    </Descriptions.Item>
                    <Descriptions.Item label="Вес">
                      {x.weight}
                    </Descriptions.Item>
                    <Descriptions.Item label="Стоимость" span={2}>
                      {x.cost}
                    </Descriptions.Item>
                    <Descriptions.Item label="Дата" span={2}>
                      {x.date}
                    </Descriptions.Item>
                    <Descriptions.Item
                      label="Статус"
                      style={{ color: x.status ? "green" : "red" }}
                    >
                      {x.status ? "Доставлен" : "Не доставлен"}
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
              );
            })}
          </Space>
          {contextHolder}
        </Form>
      </Space>
    </Spin>
  );
};

export default AdminTracking;
