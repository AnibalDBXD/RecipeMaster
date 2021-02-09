import Link from "next/link";

import styles from "../../styles/components/Recipe/Recipe.module.scss";

const Recipe = ({ title, href }) => {
  return (
    <Link href={href}>
      <a>
        <div className={styles.Recipe}>
          <p className={styles.Recipe__title}>{title}</p>
        </div>
      </a>
    </Link>
  );
};

export default Recipe;
