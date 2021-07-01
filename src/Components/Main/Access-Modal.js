import Modal from "../UI/Modal/Modal";
import rocket from "./rocket.gif";
import styles from "./access-modal.module.css";

const AccessModal = (props) => {
  const accessHandler = (event) => {
    event.preventDefault();
    props.onAccess();
    props.onClose();
  };
  return (
    <Modal onClose={props.onClose}>
      <div className={styles.access_flex}>
        <div className={styles.rocket}>
          <img alt="slide" className={styles.rocket_img} src={rocket} />
        </div>
        <div className={styles.access_form}>
          <form className={styles.access_form1}>
            <h1 style={{ textAlign: "center" }}>Excel in math and science.</h1>
            <div className={styles.btn_div}>
              <div className={styles.access_button}>
                <button onClick={accessHandler} className={styles.fb_btn}>
                  Join Using Facebook
                </button>
              </div>
              <div className={styles.access_button}>
                <button onClick={accessHandler} className={styles.gg_btn}>
                  Join Using Google
                </button>
              </div>
              <div className={styles.access_button}>
                <button onClick={accessHandler} className={styles.email_btn}>
                  Join Using Email
                </button>
              </div>
            </div>
            <h3 style={{ textAlign: "center" }}>
              Existing user?{" "}
              <a
                href="./"
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Log in.
              </a>
            </h3>
          </form>
        </div>
      </div>
    </Modal>
  );
};
export default AccessModal;
