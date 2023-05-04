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
} from "antd";

import styles from "@/styles/Home.module.css";

const TrackingList = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const [posylkas, setPosylkas] = React.useState(null);
  const [isEmpty, setIsEmpty] = React.useState(null);

  const [searchVal, setSearchVal] = React.useState(null);
  const [add, addTrack] = React.useState(false);

  React.useEffect(() => {
    fetch(`http://api.infriends.kz/posylkas`)
      .then((r) => r.data)
      .then((rInner) => {
        setPosylkas(rInner);
        if (rInner?.length === 0) setIsEmpty(true);
      })
      .catch((e) => {
        console.log(e);
        setIsEmpty(true);
      });
  }, []);

  const onSearch = (val) => {
    setSearchVal(val.target.value);
  };

  return (
    <Space direction="vertical" className={styles.trackingSpace}>
      <Row className={styles.inputs}>
        <Col span={20}>
          <Input.Search placeholder="Введите трек номер" onChange={onSearch} />
        </Col>
        <Col span={4}>
          <Button onClick={() => addTrack(true)}>Добавить</Button>
        </Col>
      </Row>
      <Space
        direction="vertical"
        className={posylkas ? styles.trackingSpace2 : styles.trackingSpaceEmpty}
      >
        {searchVal && searchVal !== ""
          ? posylkas
              ?.filter(
                (x) =>
                  x.pos_id?.toString()?.includes(searchVal) ||
                  x.name?.toString()?.includes(searchVal)
              )
              .map((x, i) => {
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
                      <Descriptions.Item label="Вес">1кг</Descriptions.Item>
                      <Descriptions.Item label="Стоимость" span={2}>
                        255 тг
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
              })
          : posylkas?.map((x, i) => {
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
                    <Descriptions.Item label="Вес">1кг</Descriptions.Item>
                    <Descriptions.Item label="Стоимость" span={2}>
                      255 тг
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
        {isEmpty === true && (
          <Alert message="Посылок на данный момент нет." type="error" />
        )}
        {!isEmpty && !posylkas && (
          <Spin spinning={true}>
            <Alert message="Идет загрузка посылок" type="info" />
          </Spin>
        )}
      </Space>
      <Modal
        open={add}
        okText="Создать"
        cancelText="Отменить создание"
        onOk={() => form.submit()}
        onCancel={() => {
          messageApi.info("Заяявка на создание отменена!");
          addTrack(false);
        }}
      >
        <Form
          form={form}
          onFinish={() => {
            messageApi.info("Заяявка на создание отправлена!");
            addTrack(false);
          }}
        >
          <Row gutter={[16, 8]}>
            <Col span={12}>
              <Form.Item
                rules={[
                  { required: true, message: "Пожалуйста заполните поле" },
                ]}
                name="namePos"
                label="Имя посылки"
                labelCol={{ span: 24 }}
              >
                <Input placeholder="Введите значение..."></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                rules={[
                  { required: true, message: "Пожалуйста заполните поле" },
                ]}
                name="idPos"
                label="Индекс посылки"
                labelCol={{ span: 24 }}
              >
                <Input placeholder="Введите значение..."></Input>
              </Form.Item>
            </Col>
          </Row>
          {contextHolder}
          <Row gutter={[16, 8]}>
            <Col span={12}>
              <Form.Item
                rules={[
                  { required: true, message: "Пожалуйста заполните поле" },
                ]}
                name="weightPos"
                label="Вес посылки"
                labelCol={{ span: 24 }}
              >
                <Input placeholder="Введите значение..."></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                rules={[
                  { required: true, message: "Пожалуйста заполните поле" },
                ]}
                name="pricePos"
                label="Цена посылки"
                labelCol={{ span: 24 }}
              >
                <Input placeholder="Введите значение..."></Input>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </Space>
  );
};

export default TrackingList;
