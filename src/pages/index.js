import Head from "next/head";
import MenuRibbon from "./components/menu-ribbon";

import styles from "@/styles/Home.module.css";
import FaqList from "./components/faq-list";
import TrackingList from "./components/tracking-list";

import { useState } from "react";
import { ConfigProvider, theme, Button } from "antd";
import { Calculator } from "react-mac-calculator";
import Profile from "./components/profile";

const { defaultAlgorithm, darkAlgorithm } = theme;

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [page, setPage] = useState(3);
  const [loggedIn, setLoggedIn] = useState(false);

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
        <title>InfriendsCargo</title>
        <meta name="description" content="Трекинг системы" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {page === 1 && <TrackingList />}
        {page === 2 && <Calculator />}
        {page === 3 && (
          <Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        )}
        <FaqList />
        <MenuRibbon page={page} setPage={setPage} loggedIn={loggedIn} />
        {/* <Button onClick={handleClick}></Button> */}
      </main>
    </ConfigProvider>
  );
}
