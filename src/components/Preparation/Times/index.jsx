import { BiTime } from "react-icons/bi";
import { FaUtensils } from "react-icons/fa";

import styles from "../../../styles/components/Preparation/Times/Times.module.scss";

const Times = ({ alltimes }) => (
  <ul className={styles.times}>
    {alltimes.map((time, index) => {
      const isFirst = index === 0;
      return (
        <li key={index} className={styles.times__item}>
          {isFirst ? (
            <FaUtensils className={`${styles.times__ico} ${styles.times__icoPrimary}`} />
          ) : (
            <BiTime className={styles.times__ico} />
          )}
          <div className={styles.times__text}>
            <span className={styles.times__title}>{time.name}</span>
            <p className={`${styles.times__time} ${isFirst ?? styles.times__timePrimary}`}>
              {time.description}
            </p>
          </div>
        </li>
      );
    })}
  </ul>
);

export default Times;
