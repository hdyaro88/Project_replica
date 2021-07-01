import Slider from "../../../UI/Slider/Slider";
import styles from "./Switch.module.css";
const Switch = (props) => {
  // document.body.style.marginTop = "200px";
  return (
    <div className={styles.switch}>
      <div className={styles.slider_bar}>
        <h1 style={{ fontSize: "medium", textAlign: "center" }}>Lesson 1</h1>
        <h2 style={{ fontFamily: "sans-serif" }}>WARMUP PUZZLES</h2>
        <Slider onGetId={props.onShowContent} />
      </div>
    </div>
  );
};
export default Switch;
