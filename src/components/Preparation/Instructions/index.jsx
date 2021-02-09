import styles from "../../../styles/components/Preparation/Instructions/Instructions.module.scss";
import Instruction from "./Instruction";

const Instructions = ({ instructions }) => (
  <div className={styles.instructions}>
    <h2 className={styles.instructions__title}>Instructions</h2>
    <ul className={styles.instruction__list}>
      {instructions.map((instruction, index) => (
        <Instruction key={index} number={index}>
          {instruction}
        </Instruction>
      ))}
    </ul>
  </div>
);

export default Instructions;
