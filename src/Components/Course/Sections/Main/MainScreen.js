import React, { useState } from "react";
import {
  Content1,
  Content2,
  Content3,
  Content4,
  Content5,
  Content6,
} from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";
import Switch from "../Switch/Switch"
import styles from "./MainScreen.module.css";

const MainScreen = () => {
  const [content, setcontent] = useState(<Content1 />);
  const ShowContentHandler = (id) => {
    if (id === "1") {
      setcontent(<Content1 />);
    }
    if (id === "2") {
      setcontent(<Content2 />);
    }
    if (id === "3") {
      setcontent(<Content3 />);
    }
    if (id === "4") {
      setcontent(<Content4 />);
    }
    if (id === "5") {
      setcontent(<Content5 />);
    }
    if (id === "6") {
      setcontent(<Content6 />);
    }
  };
  return (
    <React.Fragment>
      <div className={styles.sidebar_section}>
        <Sidebar />
      </div>
      <div className={styles.mainscreen}>
        <div className={styles.content_section}>{content}</div>
        <div className={styles.switch_section}>
          <Switch onShowContent={ShowContentHandler} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default MainScreen;
