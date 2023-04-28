import React from "react";

import { Divider, Space } from "antd";
import {
  HomeOutlined,
  UnorderedListOutlined,
  CalculatorOutlined,
  UserOutlined,
} from "@ant-design/icons";

import styles from "@/styles/Home.module.css";

const MenuRibbon = (props) => {
  const { page, setPage } = props;
  return (
    <Space
      direction={"horizontal"}
      className={styles.icons}
      split={<Divider type="vertical" className={styles.divider} />}
    >
      <HomeOutlined onClick={() => setPage(1)} className={styles.home}/>
      <CalculatorOutlined onClick={() => setPage(2)} className={styles.calc}/>
    </Space>
  );
};

export default MenuRibbon;
