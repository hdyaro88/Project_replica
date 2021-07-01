import styles from "./Header.module.css";
import image1 from "./brilliant.jpg";
const Header = (props) => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <img alt="slide" src={image1} height="50px" />
        </li>
        <li className={styles.list_item}>
          <a href="./" className={styles.anchor}>
            <h1>Today</h1>
          </a>
        </li>
        <li className={styles.list_item}>
          <a href="./" className={styles.anchor}>
            <h1>Courses</h1>
          </a>
        </li>
      </ul>
      <ul className={styles.side_list}>
        <li className={styles.side_buttons}>
          <button onClick={props.onShow} className={styles.login}>
            Log in
          </button>
        </li>
        <li className={styles.side_buttons}>
          <button className={styles.signup}>Sign up</button>
        </li>
      </ul>
    </div>
  );
};
export default Header;
