import styles from "./Slider.module.css";
const Slider = (props) => {
  const setid = (event) => {
    props.onGetId(event.target.id);
  };

  return (
    <div className={styles.flex_slider}>
      <a href="./">&nbsp; &lt; &nbsp;</a>
      <div className={styles.slider_btn}>
        <button id="1" onClick={setid}></button>
        <button id="2" className={styles.active} onClick={setid}></button>
        <button id="3" onClick={setid}></button>
        <button id="4" onClick={setid}></button>
        <button id="5" onClick={setid}></button>
        <button id="6" onClick={setid}></button>
      </div>
      <a href="./">&nbsp; &gt; &nbsp;</a>
    </div>
  );
};
export default Slider;
