import Recipe from "../components/Recipe";
import styles from "../styles/pages/Home.module.scss";

const Home = () => (
  <div className={styles.Home}>
    <Recipe href="/cheesecake" title="Classic Cheesecake" />
  </div>
);

export default Home;
