import { BsGrid3X2Gap } from "react-icons/bs";

import styles from "../../styles/components/Header/Header.module.scss";

const Header = ({ title, description }) => (
  <header className={styles.header}>
    <h1 className={styles.header__title}>{title}</h1>
    <div className={styles.text}>
      <BsGrid3X2Gap className={styles.text__ico} />
      <p className={styles.text__text}>{description}</p>
    </div>
  </header>
);

export default Header;
