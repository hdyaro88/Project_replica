import React from "react";
import styles from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};
const ModelView = (props) => {
  return <div className={styles.model_view}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop onClose={props.onClose} />
      <ModelView children={props.children} />
    </React.Fragment>
  );
};
export default Modal;
