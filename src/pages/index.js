import Head from "next/head";
import MenuRibbon from "./components/menu-ribbon";

import styles from "@/styles/Home.module.css";
import FaqList from "./components/faq-list";
import TrackingList from "./components/tracking-list";

import { useState, useEffect, useLayoutEffect } from "react";
import { ConfigProvider, theme, Spin } from "antd";
import { Calculator } from "react-mac-calculator";
import Profile from "./components/profile";
import AdminTracking from "./components/admin-tracking";

const { defaultAlgorithm, darkAlgorithm } = theme;

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState(false);

  const [page, setPage] = useState(3);
  const [loggedIn, setLoggedIn] = useState({
    loggedIn: false,
  });

  useLayoutEffect(() => {
    setLoading(true);
    const logTemp = window.sessionStorage.getItem("login");
    const idTemp = window.sessionStorage.getItem("id");
    if (logTemp && logTemp !== "null" && idTemp && idTemp !== "null") {
      setLoggedIn({
        loggedIn: true,
        login: logTemp,
        id: idTemp,
      });
    }
  }, []);

  useLayoutEffect(() => {
    const idTemp = window.sessionStorage.getItem("id");
    if (idTemp && idTemp !== "null") {
      fetch(`http://api.infriends.kz/is_admin/`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          user: idTemp,
        }),
      })
        .then((r) => {
          console.log(r);
          return r.json();
        })
        .then((rInner) => {
          console.log(rInner);
          setAdmin(rInner?.admin);
        });
    }
  }, [loggedIn]);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  useEffect(() => {
    setLoading(false);
  }, [loggedIn]);

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
      <Spin spinning={loading}>
        <main className={styles.main}>
          {page === 1 && <TrackingList loggedIn={loggedIn} loading={loading} />}
          {page === 2 && <Calculator loading={loading} />}
          {page === 3 && (
            <Profile
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              loading={loading}
            />
          )}
          {page === 4 && (
            <AdminTracking loggedIn={loggedIn} loading={loading} />
          )}
          <FaqList />
          <MenuRibbon
            page={page}
            setPage={setPage}
            loggedIn={loggedIn?.loggedIn}
            admin={admin}
          />
          {/* <Button onClick={handleClick}></Button> */}
        </main>
      </Spin>
    </ConfigProvider>
  );
}
