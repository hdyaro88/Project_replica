import styles from "./Section.module.css";
const Section = (props) => {
  return (
    <div className={styles.section}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <ol>
        {props.list.map((item) => {
          return (
            <li key={Math.random}>
              <a>
                <figure>
                  <img src={item.image} alt="course item " />
                  <figcaption style={{fontStyle : "bold" , fontWeight : "bold"}}>{item.title}</figcaption>
                  <figcaption>{item.description}.</figcaption>
                </figure>
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Section;
