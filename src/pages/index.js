import Head from "next/head";
import MenuRibbon from "./components/menu-ribbon";

import styles from "@/styles/Home.module.css";
import FaqList from "./components/faq-list";
import TrackingList from "./components/tracking-list";

import { useState } from "react";
import { ConfigProvider, theme, Button } from "antd";
import { Calculator } from "react-mac-calculator";

const { defaultAlgorithm, darkAlgorithm } = theme;

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [page, setPage] = useState(1);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
   };

  return (
    <ConfigProvider
      theme={{
        algorithm: !isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Head>
        <title>IncarCargo</title>
        <meta name="description" content="Прототип трекинг системы" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {page === 1 && <TrackingList />}
        {page === 2 && <Calculator />}
        <FaqList />
        <MenuRibbon page={page} setPage={setPage} />
        {/* <Button onClick={handleClick}></Button> */}
      </main>
    </ConfigProvider>
  );
}
