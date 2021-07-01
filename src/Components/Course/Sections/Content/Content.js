import React from "react";
import styles from "./Content.module.css";
import image3 from "./image3.PNG";
import image4 from "./s3.PNG";
export const Content1 = () => {
  return (
    <div id="content1" className={styles.content}>
      <h1>
        Joseph, Kevin, and Nicholas are 3 brothers, and the following statements
        about them are all true:
      </h1>
      <ul>
        <li>Joseph is not the youngest.</li>
        <li>Kevin is the oldest.</li>
        <li>Nicholas is not the oldest.</li>
      </ul>
    </div>
  );
};
export const Content2 = () => {
  return (
    <div className={`${styles.content} ${styles.content2}`}>
      <img src={image3} width="80%" alt="slide" />
      <p>
        One of the women above is named Kaylee and the other is named Inara.
        They each make a statement about who they are as shown.
        <br />
        <br />
        We know that at least one of them is lying. What color is Inara's dress?
      </p>
    </div>
  );
};
export const Content3 = () => {
  return (
    <div className={`${styles.content} ${styles.content3}`}>
      <img
        src={image4}
        width="80%"
        style={{ textAlign: "center" }}
        alt="slide"
      />
      <p>
        The next three problems gradually increase in difficulty, and all of
        them are more challenging than the warm-ups you just solved.
        <br /> <br /> It's worth the effort. The most effective learning
        experiences are often those times when you get a problem wrong, and then
        challenge yourself to read, understand, and learn from the solution.
      </p>
    </div>
  );
};
export const Content4 = () => {
  return (
    <div id="content1" className={styles.content}>
      <h1 style={{ fontSize: "x-large" }}>
        Arrange the cards to make the following true:
      </h1>
      <ul>
        <li>The king is in one of the two middle spaces.</li>
        <li>The queen is left of the jack and right of the ace.</li>
        <li>The ace is directly next to the queen.</li>
      </ul>
    </div>
  );
};
export const Content5 = () => {
  return (
    <div id="content1" className={styles.content}>
      <h1 style={{ fontSize: "x-large" }}>Five friends competed in a race.</h1>
      <ul>
        <li>Pyrrha finished faster than Blake.</li>
        <li>
          The smallest difference in finishing times was between Pyrrha and
          Ruby.
        </li>
        <li>
          The largest difference in finishing times was between Ruby and Weiss.
        </li>
        <li>
          Yang finished either 1<sup>st</sup> or 3<sub>rd</sub> .
        </li>
      </ul>
    </div>
  );
};
export const Content6 = () => {
  return (
    <div id="content1" className={styles.content}>
      <ul>
        <li>There is exactly 11 false statement in this list.</li>
        <li>There are exactly 22 false statements in this list.</li>
        <li>There are exactly 33 false statements in this list.</li>
      </ul>
      <h1 style={{ fontSize: "x-large" }}>
        How many false statements are there in the list above?
      </h1>
    </div>
  );
};

const Content = () => {
  return (
    <React.Fragment>
      <div id="content1" className={styles.content}>
        <h1 style={{ fontSize: "x-large" }}>
          Joseph, Kevin, and Nicholas are 3 brothers, and the following
          statements about them are all true:
        </h1>
        <ul>
          <li>Joseph is not the youngest.</li>
          <li>Kevin is the oldest.</li>
          <li>Nicholas is not the oldest.</li>
        </ul>
      </div>
      <div id="content2">
        <h1>2</h1>
      </div>
      <div id="content3">
        <h1>3</h1>
      </div>
      <div id="content4">
        <h1>4</h1>
      </div>
      <div id="content5">
        <h1>5</h1>
      </div>
      <div id="content6">
        <h1 style={{ color: "black", backgroundColor: "green" }}>6</h1>
      </div>
    </React.Fragment>
  );
};
export default Content;
