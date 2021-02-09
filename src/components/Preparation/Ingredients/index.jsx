import styles from "../../../styles/components/Preparation/Ingredients/Ingredients.module.scss";
import Checkbox from "../../Checkbox";

const Ingredients = ({ Ingredients }) => {
  return (
    <div className={styles.ingredients}>
      <h2 className={styles.ingredients__title}>Ingredients</h2>
      {Ingredients.map((food, index) => (
        <div key={index} className={styles.food}>
          <p className={styles.food__name}>{food.name}</p>
          <form>
            {food.ingredients.map((ingredient, index) => (
              <Checkbox key={index} name={index} text={ingredient} />
            ))}
          </form>
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
