import React from "react";

import { Collapse } from "antd";

const { Panel } = Collapse;

import styles from "@/styles/Home.module.css";

const FaqList = (props) => {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://api.infriends.kz/questions/`)
      .then((r) => r.json())
      .then((rInner) => {
        console.log(rInner);
        setQuestions(rInner);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Collapse className={styles.menu}>
      {questions?.map((x, i) => {
        return (
          <Panel header={x.question} key={i}>
            <p>{x.answer}</p>
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default FaqList;
