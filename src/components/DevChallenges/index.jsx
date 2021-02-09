import styles from "../../styles/components/DevChallenges/DevChallenges.module.scss";

const DevChallenges = () => (
  <div className={styles.dev}>
    <p className={styles.dev__text}>
      <a href="https://anibal.cf" target="__blank">
        Anibal Olivares
      </a>
      {" | "}DevChallenges.io
    </p>
  </div>
);

export default DevChallenges;
