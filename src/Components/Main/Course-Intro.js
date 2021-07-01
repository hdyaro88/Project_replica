import React, { useState } from "react";
import image2 from "./image2.PNG";
import styles from "./Main.module.css";
import Section from "./Section/Section";
import DataList from "../Main/Data";
const CourseIntro = (props) => {
  const [ReadmoreisClicked, setReadmoreisClicked] = useState(false);
  document.body.style.marginTop = "6rem";
  return (
    <>
      <div className={styles.flex_container}>
        <div className={styles.course_info}>
          <h1>Logic</h1>
          <h2>
            Stretch your analytic muscles with knights, knaves, logic gates, and
            more!
          </h2>
          <h3>
            The beginning of our introductory math journey is Logic. Through
            these challenging problem solving exercises, you'll construct the
            critical thinking skills that are the basis for mathematical
            reasoning.
            <br />
            <br />
            <br /> You'll use limited information to make predictions –
            eliminating the impossible to uncover the truth. This course builds
            up to some truly mind-bending challenges!{" "}
            {!ReadmoreisClicked && (
              <button
                className={styles.readmore}
                onClick={() => {
                  setReadmoreisClicked(true);
                }}
              >
                Read more
              </button>
            )}{" "}
          </h3>{" "}
          <br />
          {ReadmoreisClicked && (
            <React.Fragment>
              <h3>
                By the end of this course, you'll be able to spot logical
                fallacies, navigate some strategic game theory, understand
                machine logic, and use the symbolic languages of logic to
                understand fun riddles.
              </h3>

              <h3>
                <strong>Topics Covered</strong>
              </h3>
              <div className={styles.topic_section}>
                <ul className={styles.topic_list}>
                  <li >
                    <h3>Binary</h3>
                  </li>
                  <li >
                    <h3>De Morgan's Laws</h3>
                  </li>
                  <li >
                    <h3>Truth Tables</h3>
                  </li>
                  <li >
                    <h3>Inclusive and Exclusive OR</h3>
                  </li>
                  <li >
                    <h3>Logic Gates</h3>
                  </li>
                  <li >
                    <h3>Venn and Euler Diagrams</h3>
                  </li>
                  <li>
                    <h3>Knight and Knave Puzzles</h3>
                  </li>
                </ul>
              </div>
            </React.Fragment>
          )}
        </div>
        <div className={styles.course_info2}>
          <div className={styles.info2_img}>
            <img alt="slide" src={image2} />
          </div>
          <div className={styles.info2_text}>
            <h3>Interactive quizzes</h3>
            <h3>Concepts and exercises</h3>
          </div>
          <div>
            <button onClick={props.onShow} className={styles.st_course_btn}>
              Start Course
            </button>
          </div>
        </div>
      </div>
      {DataList.map((item) => {
        return (
          <Section
          key = {''}
            title={item.title}
            description={item.description}
            list={item.list}
          />
        );
      })}
    </>
  );
};
export default CourseIntro;
