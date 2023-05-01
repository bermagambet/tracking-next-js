import React from "react";

import { Input, Space, Card, Descriptions, Button, Alert, Spin } from "antd";
import {
  HomeOutlined,
  UnorderedListOutlined,
  CalculatorOutlined,
  UserOutlined,
} from "@ant-design/icons";

import styles from "@/styles/Home.module.css";

const TrackingList = (props) => {
  const [posylkas, setPosylkas] = React.useState([
    {
      name: 1,
      pos_id: 1,
    },
    {
      name: 2,
      pos_id: 2,
    },
    {
      name: 3,
      pos_id: 3,
    },
    {
      name: 4,
      pos_id: 4,
    },
    {
      name: 5,
      pos_id: 5,
    },
  ]);
  const [isEmpty, setIsEmpty] = React.useState(null);

  const [searchVal, setSearchVal] = React.useState(null);

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
      <Input.Search
        placeholder="Введите трек номер"
        className={styles.inputs}
        onChange={onSearch}
      />
      <Space
        direction="vertical"
        className={posylkas ? styles.trackingSpace2 : styles.trackingSpaceEmpty}
      >
        {searchVal && searchVal !== ''
          ? posylkas
              ?.filter(
                (x) =>
                  x.pos_id?.toString()?.includes(searchVal) || x.name?.toString()?.includes(searchVal)
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
    </Space>
  );
};

export default TrackingList;
