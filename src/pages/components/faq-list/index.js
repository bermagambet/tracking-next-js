import React from "react";

import { Collapse } from "antd";

const { Panel } = Collapse;

import styles from "@/styles/Home.module.css";

const FaqList = (props) => {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://api.infriends.kz/questions`)
      .then((r) => r.data)
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
      <Panel
        header="Где фактически находится офис вашей компании?"
        key={questions ? questions.length + 1 : 1}
      >
        <p>Всю информацию можно найти на странице контакты</p>
      </Panel>
      <Panel
        header="В чем разница при регистрации на юридическое лицо или на физическое?"
        key={questions ? questions.length + 2 : 2}
      >
        <p>
          У юридических лиц есть ограничения в методах оплаты, они могут
          оплатить счет строго через банк, наличными в офисе либо сделать взнос
          на пластиковую карту (Оплата наличными в любом городе). Юридическим
          лицам предоставляются закрывающие документы по оплате (акт выполненных
          работ и счет фактура). Также для юридических лиц не доступен для
          покупки тарифный план хостинга Малый Бизнес. Для физических лиц мы
          предоставляем бухгалтерские документы при условии, что оплата будет
          произведена через банк, либо наличными в офисе нашей компании.
        </p>
      </Panel>
    </Collapse>
  );
};

export default FaqList;
