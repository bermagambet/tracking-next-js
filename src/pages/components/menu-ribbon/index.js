import React from "react";

import { Button, Divider, Space, Typography } from "antd";
import {
  HomeOutlined,
  CalculatorOutlined,
  UserOutlined,
} from "@ant-design/icons";

import styles from "@/styles/Home.module.css";

const MenuRibbon = (props) => {
  const { page, setPage, loggedIn } = props;

  const homeButtonProps = {
    onClick: loggedIn  ? () => setPage(1) : () => null,
    className: loggedIn ? styles.home : styles.unauth,
  };

  const calcButtonProps = {
    onClick: loggedIn  ? () => setPage(2) : () => null,
    className: loggedIn ? styles.calc : styles.unauth,
  };

  const userButtonProps = {
    onClick: () => setPage(3),
    className: styles.calc,
  };

  return (
    <Space
      direction={"horizontal"}
      className={styles.icons}
      split={<Divider type="vertical" className={styles.divider} />}
    >
      <HomeOutlined {...homeButtonProps} />
      <CalculatorOutlined {...calcButtonProps} />
      <UserOutlined {...userButtonProps} />
      <Button style={{justifyContent: 'center', alignSelf: 'center'}} onClick={() => {window.open('http://api.infriends.kz/admin/', '_blank');}}>Админ</Button>
    </Space>
  );
};

export default MenuRibbon;
