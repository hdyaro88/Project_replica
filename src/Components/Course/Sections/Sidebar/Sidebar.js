import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <a href="./" style={{ cursor: "pointer" , color: "white" }}>&lt; Back</a>
        </li>
        <li>
          <a href="./" style={{ color: "white" }}>
            Logic
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
