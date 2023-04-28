import React from "react";

import { Input, Space, Card, Descriptions, Button, Alert } from "antd";
import {
  HomeOutlined,
  UnorderedListOutlined,
  CalculatorOutlined,
  UserOutlined,
} from "@ant-design/icons";

import styles from "@/styles/Home.module.css";

const TrackingList = (props) => {
  const [posylkas, setPosylkas] = React.useState([]);

  React.useEffect(() => {
    const { origin } = window.location;
    fetch(`${origin}/posylkas`)
      .then((r) => r.data)
      .then((rInner) => {
        console.log(rInner);
        setPosylkas(rInner);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Space direction="vertical" className={styles.trackingSpace}>
      <Input.Search
        placeholder="Введите трек номер"
        className={styles.inputs}
      />
      <Space direction="vertical" className={posylkas ? styles.trackingSpace2 : styles.trackingSpaceEmpty}>
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
        {!posylkas && <Alert message="Посылок на данный момент нет." type="error" />}
      </Space>
    </Space>
  );
};

export default TrackingList;
